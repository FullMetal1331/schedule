const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const nodemailer = require('nodemailer');
const cron = require('node-cron');
//imap
var Imap = require("imap");
var MailParser = require("mailparser").MailParser;
var Promise = require("bluebird");
const db = require('knex')({
  client: 'pg',
  version: '7.2',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : '123',
    database : 'schedule'
  }
});

const accountSid = 'ACc049719b1704b994a75b65eeb3533c39';
const authToken ='8410944558231b1ac066634dc907f206' ;

const client = require('twilio')(accountSid,authToken);
let alert_email_phone = [];

let transport = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'scheduletest9@gmail.com',
		pass: 'Scheduletest@9'
	},
});

var imapConfig = {
    user: 'scheduletest9@gmail.com',
    password: 'Scheduletest@9',
    host: 'imap.gmail.com',
    port: 993,
    tls: true,
    tlsOptions: { rejectUnauthorized: false },
    markSeen: true
};

function update_from_replies() {
	var imap = new Imap(imapConfig);
	Promise.promisifyAll(imap);

	imap.once("ready", execute);
	    imap.once("error", function(err) {
	});

	imap.connect();

	function execute() {
	    imap.openBox("INBOX", false, function(err, mailBox) {
	    	
	        if(err)
	        {
	            console.error(err);
	            return;
	        }
	        
	        imap.search(["UNSEEN"], function(err, results) {
	            
	            if(!results || !results.length)
	            {
	            	console.log("No unread mails");
	            	imap.end();
	            	return;
	            }
	            
	            imap.setFlags(results, ['\\Seen'], function(err) {
	                if(!err)
	                {
	                	console.log("marked as read");
	                }
	                else
	                {
	                    console.log('123',JSON.stringify(err, null, 2));
	                }
	            });

	           var f = imap.fetch(results, { bodies:['HEADER.FIELDS (FROM)','TEXT'] });
	            f.on("message", processMessage);
	            
	            f.once("error", function(err) {
	                return Promise.reject(err);
	            });
	            
	            f.once("end", function() {
	                imap.end();
	            });
	        });
	    });
	}

	function processMessage(msg, seqno) {

	    var parser = new MailParser();

	    parser.on('data', data => {
	    	
	        if(data.type === 'text')
	        {
	            var str = data.text;
	            var message,email;
	            message=str.substring(0,str.indexOf('\n'));
	            email=str.substring(str.lastIndexOf('<') + 1,str.lastIndexOf('>'));
	            console.log('email and msg', email,message);
	            let date = new Date();
	            let dayOfWeek = date.getDay();
	            var day = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
	            var Day = day[dayOfWeek];

	            db.select('*').from(Day).where('email','=',email)
	            .then(subjects =>{
	            	let email2 = subjects[0].email, arr = [], msg = message;
	            	
	                if(subjects[0].from9to10 !== 'Free!')
	                    arr.push(subjects[0].from9to10.toLowerCase());
	                if(subjects[0].from10to11 !== 'Free!')
	                    arr.push(subjects[0].from10to11.toLowerCase());
	                if(subjects[0].from11to12 !== 'Free!')
	                    arr.push(subjects[0].from11to12.toLowerCase());
	                if(subjects[0].from12to1 !== 'Free!')
	                    arr.push(subjects[0].from12to1.toLowerCase());
	                if(subjects[0].from1to2 !== 'Free!')
	                    arr.push(subjects[0].from1to2.toLowerCase());
	                if(subjects[0].from2to3 !== 'Free!')
	                    arr.push(subjects[0].from2to3.toLowerCase());
	                if(subjects[0].from3to4 !== 'Free!')
	                    arr.push(subjects[0].from3to4.toLowerCase());
	                if(subjects[0].from4to5 !== 'Free!')
	                    arr.push(subjects[0].from4to5.toLowerCase());
	                if(subjects[0].from5to6 !== 'Free!')
	                    arr.push(subjects[0].from5to6.toLowerCase());
	                
	                console.log(`Attendance Updation Summary: \nemail=${email2}, \narr=${arr}, \nmsg=${msg}`);
	                
	                for(let i=0;i<arr.length;i++)
	                {
	                    if(msg.charAt(i)=='Y' || msg.charAt(i)=='y')
	                    {
	                          // db('subject')
	                          // .returning('*')
	                          // .where({ email:email,name:arr[i] })
	                          // .increment({ attended: 1,total: 1})
	                          // .then(data => console.log('Done 1', data))
	                          // .catch(()=>console.log('Not Done 1'))
	                          
	                          db('subject')
	                          .where({ email:email2, name:arr[i] })
	                          .select('*')
	                          .then(data2 => {
	                          	let e = data2[0].email,
	                          		n = data2[0].name,
	                          		a = data2[0].attended, 
	                          		t = data2[0].total;
	                          		
	                          		console.log('enat', e, n, a, t);
	                          		
	                          		db('subject')
	                          		.returning('*')
	                          		.where({ email:e, name:n })
	                          		.update({attended: a+1, total: t+1})
	                          		.then(result => console.log(`updated entry: \nname = ${result.name} \nattended = ${result.attended} \ntotal = ${result.total}`))
	                          		.catch(() => console.log(`updation of ${n} failed`))
	                          })
	                          .catch(() => console.log('Not Done'))
	                    }
	                   else if(msg.charAt(i)=='N' || msg.charAt(i)=='n')
	                    {
	                          // db('subject')
	                          // .returning('*')
	                          // .where({ email:email,name:arr[i] })
	                          // .increment({ total: 1})
	                          // .then(data => console.log('Done 2', data))
	                          // .catch(()=>console.log('Not Done 2'))
	                          
	                          db('subject')
	                          .where({ email:email2, name:arr[i] })
	                          .select('*')
	                          .then(data2 => {
	                          	let e = data2[0].email,
	                          		n = data2[0].name,
	                          		a = data2[0].attended, 
	                          		t = data2[0].total;
	                          		
	                          		console.log('enat', e, n, a, t);
	                          		
	                          		db('subject')
	                          		.returning('*')
	                          		.where({ email:e, name:n })
	                          		.update({total: t+1})
	                          		.then(result => console.log(`updated entry: \nname = ${result.name} \nattended = ${result.attended} \ntotal = ${result.total}`))
	                          		.catch(() => console.log(`updation of ${n} failed`))
	                          })
	                          .catch(() => console.log('Not Done'))
	                    }
	                }
	                
	             })
	            
	        }
	     });

	    msg.on("body", function(stream) {
	        stream.on("data", function(chunk) {
	            parser.write(chunk.toString("utf8"));
	        });
	    });

	    msg.once("end", function() { parser.end(); });
	}
	
	return('updation success');
}

