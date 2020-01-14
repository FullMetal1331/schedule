import React from 'react';
import './Signin.css';

const Signin = ({ onRouteChange }) => {
	return (
		<div>
			<div className="login-page">
			  <div className="form">
			  	<p className='tc f2'>^_^</p>
			    <form className="login-form">
			      <input type="text" placeholder="username"/>
			      <input type="password" placeholder="password"/>
			      <button onClick={() => onRouteChange('timeTable')}>Sign In</button>
			    </form>
			  </div>
			</div>
		</div>
	);
}

export default Signin;