import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder, removeReminder, clearReminders } from './Redux/actionCreators'
import logo from './Reminders-icon.png';
import moment from 'moment';
import DatePicker from "react-datepicker";

class App extends Component {
  state = {  
      text: '',
      date: new Date()
  }
  renderReminders = () => {
    const {reminders, removeReminder} = this.props;
    return (
        <ul className = 'list-group'>
            {reminders.map(reminder =>  
                <li className = 'list-group-item'>
                    <div className = 'reminderInfo'>
                        <div>{reminder.text}</div>
                        <div>{moment(new Date(reminder.date)).fromNow()}</div>
                    </div>
                    <button 
                        className = 'removeReminder btn btn-danger'
                        onClick = {() => removeReminder(reminder.id)}
                    >
                    X</button>
                </li>
            )}
        </ul>
    )
  }
  render() {
    const {addReminder, clearReminders} = this.props;
    const {text, date} = this.state;
    return (  
      <div className = 'App'>
          <img className = 'logo' src={logo} />
          <h3>Reminder</h3>
          <input 
            className = 'form-control'
            placeholder = 'Enter What To Do ?' 
            type="text"
            value = {text}
            onChange = {e => this.setState({text: e.target.value})}
          />
          <DatePicker
            className = 'form-control'
            value = {date}
            selected={date}
            onChange={date => this.setState({date})}
            showTimeSelect
            timeFormat="HH:mm"
            timeCaption="Time"
            dateFormat="MMMM d, yyyy h:mm aa"
          />
          <button 
            className = 'btn btn-primary btn-block'
            onClick = {() => { 
                    addReminder(text, date);
                    this.setState({text: ''}); 
                }
            }
          >
            Add Reminder
          </button>
          {this.renderReminders()}
          <button 
            className = 'btn btn-danger btn-block'
            onClick = {() => clearReminders()}
          >
            Clear Reminders
          </button>
      </div>
    );
  }
}

export default connect(state => {return{reminders: state}}, { addReminder, removeReminder, clearReminders })(App);