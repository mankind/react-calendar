import React from "react"
import PropTypes from "prop-types"
import AppointmentForm from "./AppointmentForm"
import AppointmentList from "./AppointmentList"

class Appointments extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      appointments: this.props.appointments,
      title: 'Team Standup meeting',
      appt_time: 'Tommorow at 9am'
    };
  }

  handleUserInput(obj) {
    this.setState(obj)
  }

  handleDateInput = (obj) => {
    console.log('handleDateInput in appointment.js', obj)
    this.setState(obj)
  }

  handleFormSubmit = () => {
    let appointment = {title: this.state.title, appt_time: this.state.appt_time}
    console.log('handleSubmit', appointment);
/*    
    $.post('/appointments', 
        {appointment: appointment})
        .done(function(data){
          this.addNewAppointment(data);
    });
   
*/  
    $.ajax({
      type: 'POST',
      url: '/appointments',
      data: {appointment: appointment},
      headers: {'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content') },
      success: function( data ){
        this.addNewAppointment(data); 
      },
      error: function( xhr ){ 
        alert("ERROR ON SUBMIT");
      }
    });


  }

  addNewAppointment = (appointment) => {
    //the update method is a way to efficiently create an array of appointments
    // using the push command. this is reacts way of mutating a copy of the data 
    //without changing the original
    let appointments = React.addons.update(this.state.appoinments, {$push: [appointment]})
    this.setState({
      appointments: appointments.sort(function(a, b){
        return new Date(a.appt_time) - new Date(b.appt_time);
      })
    });
  }

  render () {
    console.log('props', this.props.appointments)
    return (
      <div> 
        <AppointmentForm input_title={this.state.title} 
           input_appt_time={this.state.appt_time} 
           onUserInput={this.handleDateInput}
           onFormSubmit={this.handleFormSubmit}
            /> 
        <AppointmentList appointments={this.state.appointments} />
      </div>
    )

  }
}

export default Appointments
