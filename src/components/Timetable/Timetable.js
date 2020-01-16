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
				<input type="text" placeholder ='' className='inp2 ma2' />
				<input type="text" placeholder ='' className='inp2 ma2' />
				<input type="text" placeholder ='' className='inp2 ma2' />
				<input type="text" placeholder ='' className='inp2 ma2' />
				<input type="text" placeholder ='' className='inp2 ma2' />
				<input type="text" placeholder ='' className='inp2 ma2' />
				<input type="text" placeholder ='' className='inp2 ma2' />
				<input type="text" placeholder ='' className='inp2 ma2' />
				<input type="text" placeholder ='' className='inp2 ma2' />
			</div>
			<div className='day3 '>
				<p className='wednesday'>Wednesday</p>
				<input type="text" placeholder ='' className='inp3 ma2' />
				<input type="text" placeholder ='' className='inp3 ma2' />
				<input type="text" placeholder ='' className='inp3 ma2' />
				<input type="text" placeholder ='' className='inp3 ma2' />
				<input type="text" placeholder ='' className='inp3 ma2' />
				<input type="text" placeholder ='' className='inp3 ma2' />
				<input type="text" placeholder ='' className='inp3 ma2' />
				<input type="text" placeholder ='' className='inp3 ma2' />
				<input type="text" placeholder ='' className='inp3 ma2' />
			</div>
			<div className='day4'>
				<p className='thursday'>Thursday</p>
				<input type="text" placeholder ='' className='inp4 ma2' />
				<input type="text" placeholder ='' className='inp4 ma2' />
				<input type="text" placeholder ='' className='inp4 ma2' />
				<input type="text" placeholder ='' className='inp4 ma2' />
				<input type="text" placeholder ='' className='inp4 ma2' />
				<input type="text" placeholder ='' className='inp4 ma2' />
				<input type="text" placeholder ='' className='inp4 ma2' />
				<input type="text" placeholder ='' className='inp4 ma2' />
				<input type="text" placeholder ='' className='inp4 ma2' />
			</div>
			<div className='day5'>
				<p className='friday'>Friday</p>
				<input type="text" placeholder ='' className='inp5 ma2' />
				<input type="text" placeholder ='' className='inp5 ma2' />
				<input type="text" placeholder ='' className='inp5 ma2' />
				<input type="text" placeholder ='' className='inp5 ma2' />
				<input type="text" placeholder ='' className='inp5 ma2' />
				<input type="text" placeholder ='' className='inp5 ma2' />
				<input type="text" placeholder ='' className='inp5 ma2' />
				<input type="text" placeholder ='' className='inp5 ma2' />
				<input type="text" placeholder ='' className='inp5 ma2' />
			</div>
			<div className='day6'>
				<p className='saturday'>Saturday</p>
				<input type="text" placeholder ='' className='inp6 ma2' />
				<input type="text" placeholder ='' className='inp6 ma2' />
				<input type="text" placeholder ='' className='inp6 ma2' />
				<input type="text" placeholder ='' className='inp6 ma2' />
				<input type="text" placeholder ='' className='inp6 ma2' />
				<input type="text" placeholder ='' className='inp6 ma2' />
				<input type="text" placeholder ='' className='inp6 ma2' />
				<input type="text" placeholder ='' className='inp6 ma2' />
				<input type="text" placeholder ='' className='inp6 ma2' />
			</div>
			<div className='day7'>
				<p className='sunday'>Sunday</p>
				<input type="text" placeholder ='' className='inp7 ma2' />
				<input type="text" placeholder ='' className='inp7 ma2' />
				<input type="text" placeholder ='' className='inp7 ma2' />
				<input type="text" placeholder ='' className='inp7 ma2' />
				<input type="text" placeholder ='' className='inp7 ma2' />
				<input type="text" placeholder ='' className='inp7 ma2' />
				<input type="text" placeholder ='' className='inp7 ma2' />
				<input type="text" placeholder ='' className='inp7 ma2' />
				<input type="text" placeholder ='' className='inp7 ma2' />
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