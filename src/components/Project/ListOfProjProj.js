import React, { Component } from 'react';
import './ListOfProjProj.css';

class ListOfProjProj extends Component {
	
	constructor(props) {
		super(props);
		
		this.createProj = this.createProj.bind(this);
	}
	
	delProj(name) {
		this.props.delProj(name);
	}
	
	selProj(name) {
		this.props.selProj(name);
	}
	
	createProj(proj) {
		return(
		<div className='proj_proj_list_ele' key={proj} >
			<div className='proj_proj_list_ele1' onClick={() => {this.selProj(proj)}}>
				{proj}
			</div>
			<div className='proj_proj_list_ele2' onClick={() => {this.delProj(proj)}}>
				<img className='proj_proj_list_ele2_img1' src={ require('./trash.png') } alt="Delete"/>
			</div>
		</div>
		);
		//Icons made by <a href="https://www.flaticon.com/authors/those-icons" title="Those Icons">Those Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
	}
	
	render() {
		let list = this.props.projs.map((proj) => {return(proj.proj_name)});
		let unique_list = Array.from(new Set(list));
		let final_list = unique_list.map((proj) => {return(this.createProj(proj));});
		
		return(
			<ul>
				{final_list}
			</ul>
		);
	}
}

export default ListOfProjProj;