import React from 'react';
import './Landing.css';

const Landing = () => {
	return(
		<div className='cards'>
			<div className='tc dib br3 pa3 ma2 grow card card1 bw2 shadow-5'>
				<img alt="photo" src={ require('./images.png') } className='c1img' />
				<div>
					<h2 className='f2'>About Schedule</h2>
					<p>ajsdlfjsadkl;fj</p>
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
					<p>
						{/*<div>
							Icons made by 
							<a href="https://www.flaticon.com/authors/freepik" title="Freepik"> Freepik</a> 
							from 
							<a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
						</div>*/}
					</p>
				</div>
			</div>
			<div className='tc dib br3 pa3 ma2 grow card card3 bw2 shadow-5'>
				<div className='c3imgs'>
					<img alt="photo" src={`https://robohash.org/1?200x200`} className='c3img1'/>
					<img alt="photo" src={`https://robohash.org/2?200x200`} className='c3img2'/>
				</div>
				<div>
					<h2 className='f2'>About Us</h2>
					<p></p>
				</div>
			</div>
		</div>
	);
}

export default Landing;