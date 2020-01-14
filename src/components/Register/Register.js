import React from 'react';
import './Register.css'

const Register = ({ onRouteChange }) => {
	return (
		<div>
			<div className="login-page">
				<div className="form">
				  	<p className='tc f2'>^_^</p>
				    <form className="login-form">
					    <input type="text" placeholder="name"/>
					    <input type="email" placeholder="email"/>
					    <input type="password" placeholder="password"/>
					    <button onClick={() => onRouteChange('timeTable')}>Register</button>
				    </form>
				</div>
			</div>
		</div>
	);
}

export default Register;