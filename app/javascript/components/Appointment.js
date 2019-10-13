import React from "react"
import PropTypes from "prop-types"
import {formatDate} from "./utils"

//<p>{moment(this.props.appointment.appt_time).format('MMMM DD YYYY, h:mm:ss a')}</p>

class Appointment extends React.Component {
  render () {
    return (
      <div className="appointment">
        <h3>{this.props.appointment.title}</h3>
        <p>{ formatDate(this.props.appointment.appt_time) }</p>
      </div>
    );
  }
}

export default Appointment
