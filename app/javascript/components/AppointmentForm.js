import React from "react"
import PropTypes from "prop-types"
import {formatDate} from "./utils"
import Datetime from 'react-datetime';

class AppointmentForm extends React.Component {

  handleChange = (event) => {
    let name = event.target.name;
    let obj = {};
    obj[name] = event.target;
    console.log('form ', obj);
    this.props.onUserInput(obj);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit();  
  }

  setApptTime = (event) => {
  //setApptTime = (event, id) => {
    //console.log('calendar event appointmentform', event.date());
    //console.log('id', id);
    console.log('event is moment obj', event)
    let name = 'appt_time';
    let obj = {}
    if (obj[name] = event.toDate() ) {
   
      this.props.onUserInput(obj);
    }
  }

  getDay(event, id){
    //event.preventDefault();
    console.log('event', event);
    //console.log('event value', event.target.value);
    console.log('id', id);
  }
  
  valid = ( current ) => {
    let yesterday = Datetime.moment().subtract(1, 'day');
    let dates = [26, 27, 28]
    console.log('current', current.date());
    //return current.isAfter( yesterday );
    return dates.includes(current.date());
  }

  render () {
    let inputProps = {
      name: 'appt_time'
    }

  // <Datetime onChange={(event) => this.getDay(event, 23)} />
  //<input name='appt_time' value={this.props.input_appt_time} onChange={this.handleChange} placeholder="Date and Time"/>
    return (
      <div>
        <h2> Make a new appointment </h2>
        <form onSubmit={this.handleSubmit}>
          <input name='title' value={this.props.input_title} 
          placeholder="Appointment title" 
          onChange={(event) => this.handleChange(event)}
         />

          <Datetime input={false} open={true} timeFormat={false}
            inputProps={inputProps} 
            value={this.props.input_appt_time}
            onChange={this.setApptTime } 
            isValidDate={ this.valid }
           />

          <input type="submit" defaultValue='Make Appointment' className="submit-button" />

          
        </form>
      </div>
    );
  }
}

export default AppointmentForm
