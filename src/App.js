import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      isSignedIn: false,
      route: 'landing'
    }
  }
  
  onRouteChange = (route) => {
    if(route==='landing')
      this.setState({isSignedIn: false});
    else if(route==='timeTable' || route==='todo')
      this.setState({isSignedIn: true});
    
    this.setState({route: route});
  }
  
  render() {
    
    const { route, isSignedIn } = this.state;
    
    return (
      <div className="App">
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}></Navigation>
        {
          (route==='signin')?
            <Signin></Signin>
            :
            (route==='register')?
              <register></register>
              :
              (route==='landing')?
                <landing></landing>
                :
                (route==='timeTable')?
                  <timeTable></timeTable>
                  :
                  <todo></todo>
        }
      </div>
    );
  }
}

export default App;
