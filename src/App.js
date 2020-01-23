import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Landing from './components/Landing/Landing';
import Timetable from './components/Timetable/Timetable';
import Todo from './components/Todo/Todo';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      isSignedIn: false,
      route: 'landing',
      user: {
        name:'',
        email:'',
        timeTable: [
          ['','','','','','','','',''],
          ['','','','','','','','',''],
          ['','','','','','','','',''],
          ['','','','','','','','',''],
          ['','','','','','','','',''],
          ['','','','','','','','',''],
          ['','','','','','','','',''],
          ['','','','','','','','',''],
          ['','','','','','','','','']
        ],
        todo: []
      }
    }
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
  
  onRouteChange = (route) => {
    
    //console.log('route', route);
    
    if(route==='landing')
      this.setState({isSignedIn: false});
    else if(route==='timeTable' || route==='todo')
      this.setState({isSignedIn: true});
    
    this.setState({route: route});
    
    // console.log(this.state.user.todo);
  }
  
  render() {
    
    const { route, isSignedIn } = this.state;
    
    return (
      <div className="App">
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        {
          (route==='signin')?
            <Signin onRouteChange={this.onRouteChange} />
            :
            (route==='register')?
              <Register onRouteChange={this.onRouteChange} />
              :
              (route==='landing')?
                <Landing />
                :
                (route==='timeTable')?
                  <Timetable loadUsertt={this.loadUsertt} ttvals={this.state.user.timeTable} onRouteChange={this.onRouteChange} />
                  :
                  <Todo loadUsertodo={this.loadUsertodo} todovals={this.state.user.todo} onRouteChange={this.onRouteChange} />
        }
      </div>
    );
  }
}

export default App;
