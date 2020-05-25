import React, { Fragment, useState } from 'react';
import Form from './components/Form';

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
            
          </div>
        </div>
      </div> 
    </Fragment>
  );
}

export default App;
