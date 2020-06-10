import React, { Component } from 'react';
import './ListOfProjs.css';

class ListOfProjs extends Component {
	
	constructor(props) {
		super(props);
		
		this.createTask = this.createTask.bind(this);
	}
	
	doneTask(key) {
		this.props.doneElement(key);
	}
	
	createTask(proj) {
		if(proj.proj_done===0 && proj.proj_name===this.props.curr_proj)
		{
			return(
			<div className='proj_list1_ele' key={proj.proj_key} >
				<div className='proj_list1_ele1'>
					{proj.proj_task}
				</div>
				<div className='proj_list1_ele2' onClick={() => {this.doneTask(proj.proj_key)}}>
					<img className='proj_list1_ele2_img1' src={ require('./tick.png') } alt="Done"/>
				</div>
			</div>
			);
			//Icons made by <a href="https://www.flaticon.com/authors/those-icons" title="Those Icons">Those Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
		}
	}
	
	render() {
		let list = this.props.projs.map((proj) => {return(this.createTask(proj))});
		
		return(
			<ul>
				{list}
			</ul>
		);
	}
}

export default ListOfProjs;