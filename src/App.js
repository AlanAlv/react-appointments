import React, { Fragment, useState } from 'react';
import Form from './components/Form';
import Appointment from './components/Appointment';

function App() {

  // Appointments array
  const [appointments, saveAppointments] = useState([]);

  // Add new appointment to prevoius ones.
  const createAppointment = appointment => {
    saveAppointments([
      ...appointments, 
      appointment
    ])
  }

  // Delete appointment by id
  const deleteAppointment = id => {
    const newAppointments = appointments.filter(appointment => appointment.id !== id);
    saveAppointments(newAppointments);
  }


  return (
    <Fragment>
      <h1>Patient Manager</h1>

      <div className="container"> 
        <div className="row">
          <div className="one-half column">
            <Form 
              createAppointment={createAppointment}
            />
          </div>
          <div className="one-half column">
            <h2>Manage your appointments</h2>
            {appointments.map(appointment => (
              <Appointment 
                key={appointment.key}  
                appointment={appointment}
                deleteAppointment={deleteAppointment}
              />
            ))}
          </div>
        </div>
      </div> 
    </Fragment>
  );
}

export default App;
