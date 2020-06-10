import React from 'react';
import './Timetable.css';

class Timetable extends React.Component {
	
	constructor(props){
		super(props);
		
		this.state = {
			allDays: this.props.ttvals
		}
		
		// console.log(this.state.allDays);
	}
	
	inputChange = (ind1,ind2,event) => {
		let allDaysTemp = this.state.allDays;
		allDaysTemp[ind1][ind2] = event.target.value;
		this.setState({allDays: allDaysTemp});
		this.props.loadUsertt(this.state.allDays);
		 // console.log(this.props.ttvals);
		 // console.log(this.state.allDays);
	}
	
	routeChange = (route) => {
		this.props.onRouteChange(route);
	}
	
	/*onSave = (event) => {
			this.props.loadUsertt(this.state.allDays);
		}*/
	
	render() {
		
	let {allDays} = this.state;
		
		return(
			<div className='tt'>
				<div className='time'>
					<p className='f5 mt2 mb2 pa1 tc p1'>Days\Time</p>
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
					<input type="text" onChange={(event)=>{this.inputChange(0,0,event)}} value={allDays[0][0]} className='inp11 ma2' />
					<input type="text" onChange={(event)=>{this.inputChange(0,1,event)}} value={allDays[0][1]} className='inp12 ma2' />
					<input type="text" onChange={(event)=>{this.inputChange(0,2,event)}} value={allDays[0][2]} className='inp13 ma2' />
					<input type="text" onChange={(event)=>{this.inputChange(0,3,event)}} value={allDays[0][3]} className='inp14 ma2' />
					<input type="text" onChange={(event)=>{this.inputChange(0,4,event)}} value={allDays[0][4]} className='inp15 ma2' />
					<input type="text" onChange={(event)=>{this.inputChange(0,5,event)}} value={allDays[0][5]} className='inp16 ma2' />
					<input type="text" onChange={(event)=>{this.inputChange(0,6,event)}} value={allDays[0][6]} className='inp17 ma2' />
					<input type="text" onChange={(event)=>{this.inputChange(0,7,event)}} value={allDays[0][7]} className='inp18 ma2' />
					<input type="text" onChange={(event)=>{this.inputChange(0,8,event)}} value={allDays[0][8]} className='inp19 ma2' />
				</div>
				<div className='day2 '>
					<p className='tuesday'>Tuesday</p>
					<input type="text" onChange={(event)=>{this.inputChange(1,0,event)}} value={allDays[1][0]} className='inp21 ma2' />
					<input type="text" onChange={(event)=>{this.inputChange(1,1,event)}} value={allDays[1][1]} className='inp22 ma2' />
					<input type="text" onChange={(event)=>{this.inputChange(1,2,event)}} value={allDays[1][2]} className='inp23 ma2' />
					<input type="text" onChange={(event)=>{this.inputChange(1,3,event)}} value={allDays[1][3]} className='inp24 ma2' />
					<input type="text" onChange={(event)=>{this.inputChange(1,4,event)}} value={allDays[1][4]} className='inp25 ma2' />
					<input type="text" onChange={(event)=>{this.inputChange(1,5,event)}} value={allDays[1][5]} className='inp26 ma2' />
					<input type="text" onChange={(event)=>{this.inputChange(1,6,event)}} value={allDays[1][6]} className='inp27 ma2' />
					<input type="text" onChange={(event)=>{this.inputChange(1,7,event)}} value={allDays[1][7]} className='inp28 ma2' />
					<input type="text" onChange={(event)=>{this.inputChange(1,8,event)}} value={allDays[1][8]} className='inp29 ma2' />
				</div>
				<div className='day3 '>
					<p className='wednesday'>Wednesday</p>
					<input type="text" onChange={(event)=>{this.inputChange(2,0,event)}} value={allDays[2][0]} className='inp31 ma2' />
					<input type="text" onChange={(event)=>{this.inputChange(2,1,event)}} value={allDays[2][1]} className='inp32 ma2' />
					<input type="text" onChange={(event)=>{this.inputChange(2,2,event)}} value={allDays[2][2]} className='inp33 ma2' />
					<input type="text" onChange={(event)=>{this.inputChange(2,3,event)}} value={allDays[2][3]} className='inp34 ma2' />
					<input type="text" onChange={(event)=>{this.inputChange(2,4,event)}} value={allDays[2][4]} className='inp35 ma2' />
					<input type="text" onChange={(event)=>{this.inputChange(2,5,event)}} value={allDays[2][5]} className='inp36 ma2' />
					<input type="text" onChange={(event)=>{this.inputChange(2,6,event)}} value={allDays[2][6]} className='inp37 ma2' />
					<input type="text" onChange={(event)=>{this.inputChange(2,7,event)}} value={allDays[2][7]} className='inp38 ma2' />
					<input type="text" onChange={(event)=>{this.inputChange(2,8,event)}} value={allDays[2][8]} className='inp39 ma2' />
				</div>
				<div className='day4'>
					<p className='thursday'>Thursday</p>
					<input type="text" onChange={(event)=>{this.inputChange(3,0,event)}} value={allDays[3][0]} className='inp41 ma2' />
					<input type="text" onChange={(event)=>{this.inputChange(3,1,event)}} value={allDays[3][1]} className='inp42 ma2' />
					<input type="text" onChange={(event)=>{this.inputChange(3,2,event)}} value={allDays[3][2]} className='inp43 ma2' />
					<input type="text" onChange={(event)=>{this.inputChange(3,3,event)}} value={allDays[3][3]} className='inp44 ma2' />
					<input type="text" onChange={(event)=>{this.inputChange(3,4,event)}} value={allDays[3][4]} className='inp45 ma2' />
					<input type="text" onChange={(event)=>{this.inputChange(3,5,event)}} value={allDays[3][5]} className='inp46 ma2' />
					<input type="text" onChange={(event)=>{this.inputChange(3,6,event)}} value={allDays[3][6]} className='inp47 ma2' />
					<input type="text" onChange={(event)=>{this.inputChange(3,7,event)}} value={allDays[3][7]} className='inp48 ma2' />
					<input type="text" onChange={(event)=>{this.inputChange(3,8,event)}} value={allDays[3][8]} className='inp49 ma2' />
				</div>
				<div className='day5'>
					<p className='friday'>Friday</p>
					<input type="text" onChange={(event)=>{this.inputChange(4,0,event)}} value={allDays[4][0]} className='inp51 ma2' />
					<input type="text" onChange={(event)=>{this.inputChange(4,1,event)}} value={allDays[4][1]} className='inp52 ma2' />
					<input type="text" onChange={(event)=>{this.inputChange(4,2,event)}} value={allDays[4][2]} className='inp53 ma2' />
					<input type="text" onChange={(event)=>{this.inputChange(4,3,event)}} value={allDays[4][3]} className='inp54 ma2' />
					<input type="text" onChange={(event)=>{this.inputChange(4,4,event)}} value={allDays[4][4]} className='inp55 ma2' />
					<input type="text" onChange={(event)=>{this.inputChange(4,5,event)}} value={allDays[4][5]} className='inp56 ma2' />
					<input type="text" onChange={(event)=>{this.inputChange(4,6,event)}} value={allDays[4][6]} className='inp57 ma2' />
					<input type="text" onChange={(event)=>{this.inputChange(4,7,event)}} value={allDays[4][7]} className='inp58 ma2' />
					<input type="text" onChange={(event)=>{this.inputChange(4,8,event)}} value={allDays[4][8]} className='inp59 ma2' />
				</div>
				<div className='day6'>
					<p className='saturday'>Saturday</p>
					<input type="text" onChange={(event)=>{this.inputChange(5,0,event)}} value={allDays[5][0]} className='inp61 ma2' />
					<input type="text" onChange={(event)=>{this.inputChange(5,1,event)}} value={allDays[5][1]} className='inp62 ma2' />
					<input type="text" onChange={(event)=>{this.inputChange(5,2,event)}} value={allDays[5][2]} className='inp63 ma2' />
					<input type="text" onChange={(event)=>{this.inputChange(5,3,event)}} value={allDays[5][3]} className='inp64 ma2' />
					<input type="text" onChange={(event)=>{this.inputChange(5,4,event)}} value={allDays[5][4]} className='inp65 ma2' />
					<input type="text" onChange={(event)=>{this.inputChange(5,5,event)}} value={allDays[5][5]} className='inp66 ma2' />
					<input type="text" onChange={(event)=>{this.inputChange(5,6,event)}} value={allDays[5][6]} className='inp67 ma2' />
					<input type="text" onChange={(event)=>{this.inputChange(5,7,event)}} value={allDays[5][7]} className='inp68 ma2' />
					<input type="text" onChange={(event)=>{this.inputChange(5,8,event)}} value={allDays[5][8]} className='inp69 ma2' />
				</div>
				<div className='day7'>
					<p className='sunday'>Sunday</p>
					<input type="text" onChange={(event)=>{this.inputChange(6,0,event)}} value={allDays[6][0]} className='inp71 ma2' />
					<input type="text" onChange={(event)=>{this.inputChange(6,1,event)}} value={allDays[6][1]} className='inp72 ma2' />
					<input type="text" onChange={(event)=>{this.inputChange(6,2,event)}} value={allDays[6][2]} className='inp73 ma2' />
					<input type="text" onChange={(event)=>{this.inputChange(6,3,event)}} value={allDays[6][3]} className='inp74 ma2' />
					<input type="text" onChange={(event)=>{this.inputChange(6,4,event)}} value={allDays[6][4]} className='inp75 ma2' />
					<input type="text" onChange={(event)=>{this.inputChange(6,5,event)}} value={allDays[6][5]} className='inp76 ma2' />
					<input type="text" onChange={(event)=>{this.inputChange(6,6,event)}} value={allDays[6][6]} className='inp77 ma2' />
					<input type="text" onChange={(event)=>{this.inputChange(6,7,event)}} value={allDays[6][7]} className='inp78 ma2' />
					<input type="text" onChange={(event)=>{this.inputChange(6,8,event)}} value={allDays[6][8]} className='inp79 ma2' />
				</div>
				
				{/*<span>
					<div className='save dib bw3 grow shadow-5' onClick={this.onSave}>
						<p>Save</p>
					</div>
				</span>*/}
				
				<span>
					<div className='float1 dib bw2 grow shadow-5' onClick={() => {this.props.onRouteChange('project')}}>
						<p className='my-float'>Project</p>
					</div>
					<div className='float2 dib bw2 grow shadow-5'onClick={() => {this.routeChange('todo')}}>
						<p className='my-float'>To-Do</p>
					</div>
				</span>
			</div>
		);
	}
}

export default Timetable;