//input alert_email_phone values
db
.select('*')
.from('users')
.then(data => {
	
	for(let i=0;i<data.length;i++)
	{
		alert_email_phone.push({email: data[i].email, 
								phone: data[i].phone, 
								email_alert: data[i].email_alert, 
								phone_alert: data[i].phone_alert
							});
	}
	
	console.log(alert_email_phone);
})

// for emailing time table
cron.schedule('50 8-16 * * *' ,() =>{
	let date = new Date();
	let dayOfWeek = date.getDay();
	let hourOfDay = date.getHours();
	hourOfDay-=8;
	var day = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
	var Day = day[dayOfWeek];
	db.select('*').from(Day)
	.then(user =>{
		for(let i=0;i<user.length;i++)
		{
			var data;
			if(hourOfDay == 0)
				data=user[i].from9to10;
			else if(hourOfDay == 1)
				data=user[i].from10to11;
			else if(hourOfDay == 2)
				data=user[i].from11to12;
			else if(hourOfDay == 3)
				data=user[i].from12to1;
			else if(hourOfDay == 4)
				data=user[i].from1to2;
			else if(hourOfDay == 5)
				data=user[i].from2to3;
			else if(hourOfDay == 6)
				data=user[i].from3to4;
			else if(hourOfDay == 7)
				data=user[i].from4to5;
			else if(hourOfDay == 8)
				data=user[i].from5to6;
			else
				data = 'Free!';
			
			let email_alert=0, phone_alert=0, phone='';
			
			for(let x=0;x<alert_email_phone.length;x++)
			{
				if(user[i].email===alert_email_phone[x].email)
				{
					email_alert = alert_email_phone[x].email_alert;
					phone_alert = alert_email_phone[x].phone_alert;
					phone = alert_email_phone[x].phone;
				}
			}
			
			//console.log(`${data} \n  you have an attendance of: ${att}/${tot} \n i.e. ${per}%`);
			
			db('subject')
			.where({email: user[i].email, name: data.toLowerCase()})
			.select('*')
			.then(info => {
				let att, tot, per, data2;
				if(info[0] === undefined)
				{
					att = 0;
					tot = 0;
					data2 = 'N/A';
				}
				else
				{
					att = info[0].attended;
					tot = info[0].total;
					data2 = info[0].name;
				}
				
				if(tot==0)
					per = 0;
				else
					per = Math.floor((att*100)/tot);
				
				//console.log(`Time-Table msg summary: \nemail:${user[i].email} \nphone:${phone} \nemail_alert:${email_alert} \nphone_alert:${phone_alert} \nmsg: \n Your next class is ${data} \n you have an attendance of: ${att}/${tot} \n i.e. ${per}%`);
				
				if(email_alert)
				{
					transport.sendMail(
				    {
			            from: 'scheduletest9@gmail.com',
					    to: user[i].email,
					    subject: 'Next class',
					    html: `Your next class is: ${data2} \n in which you have an attendance of: ${att}/${tot} \n i.e. ${per}%`
					},
				    function(err,info){
					if(err)
						console.log(err)
					else
						console.log(`email sent to ${user[i].email}`);
				    }),
					{
						scheduled: true,
					    timezone: "Asia/Kolkata"
				    }
				}
				
				if(phone_alert && phone!='')
				{
					client.messages.create({
						to: `+91${phone}`,
					    from: '+12055831609',
					    body: `Your next class is: ${data2} \n in which you have an attendance of: ${att}/${tot} \n i.e. ${per}%`
					})
					.then(messages =>{console.log(`msg sent to ${phone}`)})
					.catch(err=>{console.log(err)})
				}
			})
	    }
	})
	.then(()=>console.log('Sent'))
});

