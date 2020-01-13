import React from 'react';
import './Signin.css';

const Signin = () => {
	return (
		<div>
			<div className="login-page">
			  <div className="form">
			  	<p className='tc f2'>^_^</p>
			    <form className="register-form">
			      <input type="text" placeholder="name"/>
			      <input type="password" placeholder="password"/>
			      <input type="text" placeholder="email address"/>
			      <button>create</button>
			      <p className="message">Already registered? <a href="#">Sign In</a></p>
			    </form>
			    <form className="login-form">
			      <input type="text" placeholder="username"/>
			      <input type="password" placeholder="password"/>
			      <button>Sign In</button>
			    </form>
			  </div>
			</div>
		</div>
	);
}

export default Signin;