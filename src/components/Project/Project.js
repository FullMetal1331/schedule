import React, { Component } from 'react';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import ListOfProjProj from './ListOfProjProj';
import ListOfProjs from './ListOfProjs';
import ListOfDoneProjs from './ListOfDoneProjs';
import './Project.css';

class Project extends Component {
	
	constructor(props){
		super(props);
		this.state = {
			projs: [],
			curr_proj:''
		}
		
		console.log(this.props);
	}
	
	delProj = (name) => {
		
		let tempProjs = [];
		
		for(let i=0;i<this.state.projs.length;i++)
		{
			let x = this.state.projs[i];
			
			if(x.proj_name!==name)
			{
				tempProjs.push(x);
			}
		}
		
		//console.log(this.state.projs);
		
		this.setState({projs: tempProjs});
		this.props.loadUserproj(tempProjs);
		
		//console.log(tempProjs);
	}
	
	selProj = (name) => {
		this.setState({curr_proj: name});
	}
	
	doneElement = (key) => {
		
		let tempProjs = [];
		
		for(let i=0;i<this.state.projs.length;i++)
		{
			let x = this.state.projs[i];
			
			if(x.proj_key===key)
			{
				x.proj_done = 1;
			}
			
			tempProjs.push(x);
		}
		
		//console.log(this.state.projs);
		
		this.setState({projs: tempProjs});
		this.props.loadUserproj(tempProjs);
		
		//console.log(tempProjs);
	}
	
	undoElement = (key) => {
		
		let tempProjs = [];
		
		for(let i=0;i<this.state.projs.length;i++)
		{
			let x = this.state.projs[i];
			
			if(x.proj_key===key)
			{
				x.proj_done = 0;
			}
			
			tempProjs.push(x);
		}
		
		//console.log(this.state.projs);
		
		this.setState({projs: tempProjs});
		this.props.loadUserproj(tempProjs);
		
		//console.log(tempProjs);
	}
	
	delElement = (key) => {
		
		let tempProjs = [];
		
		for(let i=0;i<this.state.projs.length;i++)
		{
			let x = this.state.projs[i];
			
			if(x.proj_key!==key)
			{
				tempProjs.push(x);
			}
		}
		
		//console.log(this.state.projs);
		
		this.setState({projs: tempProjs});
		this.props.loadUserproj(tempProjs);
		
		//console.log(tempProjs);
	}
	
	addElement = (eve) => {
		
		console.log('inside addElement', this._inputElement1.value);
		
		if(this._inputElement1.value !== "" && this.state.curr_proj!=='')
		{
			let newItem = {
				email: this.props.email,
				proj_name: this.state.curr_proj,
				proj_task: this._inputElement1.value,
				proj_done: 0,
				proj_key: Date.now()
			};
			
			let projTemp = this.state.projs;
			projTemp.push(newItem);
			this.setState({projs: projTemp});
			this.props.loadUserproj(projTemp);
			
			this._inputElement1.value = "";
			
			console.log(newItem);
		}
		
		eve.preventDefault();
	}
	
	addProj = (eve) => {
		if(this._inputElement.value !== "")
		{
			let newItem = {
				email: this.props.email,
				proj_name: this._inputElement.value,
				proj_task: "Add your 1st task",
				proj_done: 0,
				proj_key: Date.now()
			};
			
			let projTemp = this.state.projs;
			projTemp.push(newItem);
			this.setState({projs: projTemp});
			this.setState({curr_proj: newItem.proj_name})
			this.props.loadUserproj(projTemp);
			
			this._inputElement.value = "";
		}
		
		eve.preventDefault();
	}
	
	componentDidMount() {
		this.setState({projs: this.props.projvals});
	}
	
	render() {
		let n=0, d=0, percentage=0, status="error";
		
		for(let i=0;i<this.props.projvals.length;i++)
		{
			let x = this.props.projvals[i];
			
			if(x.proj_done==1 && x.proj_name===this.state.curr_proj)
				n++;
			if(x.proj_name===this.state.curr_proj)
				d++;
		}
		
		if(n===0)
			percentage=1;
		else
			percentage=(n*100)/d;
		
		if(percentage>25 && percentage<=70)
			status="active";
		else if(percentage>70)
			status="success";
		
		return(
			<div className='proj'>
				<div className='proj_task'>
					<div className='proj_inp'>
						<form className='proj_task_add' onSubmit={this.addElement}>
							<input type="text" placeholder="Add a Task!" className="proj_inp_ele1" ref={(a) => {this._inputElement1 = a}}/>
							<button className='proj_inp_ele2 dib bw0 grow shadow-5' type='submit'>add</button>
						</form>
					</div>
					<div className='proj_prog'>
						<Progress percent={percentage} 
						status={status} 
						theme={{active:{symbol:'⚠️', color:'#fbc630'}}} />
					</div>
					<div className='proj_lists'>
						<div className='proj_proj_list'>
							<h2 className='mr5 mb3'>Projects</h2>
							<form className='proj_proj_add' onSubmit={this.addProj}>
								<input type="text" placeholder="Add a Project!" className="proj_proj_inp_ele1" ref={(b) => {this._inputElement = b}}/>
								<button className='proj_proj_inp_ele2 dib bw0 grow shadow-5' type='submit'>add</button>
							</form>
							<ListOfProjProj projs={this.state.projs} curr_proj={this.state.curr_proj} delProj={this.delProj} selProj={this.selProj} />
						</div>
						<div className='proj_list1'>
							<h2 className='mr5 mb3'>Tasks Left</h2>
							<ListOfProjs projs={this.state.projs} doneElement={this.doneElement} curr_proj={this.state.curr_proj} />
						</div>
						<div className='proj_list2'>
							<h2 className='ml5 mb4'>Completed Tasks</h2>
							<ListOfDoneProjs projs={this.state.projs} undoElement={this.undoElement} delElement={this.delElement} curr_proj={this.state.curr_proj} />
						</div>
					</div>
					<div className='proj_to_tt dib bw2 grow shadow-5' onClick={() => {this.props.onRouteChange('timeTable')}}>
						<p>Time-Table</p>
					</div>
					<div className='proj_to_todo dib bw2 grow shadow-5' onClick={() => {this.props.onRouteChange('todo')}}>
						<p>Todo</p>
					</div>
				</div>
			</div>
			);
	}
}

export default Project;