// for emailing todo list
cron.schedule('* 8 * * *' ,() =>{
	
	console.log(update_from_replies());
	
	db
	.select('*')
	.from('users')
	.then(user =>{
		//console.log('todo user',user);
		for(let i=0;i<user.length;i++)
		{
			db
			.select('*')
			.from('todo')
			.where('email','=',user[i].email)
			.then(users =>{
				//console.log('todo users',users);
				if(users.length>0)
				{
					let task='' ,temp = users[0].email;
					
					for(let j=0;j<users.length;j++)
					{
						task = task + users[j].job ;
						if(j!=users.length-1)
							task=task+', '+'\n';
					}
					//task.toString();
					//console.log('is it with enter?',task);
					
					let email_alert=0, phone_alert=0, phone='';
					
					for(let x=0;x<alert_email_phone.length;x++)
					{
						if(temp===alert_email_phone[x].email)
						{
							email_alert = alert_email_phone[x].email_alert;
							phone_alert = alert_email_phone[x].phone_alert;
							phone = alert_email_phone[x].phone;
						}
					}
					
					//console.log(`Todo msg summary: \nemail:${user[i].email} \nphone:${phone} \nemail_alert:${email_alert} \nphone_alert:${phone_alert} \nmsg: \n Your tasks for today are:\n ${task}`);
					
					if(email_alert)
					{
						transport.sendMail(
					    {
				            from: 'scheduletest9@gmail.com',
						    to: temp,
						    subject: 'Your tasks for today are:',
						    html: task
						},
					    function(err,info){
						if(err)
							console.log(err)
						else
							console.log(`email sent to ${temp}`);
					    }),
						{
							scheduled: true,
						    timezone: "Asia/Kolkata"
					    }
					}
					
					if(phone_alert && phone!='')
					{
						client.messages.create({
							to: `+91${phone}`,
						    from: '+12055831609',
						    body: `Your tasks for today are:\n${task}` 
						})
						.then(messages =>{console.log(`msg sent to ${phone}`)})
						.catch(err=>{console.log(err)})
					}
				}
			})
			.then(() => {console.log('Sent')});
		}
	})
});

