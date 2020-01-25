const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const saltRounds = 10;
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

const app = express();

app.use(bodyParser.json());
app.use(cors());

//signin
app.post('/signin', (req, res) =>{
	
	console.log('server-side', req.body);
	
	db.select('email', 'hash').from('login')
	.where('email', '=', req.body.email)
	.then(data => {
		if(bcrypt.compareSync(req.body.password, data[0].hash))
		{
			return db.select('*').from('users')
			.where('email', '=', req.body.email)
			.then(user => {
				res.json(user[0])
			})
			.catch(err => res.status(400).json('unable to get user'))
		}
		else
			res.status(400).json('invalid credentials')
	})
	.catch(err => res.status(400).json('invalid credentials'))
});

//register
app.post('/register', (req, res) => {
	const { email, name, password } = req.body;
	
	var salt = bcrypt.genSaltSync(saltRounds);
	var hash = bcrypt.hashSync(password, salt);
	
	console.log(email, name, password);
	
	db.transaction(trx => {
		trx.insert({
			hash: hash,
			email: email
		})
		.into('login')
		.returning('email')
		.then(loginEmail => {
		return trx('users')
				.returning('*')
				.insert({
					email: email,
					name: name
				})
				.then((user) => {
					res.json(user[0]);
				})
			})
			.then(trx.commit)
			.catch(trx.rollback)
	})
	.catch((err) => res.status(400).json('user-email already exists'));
	
	// db('schedule')
	// .returning('*')
	// .insert({
	// 	email: email,
	// 	name: name
	// })
	// .then
});


app.listen(3000);