import React from 'react';
import './Landing.css';

const Landing = () => {
	return(
		<div className='cards'>
			<div className='tc dib br3 pa3 ma2 grow card card1 bw2 shadow-5'>
				<img alt="photo" src={ require('./images.png') } className='c1img' />
				<div>
					<h2 className='f2'>About Schedule</h2>
					<p>Schedule is an all in one App to manage your schedule as well as your workload from long-term projects to short-term errands</p>
				</div>
			</div>
			<div className='tc dib br3 pa3 ma2 grow card card2 bw2 shadow-5'>
				<div className='c2imgs'>
					<img alt="photo" src={ require('./cogwheel.png') } className='c2img1 mr5' />
					<img alt="photo" src={ require('./cogwheel.png') } className='c2img2 ml5' />
					<img alt="photo" src={ require('./cogwheel.png') } className='c2img3 mr5' />
				</div>
				<div>
					<h2 className='f2'>How it works</h2>
					<p>Schedule App uses Reactjs to dynamically renders HTML elements all the while updating user data in the relational databases through a back-end server made using Expressjs</p>
				</div>
			</div>
			<div className='tc dib br3 pa3 ma2 grow card card3 bw2 shadow-5'>
				<div className='c3imgs'>
					<div>
						<img alt="photo" src={`https://robohash.org/saksham?100x100`} className='c3img11'/>
						<img alt="photo" src={`https://robohash.org/utkarsh2?100x100`} className='c3img12'/>
					</div>
					<div>
						<img alt="photo" src={`https://robohash.org/siddhart?100x100`} className='c3img21'/>
						<img alt="photo" src={`https://robohash.org/prakarsh?100x100`} className='c3img22'/>
					</div>
				</div>
				<div>
					<h2 className='f2'>Our Team</h2>
					<p></p>
				</div>
			</div>
		</div>
	);
}

export default Landing;