//for attendance updation
cron.schedule('* 19 * * *', () => {
	let date = new Date();
	let dayOfWeek = date.getDay();
	var day = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
	var Day = day[dayOfWeek];
	
	db
	.select('*')
	.from(Day)
	.then(user =>{
		for(let i=0;i<user.length;i++)
		{
			let data = '';
			
			if(user[i].from9to10!=='Free!' && user[i].from9to10!=='')
				data = data + user[i].from9to10 + ', \n ';
			
			if(user[i].from10to11!=='Free!' && user[i].from10to11!=='')
				data = data + user[i].from10to11 + ', \n ';
			
			if(user[i].from11to12!=='Free!' && user[i].from11to12!=='')
				data = data + user[i].from11to12 + ', \n ';
			
			if(user[i].from12to1!=='Free!' && user[i].from12to1!=='')
				data = data + user[i].from12to1 + ', \n ';
			
			if(user[i].from1to2!=='Free!' && user[i].from1to2!=='')
				data = data + user[i].from1to2 + ', \n ';
			
			if(user[i].from2to3!=='Free!' && user[i].from2to3!=='')
				data = data + user[i].from2to3 + ', \n ';
			
			if(user[i].from3to4!=='Free!' && user[i].from3to4!=='')
				data = data + user[i].from3to4 + ', \n ';
			
			if(user[i].from4to5!=='Free!' && user[i].from4to5!=='')
				data = data + user[i].from4to5 + ', \n ';
			
			if(user[i].from5to6!=='Free!' && user[i].from5to6!=='')
				data = data + user[i].from5to6 + ', \n ';
			
			data = data + '(Reply with the following scheme without spaces Y=yes:N=no:C=cancelled)';
			
			let email_alert=0, phone_alert=0, phone='';
			
			for(let x=0;x<alert_email_phone.length;x++)
			{
				if(user[i].email===alert_email_phone[x].email)
				{
					email_alert = alert_email_phone[x].email_alert;
					phone_alert = alert_email_phone[x].phone_alert;
					phone = alert_email_phone[x].phone;
				}
			}
			
			//console.log(`Attendance update msg summary: \nemail:${user[i].email} \nemail_alert:${email_alert} \nphone_alert:${phone_alert} \nmsg: \n Your classes for today were:\n ${data}`);
			
			transport.sendMail(
		    {
	            from: 'scheduletest9@gmail.com',
			    to: user[i].email,
			    subject: 'Update your attendance',
			    html: data
			},
		    function(err,info){
			if(err)
				console.log(err)
			else
				console.log('info');
		    }),
			{
				scheduled: true,
			    timezone: "Asia/Kolkata"
		    }
	    }
	})
	.then(()=>console.log('Sent'))
});

const app = express();

app.use(bodyParser.json());
app.use(cors());

