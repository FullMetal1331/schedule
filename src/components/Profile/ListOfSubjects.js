import React, { Component } from 'react';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import './ListOfSubjects.css';

class ListOfSubjects extends Component {
	
	constructor(props) {
		super(props);
		
		this.createSub = this.createSub.bind(this);
	}
	
	createSub(sub) {
		
		let {name, attended, total} = sub;
		
		let percentage, status;
		
		if(total==0)
			percentage = 0;
		else
			percentage = Math.floor((attended*100)/total);
		
		if(percentage>=75)
			status='almost_success';
		else if(percentage>=50)
			status='active';
		else
			status='error';
		
		return(
			<div className='profile_attendance_ele' key={sub.name} >
				<div className='profile_attendance_ele1'>
					<h1>{sub.name}</h1>
				</div>
				<div className='profile_attendance_ele2'>
					<Progress className='profile_attendance_ele2_prog' type="circle" width={95} percent={percentage} 
						status={status} 
						theme={{almost_success:{color:'#009f4e'}, active:{color:'#fbc630'}, error:{color:'#e43d2b'}}} />
				</div>
			</div>
		);
			//Icons made by <a href="https://www.flaticon.com/authors/those-icons" title="Those Icons">Those Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
	}
	
	render() {
		let list = this.props.subs.map((sub) => {return(this.createSub(sub))});
		
		return(
			<ul>
				{list}
			</ul>
		);
	}
}

export default ListOfSubjects;