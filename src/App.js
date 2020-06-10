import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Landing from './components/Landing/Landing';
import Timetable from './components/Timetable/Timetable';
import Todo from './components/Todo/Todo';
import Project from './components/Project/Project';
import Profile from './components/Profile/Profile';
import './App.css';

const initialState = {
      isSignedIn: false,
      route: 'landing',
      user: {
        name: '',
        email: '',
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
        project: [],
        subject: []
      }
    }

class App extends Component {
  constructor(props){
    super(props);
    this.state = initialState;
    
    //this.onDataSave = this.onDataSave.bind(this);
  }
  
  loadUsertt = (allDays) => {
    let userTemp = this.state.user;
    userTemp.timeTable = allDays;
    this.setState({user: userTemp});
    //console.log(this.state.user.timeTable);
  }
  
  loadUsertodo = (allJobs) => {
    let userTemp = this.state.user;
    userTemp.todo = allJobs;
    this.setState({user: userTemp});
    //console.log('inside loadUsertodo', this.state.user.todo);
    //console.log('inside loadUsertodo', allJobs);
  }
  
  loadUserproj = (allProjs) => {
    let userTemp = this.state.user;
    userTemp.project = allProjs;
    this.setState({user: userTemp});
    //console.log('inside loadUsertodo', this.state.user.todo);
    //console.log('inside loadUsertodo', allJobs);
  }
  
  loadUser = (user) => {
    console.log(user);
    this.setState({user: user});
  }
  
  changeName = (name) => {
    let tempUser = this.state.user;
    tempUser.name = name;
    this.setState({user: tempUser});
  }
  
  changePhone = (phone) => {
    let tempUser = this.state.user;
    tempUser.phone = phone;
    this.setState({user: tempUser});
  }
  
  onEmailAlert = (x) => {
    let tempUser = this.state.user;
    tempUser.email_alert = x;
    this.setState({user: tempUser}); 
  }
  
  onPhoneAlert = (x) => {
    let tempUser = this.state.user;
    tempUser.phone_alert = x;
    this.setState({user: tempUser}); 
  }
  
  // onDataSave = () => {}
     
  
  onRouteChange = (route) => {
    
    if(route==='landing')
    {
      this.setState(initialState);
    }
    else if(route==='timeTable' || route==='todo' || route==='project' || route==='profile')
      this.setState({isSignedIn: true});
    
    if(this.state.route==='timeTable' && route!=='timeTable')
    {
      let list = [];
      
      for(let i=0;i<7;i++)
      {
        let tempList = Array.from(new Set(this.state.user.timeTable[i]));
        console.log('loop',i,' temp list',tempList);
        list = list.concat(tempList);
        console.log('loop',i, ' list',list);
      }
      
      let finalList = Array.from(new Set(list));
      console.log('final list', finalList);
      
      let tempUser = this.state.user;
      console.log('tempUser', tempUser);
      
      for(let i=0;i<finalList.length;i++)
      {
        let x = true, s1 = finalList[i].toLowerCase();
        
        for(let j=0;j<tempUser.subject.length;j++)
        {
          if(tempUser.subject[j].name===s1)
            x = false;
        }
        
        if((x) && (s1!=="") && (s1!="free!"))
          tempUser.subject.push({email: this.state.user.email, name:s1, attended:0, total:0});
      }
      
      console.log('subjects at route change', tempUser.subject);
      
      this.setState({user: tempUser});
    }
    
    if((this.state.route==='todo' || this.state.route==='timeTable' || this.state.route==='project' || this.state.route==='profile') && route==='landing')
    {
      console.log('yo');
      fetch('http://localhost:3000/signout', {
        method: 'post',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: this.state.user.name,
          email: this.state.user.email,
          phone: this.state.user.phone,
          email_alert: this.state.user.email_alert,
          phone_alert: this.state.user.phone_alert,
          timeTable: this.state.user.timeTable,
          todo: this.state.user.todo,
          project: this.state.user.project,
          subject: this.state.user.subject
        })
      })
      .then(res => res.text())
      .then(res => {
        console.log('route change',res); 
        if(res==="success")
        {
          this.setState({route: route});
        }
        else
        {
          console.log('error updating');
        }
      })
      .catch((err) => console.log(err))
    }
    else
    {
      this.setState({route: route});
    }
  }
  
  render() {
    
    const { route, isSignedIn } = this.state;
    
    console.log(this.state.user.phone);
    
    return (
      <div className="App">
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} name={this.state.user.name} />
        {
          (route==='signin')?
            <Signin onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
            :
            (route==='register')?
              <Register onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
              :
              (route==='landing')?
                <Landing />
                :
                (route==='timeTable')?
                  <Timetable loadUsertt={this.loadUsertt} subject={this.state.user.subject} ttvals={this.state.user.timeTable} onRouteChange={this.onRouteChange} />
                  :
                  (route==='todo')?
                  <Todo loadUsertodo={this.loadUsertodo} todovals={this.state.user.todo} onRouteChange={this.onRouteChange} email={this.state.user.email} />
                  :
                  (route==='project')?
                    <Project loadUserproj={this.loadUserproj} projvals={this.state.user.project} onRouteChange={this.onRouteChange} email={this.state.user.email} />
                    :
                    <Profile changeName={this.changeName} changePhone={this.changePhone} onPhoneAlert={this.onPhoneAlert} onEmailAlert={this.onEmailAlert} onRouteChange={this.onRouteChange} name={this.state.user.name} subject={this.state.user.subject} phone={this.state.user.phone} email_alert={this.state.user.email_alert} phone_alert={this.state.user.phone_alert} />
        }
      </div>
    );
  }
}

export default App;
