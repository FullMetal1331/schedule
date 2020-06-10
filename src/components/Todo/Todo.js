import React, { Component } from 'react';
import ListOfJobs from './ListOfJobs';
import './Todo.css';

class Todo extends Component {
	
	constructor(props){
		super(props);
		this.state = {
			jobs: []
		}
		
		this.addElement = this.addElement.bind(this);
		this.delElement = this.delElement.bind(this);
	}
	
	delElement = (key) => {
		//console.log(key);
		let leftJobs = this.state.jobs.filter((ele) => {
			return(ele.key !== key)});
		
		//console.log(leftJobs);
		
		this.setState({jobs: leftJobs});
		this.props.loadUsertodo(leftJobs);
	}
	
	addElement = (eve) => {
		
		// console.log('inp val', this._inputElement.value);
		// console.log('jobs state prev', this.state.jobs);
		
		if(this._inputElement.value !== "") {
			let newItem = {
				email: this.props.email,
				job: this._inputElement.value,
				key: Date.now()
			};
			console.log(newItem);
			
			// this.setState((prevState) => {
				
			// 	console.log(prevState.jobs);
				
			// 	return {
			// 		jobs: prevState.jobs.push(newItem)
			// 	};
			// });
			
			let jobsTemp = this.state.jobs;
			jobsTemp.push(newItem);
			this.setState({jobs: jobsTemp});
			this.props.loadUsertodo(jobsTemp);
			
			this._inputElement.value = "";
		}
		
		// console.log('jobs state new', this.state.jobs);
		
		eve.preventDefault();
	}
	
	componentDidMount() {
		//console.log(this.props.todovals)
		this.setState({jobs: this.props.todovals});
		
		// axios.get(req,res=>
		// 	{this.set})
	}
	
	render() {
		 console.log('inside render', this.state.jobs)
		return(
			<div className='todo1'>
				<form className='jobAdd' onSubmit={this.addElement}>
					<input type="text" placeholder="" className="inp mt2" ref={(a) => {this._inputElement = a}}/>
					<button className='add dib bw0 grow shadow-5' type='submit'>add</button>
				</form>
				<div>
					<h1 className='todo1_header mr5'>Todo List</h1>
					<ListOfJobs className='jobsList' jobs={this.state.jobs} delElement={this.delElement}/>
				</div>
				<div className='float1 dib bw2 grow shadow-5' onClick={() => {this.props.onRouteChange('project')}}>
					<p className='my-float'>Project</p>
				</div>
				<div className='float2 dib bw2 grow shadow-5' onClick={() => {this.props.onRouteChange('timeTable')}}>
					<p className='my-float'>Time-Table</p>
				</div>
			</div>
		);
	}
}

export default Todo;