//signin
app.post('/signin', (req, res) =>{
	
	//console.log('server-side', req.body);
	
	const {email, password} = req.body;
	
	if(!email || !password)
	{
		return res.status(400).json('invalid credentials');
	}
	
	let realUser = {
        name:'',
        email:'',
        phone:'',
        email_alert: 0,
		phone_alert: 0,
        timeTable: [
          ['','','','','','','','',''],
          ['','','','','','','','',''],
          ['','','','','','','','',''],
          ['','','','','','','','',''],
          ['','','','','','','','',''],
          ['','','','','','','','',''],
          ['','','','','','','','','']
        ],
        todo: [],
        project: [],
        subject: []
      }
	
	db
	.select('email', 'hash')
	.from('login')
	.where('email', '=', email)
	.then(data => {
		if(bcrypt.compareSync(password, data[0].hash))
		{
			db.select('*').from('users')
			.where('email', '=', req.body.email)
			.then(user => {
				//console.log(user[0]);
				realUser.name = user[0].name;
				realUser.email = user[0].email;
				realUser.phone = user[0].phone;
				realUser.email_alert = user[0].email_alert;
				realUser.phone_alert = user[0].phone_alert;
				//res.json(user[0])
			})
			.then(() => {
				db.select('*').from('monday')
				.where('email', '=', req.body.email)
				.then(user => {
					//console.log(user[0]);
					realUser.timeTable[0][0] = user[0].from9to10;
					realUser.timeTable[0][1] = user[0].from10to11;
					realUser.timeTable[0][2] = user[0].from11to12;
					realUser.timeTable[0][3] = user[0].from12to1;
					realUser.timeTable[0][4] = user[0].from1to2;
					realUser.timeTable[0][5] = user[0].from2to3;
					realUser.timeTable[0][6] = user[0].from3to4;
					realUser.timeTable[0][7] = user[0].from4to5;
					realUser.timeTable[0][8] = user[0].from5to6;
				})
				.then(() => {
					db.select('*').from('tuesday')
					.where('email', '=', req.body.email)
					.then(user => {
						//console.log(user[0]);
						realUser.timeTable[1][0] = user[0].from9to10;
						realUser.timeTable[1][1] = user[0].from10to11;
						realUser.timeTable[1][2] = user[0].from11to12;
						realUser.timeTable[1][3] = user[0].from12to1;
						realUser.timeTable[1][4] = user[0].from1to2;
						realUser.timeTable[1][5] = user[0].from2to3;
						realUser.timeTable[1][6] = user[0].from3to4;
						realUser.timeTable[1][7] = user[0].from4to5;
						realUser.timeTable[1][8] = user[0].from5to6;
					})
					.then(() => {
						db.select('*').from('wednesday')
						.where('email', '=', req.body.email)
						.then(user => {
							//console.log(user[0]);
							realUser.timeTable[2][0] = user[0].from9to10;
							realUser.timeTable[2][1] = user[0].from10to11;
							realUser.timeTable[2][2] = user[0].from11to12;
							realUser.timeTable[2][3] = user[0].from12to1;
							realUser.timeTable[2][4] = user[0].from1to2;
							realUser.timeTable[2][5] = user[0].from2to3;
							realUser.timeTable[2][6] = user[0].from3to4;
							realUser.timeTable[2][7] = user[0].from4to5;
							realUser.timeTable[2][8] = user[0].from5to6;
							//res.json(user[0])
						})
						.then(() => {
							db.select('*').from('thursday')
							.where('email', '=', req.body.email)
							.then(user => {
								//console.log(user[0]);
								realUser.timeTable[3][0] = user[0].from9to10;
								realUser.timeTable[3][1] = user[0].from10to11;
								realUser.timeTable[3][2] = user[0].from11to12;
								realUser.timeTable[3][3] = user[0].from12to1;
								realUser.timeTable[3][4] = user[0].from1to2;
								realUser.timeTable[3][5] = user[0].from2to3;
								realUser.timeTable[3][6] = user[0].from3to4;
								realUser.timeTable[3][7] = user[0].from4to5;
								realUser.timeTable[3][8] = user[0].from5to6;
								//res.json(user[0])
							})
							.then(() => {
								db.select('*').from('friday')
								.where('email', '=', req.body.email)
								.then(user => {
									//console.log(user[0]);
									realUser.timeTable[4][0] = user[0].from9to10;
									realUser.timeTable[4][1] = user[0].from10to11;
									realUser.timeTable[4][2] = user[0].from11to12;
									realUser.timeTable[4][3] = user[0].from12to1;
									realUser.timeTable[4][4] = user[0].from1to2;
									realUser.timeTable[4][5] = user[0].from2to3;
									realUser.timeTable[4][6] = user[0].from3to4;
									realUser.timeTable[4][7] = user[0].from4to5;
									realUser.timeTable[4][8] = user[0].from5to6;
									//res.json(user[0])
								})
								.then(() => {
									db.select('*').from('saturday')
									.where('email', '=', req.body.email)
									.then(user => {
										//console.log(user[0]);
										realUser.timeTable[5][0] = user[0].from9to10;
										realUser.timeTable[5][1] = user[0].from10to11;
										realUser.timeTable[5][2] = user[0].from11to12;
										realUser.timeTable[5][3] = user[0].from12to1;
										realUser.timeTable[5][4] = user[0].from1to2;
										realUser.timeTable[5][5] = user[0].from2to3;
										realUser.timeTable[5][6] = user[0].from3to4;
										realUser.timeTable[5][7] = user[0].from4to5;
										realUser.timeTable[5][8] = user[0].from5to6;
										//res.json(user[0])
									})
									.then(() => {
										db.select('*').from('sunday')
										.where('email', '=', req.body.email)
										.then(user => {
											//console.log(user[0]);
											realUser.timeTable[6][0] = user[0].from9to10;
											realUser.timeTable[6][1] = user[0].from10to11;
											realUser.timeTable[6][2] = user[0].from11to12;
											realUser.timeTable[6][3] = user[0].from12to1;
											realUser.timeTable[6][4] = user[0].from1to2;
											realUser.timeTable[6][5] = user[0].from2to3;
											realUser.timeTable[6][6] = user[0].from3to4;
											realUser.timeTable[6][7] = user[0].from4to5;
											realUser.timeTable[6][8] = user[0].from5to6;
										})
										.then(() => {
											db
											.select('*')
											.from('todo')
											.where('email', '=', email)
											.then(user => {
												for(let i=0 ; i<user.length ; i++)
												{
													realUser.todo.push({email: email, job:user[i].job, key:user[i].key});
												}
											})
											.then(() => {
												db
												.select('*')
												.from('project')
												.where('email', '=', email)
												.then(data => {
													for(let i=0 ; i<data.length ; i++)
													{
														realUser.project.push({email: email, proj_name:data[i].proj_name, proj_task:data[i].proj_task, proj_done:data[i].proj_done, proj_key:data[i].proj_key});
													}
												})
												.then(() => {
													db
													.select('*')
													.from('subject')
													.where('email', '=', email)
													.then(data => {
														for(let i=0;i<data.length;i++)
														{
															realUser.subject.push({email:email, name:data[i].name, attended:data[i].attended, total:data[i].total});
														}
														res.json(realUser);
													})
													.catch(err => res.status(400).json('unable to get subject'))
												})
												.catch(err => res.status(400).json('unable to get project'))
											})
											.catch(err => res.status(400).json('unable to get todo'))
										})
										.catch(err => res.status(400).json('unable to get sunday'))
									})
									.catch(err => res.status(400).json('unable to get saturday'))
								})
								.catch(err => res.status(400).json('unable to get friday'))
							})
							.catch(err => res.status(400).json('unable to get thursday'))
						})
						.catch(err => res.status(400).json('unable to get wednesday'))
					})
					.catch(err => res.status(400).json('unable to get tuesday'))
				})
				.catch(err => res.status(400).json('unable to get monday'))
			})
			.catch(err => res.status(400).json('unable to get user-name or user-email or user-phone'))
		}
		else
			res.status(400).json('invalid credentials')
	})
	.catch(err => res.status(400).json('invalid credentials'))
});

