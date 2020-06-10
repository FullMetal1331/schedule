import React from 'react';
import './Signin.css';

class Signin extends React.Component {
	
	constructor(props){
		super(props);
		this.state = {
			signInEmail: '',
			signInPassword: ''
		}
		
		this.onEmailChange = this.onEmailChange.bind(this);
		this.onPasswordChange = this.onPasswordChange.bind(this);
		this.routeChange = this.routeChange.bind(this);
	}
	
	onEmailChange = (event) => {
		this.setState({signInEmail: event.target.value});
	}
	
	onPasswordChange = (event) => {
		this.setState({signInPassword: event.target.value});
	}
	
	routeChange = (event) => {
		
		event.preventDefault();
		
		fetch('http://localhost:3000/signin', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.signInEmail,
				password: this.state.signInPassword
			})
		})
		.then(response => response.json())
		.then((user) => {
				if(user!="invalid credentials")
				{
					this.props.loadUser(user);
					this.props.onRouteChange('timeTable');
				}
		})
		.catch((err) => {console.log(err)})
		
			}
	
	render() {
		return (
			<div>
				<div className="login-page">
				  <div className="form">
				  	<p className='tc f2'>Sign In</p>
				    <form className="login-form" onSubmit={this.routeChange}>
				      <input onChange={this.onEmailChange} type="email" placeholder="email"/>
				      <input onChange={this.onPasswordChange} type="password" placeholder="password"/>
				      <button type='submit'>Sign In</button>
				    </form>
				  </div>
				</div>
			</div>
		);
	}
}

export default Signin;