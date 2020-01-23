import React, { Component } from 'react';
import './ListOfJobs.css'

class ListOfJobs extends Component {
	
	constructor(props) {
		super(props);
		
		this.createJobs = this.createJobs.bind(this);
	}
	
	delJob = (key) => {
		//console.log(key);
		this.props.delElement(key);
	}
	
	createJobs(job) {
		//console.log(job);
		return <li onClick={() => {this.delJob(job.key)}} key={job.key}>{job.text}</li>
	}
	
	render() {
		// console.log(this.props)
		let list = this.props.jobs.map(this.createJobs);
		
		return(
			<ul className='jobList'>
				{list}
			</ul>
		);
	}
}

export default ListOfJobs;