//register
app.post('/register', (req, res) => {
	const { email, name, password } = req.body;
	
	if(!name || !email || !password)
	{
		console.log("invalid details");
		return res.status(400).json('Invalid Form Details');
	}
	
	alert_email_phone.push({email: email, phone: '', email_alert: 0, phone_alert: 0});
	console.log(alert_email_phone);
	
	var salt = bcrypt.genSaltSync(saltRounds);
	var hash = bcrypt.hashSync(password, salt);
	
	let realUser = {
        name:name,
        email:email,
        phone: '',
        email_alert: 0,
        phone_alert: 0,
        timeTable: [
          ['Free!','Free!','Free!','Free!','Free!','Free!','Free!','Free!','Free!'],
          ['Free!','Free!','Free!','Free!','Free!','Free!','Free!','Free!','Free!'],
          ['Free!','Free!','Free!','Free!','Free!','Free!','Free!','Free!','Free!'],
          ['Free!','Free!','Free!','Free!','Free!','Free!','Free!','Free!','Free!'],
          ['Free!','Free!','Free!','Free!','Free!','Free!','Free!','Free!','Free!'],
          ['Free!','Free!','Free!','Free!','Free!','Free!','Free!','Free!','Free!'],
          ['Free!','Free!','Free!','Free!','Free!','Free!','Free!','Free!','Free!']
        ],
        todo: [],
        subject: [],
        project: []
      }
	
	//console.log(email, name, password);
	
	db.transaction(trx => {
		trx.insert({ hash: hash, email: email}).into('login')
		  .returning('email')
		  .then(loginEmail => {return trx('users').returning('*').insert({email: loginEmail[0],name: name})
			.returning('email')
			.then(loginEmail => {return trx('monday').returning('*').insert({email: loginEmail[0]})
				.returning('email')
                .then(loginEmail => {return trx('tuesday').returning('*').insert({email: loginEmail[0]})
                	.returning('email')
			        .then(loginEmail => {return trx('wednesday').returning('*').insert({email: loginEmail[0]})
			        	.returning('email')
			            .then(loginEmail => {return trx('thursday').returning('*').insert({email: loginEmail[0]})
			            	.returning('email')
			                .then(loginEmail => {return trx('friday').returning('*').insert({email: loginEmail[0]})
			                	.returning('email')
			                    .then(loginEmail => {return trx('saturday').returning('*').insert({email: loginEmail[0]})
			                    	.returning('email')
			                        .then(loginEmail => {return trx('sunday').returning('*').insert({email: loginEmail[0]})
		                            })		
		                        })
		                    })
		                })
		            })
		        })
		    })
			.then(user =>{res.json(realUser);})
		  })
		.then(trx.commit)
		.catch(trx.rollback)
	})
	.catch((err) => res.status(400).json('user-email already exists'));
});


