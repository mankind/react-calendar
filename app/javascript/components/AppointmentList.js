import React from "react"
import PropTypes from "prop-types"
import Appointment from "./Appointment"

//<div key={appointment.id}>
//</div>
class AppointmentList extends React.Component {

  render () {
    return (
      <div>
        {this.props.appointments.map(function(appointment){
          return (
            
              <Appointment appointment={appointment} key={appointment.id} />
            
          )
         })
        }
      </div>
    );
  }
}

export default AppointmentList
