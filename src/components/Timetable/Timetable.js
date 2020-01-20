import React from 'react';
import './Timetable.css';

const Timetable = ({ onRouteChange }) => {
	return(
		<div className='tt'>
			<div className='time'>
				<p className='f5 mt2 mb2 pa1 tc p1'>Days</p>
				<p className='f5 mt2 mb2 pa1 tc p2'>9-10am</p>
				<p className='f5 mt2 mb2 pa1 tc p3'>10-11am</p>
				<p className='f5 mt2 mb2 pa1 tc p4'>11-12am</p>
				<p className='f5 mt2 mb2 pa1 tc p5'>12-1pm</p>
				<p className='f5 mt2 mb2 pa1 tc p6'>1-2pm</p>
				<p className='f5 mt2 mb2 pa1 tc p7'>2-3pm</p>
				<p className='f5 mt2 mb2 pa1 tc p8'>3-4pm</p>
				<p className='f5 mt2 mb2 pa1 tc p9'>4-5pm</p>
				<p className='f5 mt2 mb2 pa1 tc p10'>5-6 pm</p>
			</div>
			<div className='day1 '>
				<p className='monday '>Monday</p>
				<input type="text" placeholder ='' className='inp11 ma2' />
				<input type="text" placeholder ='' className='inp12 ma2' />
				<input type="text" placeholder ='' className='inp13 ma2' />
				<input type="text" placeholder ='' className='inp14 ma2' />
				<input type="text" placeholder ='' className='inp15 ma2' />
				<input type="text" placeholder ='' className='inp16 ma2' />
				<input type="text" placeholder ='' className='inp17 ma2' />
				<input type="text" placeholder ='' className='inp18 ma2' />
				<input type="text" placeholder ='' className='inp19 ma2' />
			</div>
			<div className='day2 '>
				<p className='tuesday'>Tuesday</p>
				<input type="text" placeholder ='' className='inp21 ma2' />
				<input type="text" placeholder ='' className='inp22 ma2' />
				<input type="text" placeholder ='' className='inp23 ma2' />
				<input type="text" placeholder ='' className='inp24 ma2' />
				<input type="text" placeholder ='' className='inp25 ma2' />
				<input type="text" placeholder ='' className='inp26 ma2' />
				<input type="text" placeholder ='' className='inp27 ma2' />
				<input type="text" placeholder ='' className='inp28 ma2' />
				<input type="text" placeholder ='' className='inp29 ma2' />
			</div>
			<div className='day3 '>
				<p className='wednesday'>Wednesday</p>
				<input type="text" placeholder ='' className='inp31 ma2' />
				<input type="text" placeholder ='' className='inp32 ma2' />
				<input type="text" placeholder ='' className='inp33 ma2' />
				<input type="text" placeholder ='' className='inp34 ma2' />
				<input type="text" placeholder ='' className='inp35 ma2' />
				<input type="text" placeholder ='' className='inp36 ma2' />
				<input type="text" placeholder ='' className='inp37 ma2' />
				<input type="text" placeholder ='' className='inp38 ma2' />
				<input type="text" placeholder ='' className='inp39 ma2' />
			</div>
			<div className='day4'>
				<p className='thursday'>Thursday</p>
				<input type="text" placeholder ='' className='inp41 ma2' />
				<input type="text" placeholder ='' className='inp42 ma2' />
				<input type="text" placeholder ='' className='inp43 ma2' />
				<input type="text" placeholder ='' className='inp44 ma2' />
				<input type="text" placeholder ='' className='inp45 ma2' />
				<input type="text" placeholder ='' className='inp46 ma2' />
				<input type="text" placeholder ='' className='inp47 ma2' />
				<input type="text" placeholder ='' className='inp48 ma2' />
				<input type="text" placeholder ='' className='inp49 ma2' />
			</div>
			<div className='day5'>
				<p className='friday'>Friday</p>
				<input type="text" placeholder ='' className='inp51 ma2' />
				<input type="text" placeholder ='' className='inp52 ma2' />
				<input type="text" placeholder ='' className='inp53 ma2' />
				<input type="text" placeholder ='' className='inp54 ma2' />
				<input type="text" placeholder ='' className='inp55 ma2' />
				<input type="text" placeholder ='' className='inp56 ma2' />
				<input type="text" placeholder ='' className='inp57 ma2' />
				<input type="text" placeholder ='' className='inp58 ma2' />
				<input type="text" placeholder ='' className='inp59 ma2' />
			</div>
			<div className='day6'>
				<p className='saturday'>Saturday</p>
				<input type="text" placeholder ='' className='inp61 ma2' />
				<input type="text" placeholder ='' className='inp62 ma2' />
				<input type="text" placeholder ='' className='inp63 ma2' />
				<input type="text" placeholder ='' className='inp64 ma2' />
				<input type="text" placeholder ='' className='inp65 ma2' />
				<input type="text" placeholder ='' className='inp66 ma2' />
				<input type="text" placeholder ='' className='inp67 ma2' />
				<input type="text" placeholder ='' className='inp68 ma2' />
				<input type="text" placeholder ='' className='inp69 ma2' />
			</div>
			<div className='day7'>
				<p className='sunday'>Sunday</p>
				<input type="text" placeholder ='' className='inp71 ma2' />
				<input type="text" placeholder ='' className='inp72 ma2' />
				<input type="text" placeholder ='' className='inp73 ma2' />
				<input type="text" placeholder ='' className='inp74 ma2' />
				<input type="text" placeholder ='' className='inp75 ma2' />
				<input type="text" placeholder ='' className='inp76 ma2' />
				<input type="text" placeholder ='' className='inp77 ma2' />
				<input type="text" placeholder ='' className='inp78 ma2' />
				<input type="text" placeholder ='' className='inp79 ma2' />
			</div>
			
			<span>
				<div className='float dib bw2 grow shadow-5'onClick={() => {onRouteChange('todo')}}>
					<p className='my-float'>To-Do</p>
				</div>
			</span>
		</div>
	);
}

export default Timetable;