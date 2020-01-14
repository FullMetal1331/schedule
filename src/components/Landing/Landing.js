import React from 'react';
import './Landing.css';

const Landing = () => {
	return(
		<div className='cards'>
			<div className='tc bg-light-purple dib br3 pa3 ma2 grow card bw2 shadow-5'>
				<img alt="photo" src={ require('./images.png') }/>
				<div>
					<h2 className='f2'>About Schedule</h2>
					<p>sdfsd</p>
				</div>
			</div>
			<div className='tc bg-white dib br3 pa3 ma2 grow card bw2 shadow-5'>
				<img alt="photo" src={ require('./cogs.jpg') }/>
				<div>
					<h2 className='f2'>How it works</h2>
					<p></p>
				</div>
			</div>
			<div className='tc bg-light-yellow dib br3 pa3 ma2 grow card bw2 shadow-5'>
				<img alt="photo" src={`https://robohash.org/1?200x200`}/>
				<div>
					<h2 className='f2'>About Us</h2>
					<p></p>
				</div>
			</div>
		</div>
	);
}

export default Landing;