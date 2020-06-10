import React, { Component } from 'react';
import ListOfSubjects from './ListOfSubjects';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import './Profile.css';

class Project extends Component {
	
	constructor(props){
		super(props);
		this.state = {
			name:'',
			phone:'',
			email_alert: 0,
			phone_alert: 0,
			subs: []
		}
		
		console.log(this.props);
	}
	
	changeName = (eve) => {
		
		if(this._inputElement1.value!=="")
		{
			let x = this._inputElement1.value;
			
			this.setState({name: x});
			this.props.changeName(x);
			
			this._inputElement1.value="";
		}
		
		eve.preventDefault();
	}
	
	changePhone = (eve) => {
		
		if(this._inputElement2.value!=="")
		{
			let x = this._inputElement2.value;
			
			this.setState({phone: x});
			this.props.changePhone(x);
			
			this._inputElement2.value="";
		}
		
		eve.preventDefault();
	}
	
	onEmailAlert = (eve) => {
		
		let x;
		
		if(this.state.email_alert==0)
			x = 1;
		else
			x = 0;
		
		this.setState({email_alert: x});
		
		this.props.onEmailAlert(x);
		
		//eve.preventDefault();
		
		console.log(eve);
	}
	
	onPhoneAlert = (eve) => {
		
		let x;
		
		console.log('this.state.phone_alert', this.state.phone_alert);
		
		if(this.state.phone_alert==0)
			x = 1;
		else
			x = 0;
		
		console.log('x', x);
		
		this.setState({phone_alert: x});
		
		this.props.onPhoneAlert(x);
		
		//eve.preventDefault();
		
		console.log(eve);
	}
	
	componentDidMount() {
		this.setState({name: this.props.name});
		this.setState({phone: this.props.phone});
		this.setState({subs: this.props.subject});
		this.setState({email_alert: this.props.email_alert});
		this.setState({phone_alert: this.props.phone_alert});
	}
	
	render() {
		
		console.log(this.state.phone);
		console.log(this.props.phone);
		
		return(
			<div className='profile'>
				<div className='profile_upper_half'>
					<div className='profile_pic'>
						<img src={`https://robohash.org/${this.state.name}?400x400`} alt="profile pic"/>
						<form className='profile_name_change' onSubmit={this.changeName}>
							<input type="text" placeholder={`${this.state.name}`} className="profile_name_change_ele1" ref={(a) => {this._inputElement1 = a}}/>
							<button className='profile_name_change_ele2 dib bw0 grow shadow-5' type='submit'>save</button>
						</form>
						<form className='profile_phone_change' onSubmit={this.changePhone}>
							<input type="text" placeholder={this.state.phone} className="profile_phone_change_ele1" ref={(b) => {this._inputElement2 = b}}/>
							<button className='profile_phone_change_ele2 dib bw0 grow shadow-5' type='submit'>save</button>
						</form>
						<div className='profile_alert_check'>
						<label className='profile_alert_check_email_label'>
							<input className='mr1' type="checkbox" checked={this.state.email_alert} onChange={this.onEmailAlert} name="" id=""/>
							{'Email'}
						</label>
						<label className='profile_alert_check_phone_label'>
							<input className='mr1' type="checkbox" checked={this.state.phone_alert} onChange={this.onPhoneAlert} name="" id=""/>
							{'Sms'}
						</label>
						</div>
					</div>
					<div className='profile_attendance'>
						<h2>Attendance</h2>
						<div className='profile_attendance_list'>
							<ListOfSubjects subs={this.state.subs}/>
						</div>
					</div>
				</div>
				<div className='profile_goto'>
					<div className='profile_goto_tt dib bw2 grow shadow-5' onClick={() => {this.props.onRouteChange('timeTable')}}>Time-Table</div>
					<div className='profile_goto_todo dib bw2 grow shadow-5' onClick={() => {this.props.onRouteChange('todo')}}>Todo</div>
					<div className='profile_goto_proj dib bw2 grow shadow-5' onClick={() => {this.props.onRouteChange('project')}}>Project</div>
				</div>
			</div>
		);
	}
}

export default Project;