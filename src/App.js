import React, { Fragment, useState, useEffect } from 'react';
import Form from './components/Form';
import Appointment from './components/Appointment';

function App() {

  // Appointments on Local Storage
  let initialAppointments = JSON.parse(localStorage.getItem('appointments'));
  if (!initialAppointments) {
    initialAppointments = [];
  }

  // Appointments array
  const [appointments, saveAppointments] = useState(initialAppointments);

  // UseEffect to do operations when state changes
  useEffect(() => {
      localStorage.setItem('appointments', JSON.stringify(appointments));
  }, [appointments]);

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

  // Conditional message
  const title =  appointments.length === 0 ? 'There are no appointments' : 'Manage your appointments';

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
            <h2>{title}</h2>
            {appointments.map(appointment => (
              <Appointment 
                key={appointment.id}  
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
