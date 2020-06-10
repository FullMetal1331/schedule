import React, { Component } from 'react';
import './ListOfDoneProjs.css'

class ListOfDoneProjs extends Component {
	
	constructor(props) {
		super(props);
		
		this.createTask = this.createTask.bind(this);
	}
	
	undoTask(key) {
		this.props.undoElement(key);
	}
	
	delTask(key) {
		this.props.delElement(key);
	}
	
	createTask(proj) {
		if(proj.proj_done==1 && proj.proj_name===this.props.curr_proj)
		{
			return (
				<div key={proj.proj_key} className='proj_list2_ele'>
					<div className='proj_list2_ele1' onClick={() => {this.undoTask(proj.proj_key)}}>
						<img className='proj_list2_ele1_img1' src={ require('./undo.png') } alt=""/>
					</div>
					<div className='proj_list2_ele2'>
						{proj.proj_task}
					</div>
					<div className='proj_list2_ele3' onClick={() => {this.delTask(proj.proj_key)}}>
						<img className='proj_list2_ele3_img1' src={ require('./trash.png') } alt=""/>
					</div>
				</div>
				)
		}
	}
	
	render() {
		let list = this.props.projs.map((proj) => {return(this.createTask(proj))});
		console.log("done proj",list);
		return(
			<div>
				{list}
			</div>
		);
	}
}

export default ListOfDoneProjs;