import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
	
	constructor(props){
		super(props)
		this.state = {
			len: 0,
			job: '',
			jobs: []
			//card: []
		}
	}
	
	newJob = (event) => {
		this.setState({job: event.target.value});
	}
	
	delElement = (event) => {
		const ind = event.target.className;
		let jobs1 = this.state.jobs;
		let newLen = this.state.len;
		
		newLen -= 1;
		jobs1.splice(ind, 1);
		
		this.setState({jobs: jobs1});
		this.setState({len: newLen});
	}
	
	// showCard = (event) => {
	// 	let card1 = this.state.card;
	// 	const ind = event.target.name;
	// 	console.log(ind);
	// 	card1.push(
	// 		<div className='fullBack'>
	// 			<div className='card'>
	// 				<p>{this.state.jobs[ind]}</p>
	// 			</div>
	// 		</div>
	// 	);
	// }
	
	addElement = (event) => {
		let jobs1 = this.state.jobs;
		let newLen = this.state.len;
		let str = `del dim ${this.state.len}`;
		let str2 = `${this.state.len}`;
		newLen+=1;
		
		jobs1.push(
			<div className='newjob'>
				<p /*onClick={this.showCard}*/ name={str2} className='newjobp ma3'>
					{this.state.job}
				</p>
				<div onClick={this.delElement} className={str}>
					<p className='delbut'>X</p>
				</div>
			</div>
			);
		this.setState({jobs: jobs1});
		this.setState({len: newLen});
	}
	
	render() {
		
		let jobs = this.state.jobs.map((ele, ind) => {
				return (ele);
			});
		
		return(
			<div className='todo1'>
				<div className='jobAdd'>
					<input type="text" placeholder="" className="inp mt2" onChange={this.newJob}/>
					<div className='add dib bw2 grow shadow-5' onClick={this.addElement}>
						<p className='f2 mt0'>+</p>
					</div>
				</div>
				<div className='jobList'>
					{jobs}
				</div>
				<div className='float dib bw2 grow shadow-5' onClick={() => {this.props.onRouteChange('timeTable')}}>
					<p className='my-float'>Time-Table</p>
				</div>
			</div>
		);
	}
}

export default Todo;