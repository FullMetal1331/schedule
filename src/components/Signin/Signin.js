import React from 'react';
import './Signin.css';

class Signin extends React.Component {
	
	constructor(props){
		super(props);
		this.state = {
			signInEmail: '',
			signInPassword: ''
		}
	}
	
	onEmailChange = (event) => {
		this.setState({signInEmail: event.target.value});
	}
	
	onPasswordChange = (event) => {
		this.setState({signInPassword: event.target.value});
	}
	
	routeChange = (event) => {
		fetch('http://localhost:3000/signin', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.signInEmail,
				password: this.state.signInPassword
			})
		})
		.catch((err) => {console.log(err)})
		
		this.props.onRouteChange('timeTable');
	}
	
	render() {
		return (
			<div>
				<div className="login-page">
				  <div className="form">
				  	<p className='tc f2'>^_^</p>
				    <form className="login-form">
				      <input onChange={this.onEmailChange} type="email" placeholder="email"/>
				      <input onChange={this.onPasswordChange} type="password" placeholder="password"/>
				      <button onClick={this.routeChange}>Sign In</button>
				    </form>
				  </div>
				</div>
			</div>
		);
	}
}

export default Signin;