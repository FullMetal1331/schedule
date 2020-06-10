import React from 'react';
import './Navigation.css';

const Navigation = ({ isSignedIn, onRouteChange, name }) => {
	if(isSignedIn)
	{
		return (
			<nav>
				<div className='logo'>
					<img src={ require('./clock-icon.ico') } className='logo-image' />
					<p onClick={ () => {onRouteChange('landing')} } className='f2 grow black pointer logo'>Schedule</p>
				</div>
				<div className='profile_button' onClick={ () => {onRouteChange('profile')}}>
					<img className='profile_button_img' src={`https://robohash.org/${name}?20x20`} alt="Profile"/>
				</div>
				<div className='options'>
					<p onClick={ () => {onRouteChange('landing')} } className='f3 link dim black underline pa3 pointer'>Sign Out</p>
				</div>
			</nav>
		);
	}
	else
	{
		return (
			<nav>
				<div className='logo'>
					<img src={ require('./clock-icon.ico') } className='logo-image' />
					<p onClick={ () => {onRouteChange('landing')} } className='f2 grow black pointer logo'>Schedule</p>
				</div>
				<div className='options'>
					<p onClick={ () => {onRouteChange('signin')} } className='f3 link dim black underline pa3 pointer l1'>Sign In</p>
					<p onClick={ () => {onRouteChange('register')} } className='f3 link dim black underline pa3 pointer l2'>Register</p>
				</div>
			</nav>
		);
	}
}

export default Navigation;