//signout....data saving
app.post('/signout', (req, res) => {
	const {email, phone, email_alert, phone_alert, name, timeTable, todo, project, subject} = req.body;
	
	let flag1 = 0;
	
	for(let i=0;i<alert_email_phone.length;i++)
	{
		if(alert_email_phone[i].email===email)
		{
			flag1 = 1
			alert_email_phone[i].email_alert = email_alert;
			alert_email_phone[i].phone_alert = phone_alert;
			alert_email_phone[i].phone = phone;
			break;
		}
	}
	
	if(!flag1)
	{
		alert_email_phone.push({email: email, phone: phone, email_alert: email_alert, phone_alert: phone_alert});
	}
	
	//console.log(req.body);
	
	db.transaction(trx => {
		db('monday')
		.where('email', '=', email)
		.update({
			from9to10 : timeTable[0][0],
	        from10to11: timeTable[0][1],
	        from11to12: timeTable[0][2],
	        from12to1 : timeTable[0][3],
	        from1to2  : timeTable[0][4],
	        from2to3  : timeTable[0][5],
	        from3to4  : timeTable[0][6],
	        from4to5  : timeTable[0][7],
	        from5to6  : timeTable[0][8]
		})
		.returning('*')
		.transacting(trx)
		.then(data => {
			console.log('after monday', data);
			return(
				db('tuesday')
				.where('email', '=', email)
				.update({
					from9to10 : timeTable[1][0],
			        from10to11: timeTable[1][1],
			        from11to12: timeTable[1][2],
			        from12to1 : timeTable[1][3],
			        from1to2  : timeTable[1][4],
			        from2to3  : timeTable[1][5],
			        from3to4  : timeTable[1][6],
			        from4to5  : timeTable[1][7],
			        from5to6  : timeTable[1][8]
				})
				.returning('*')
				.transacting(trx)
			)
		})
		.then(data => {
			console.log('after tuesday', data);
			return(
				db('wednesday')
				.where('email', '=', email)
				.update({
					from9to10 : timeTable[2][0],
			        from10to11: timeTable[2][1],
			        from11to12: timeTable[2][2],
			        from12to1 : timeTable[2][3],
			        from1to2  : timeTable[2][4],
			        from2to3  : timeTable[2][5],
			        from3to4  : timeTable[2][6],
			        from4to5  : timeTable[2][7],
			        from5to6  : timeTable[2][8]
				})
				.returning('*')
				.transacting(trx)
			)
		})
		.then(data => {
			console.log('after wednesday', data);
			return(
				db('thursday')
				.where('email', '=', email)
				.update({
					from9to10 : timeTable[3][0],
			        from10to11: timeTable[3][1],
			        from11to12: timeTable[3][2],
			        from12to1 : timeTable[3][3],
			        from1to2  : timeTable[3][4],
			        from2to3  : timeTable[3][5],
			        from3to4  : timeTable[3][6],
			        from4to5  : timeTable[3][7],
			        from5to6  : timeTable[3][8]
				})
				.returning('*')
				.transacting(trx)
			)
		})
		.then(data => {
			console.log('after thursday', data);
			return(
				db('friday')
				.where('email', '=', email)
				.update({
					from9to10 : timeTable[4][0],
			        from10to11: timeTable[4][1],
			        from11to12: timeTable[4][2],
			        from12to1 : timeTable[4][3],
			        from1to2  : timeTable[4][4],
			        from2to3  : timeTable[4][5],
			        from3to4  : timeTable[4][6],
			        from4to5  : timeTable[4][7],
			        from5to6  : timeTable[4][8]
				})
				.returning('*')
				.transacting(trx)
			)
		})
		.then(data => {
			console.log('after friday', data);
			return(
				db('saturday')
				.where('email', '=', email)
				.update({
					from9to10 : timeTable[5][0],
			        from10to11: timeTable[5][1],
			        from11to12: timeTable[5][2],
			        from12to1 : timeTable[5][3],
			        from1to2  : timeTable[5][4],
			        from2to3  : timeTable[5][5],
			        from3to4  : timeTable[5][6],
			        from4to5  : timeTable[5][7],
			        from5to6  : timeTable[5][8]
				})
				.returning('*')
				.transacting(trx)
			)
		})
		.then(data => {
			console.log('after saturday', data);
			return(
				db('sunday')
				.where('email', '=', email)
				.update({
					from9to10 : timeTable[6][0],
			        from10to11: timeTable[6][1],
			        from11to12: timeTable[6][2],
			        from12to1 : timeTable[6][3],
			        from1to2  : timeTable[6][4],
			        from2to3  : timeTable[6][5],
			        from3to4  : timeTable[6][6],
			        from4to5  : timeTable[6][7],
			        from5to6  : timeTable[6][8]
				})
				.returning('*')
				.transacting(trx)
			)
		})
		.then(data => {
			console.log('after sunday', data);
			return(
				db('todo')
				.where('email','=', email)
				.del()
				.returning('*')
				.transacting(trx)
			)
		})
		.then(data => {
			console.log('after del todo', data);
			return(
				db
				.insert(todo)
				.returning('*')
				.into('todo')
				.transacting(trx)
			)
		})
		.then(data => {
			console.log('after inserting todo', data);
			return(
				db('project')
				.where('email','=', email)
				.del()
				.returning('*')
				.transacting(trx)
			)
		})
		.then(data => {
			console.log('after del project', data);
			return(
				db
				.insert(project)
				.returning('*')
				.into('project')
				.transacting(trx)
			)
		})
		.then(data => {
			console.log('after inserting project', data);
			return(
				db('users')
				.where('email','=', email)
				.update({name: name, phone: phone, email_alert: email_alert, phone_alert: phone_alert})
				.returning('*')
				.transacting(trx)
			)
		})
		.then(data => {
			console.log('after updating users', data);
			return(
				db('subject')
				.where('email','=',email)
				.del()
				.returning('*')
				.transacting(trx)
			)
		})
		.then(data => {
			console.log('after del subjects', data);
			return(
				db
				.insert(subject)
				.into('subject')
				.returning('*')
				.transacting(trx)
			)
		})
		.then(trx.commit)
		.catch(trx.rollback)
	})
	.then(data => {
		res.send("success");
		console.log('outside trx func ',data);
		console.log('alert array', alert_email_phone);
	})
	.catch((err) => res.status(400).json('error in updating'));
})

app.listen(3000);