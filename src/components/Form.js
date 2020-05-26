import React, { Fragment, useState } from 'react';
import {v4} from 'uuid';
import PropTypes from 'prop-types';

const Form = ({createAppointment}) => {

    // Create Appointments State
    const [appointment, updateAppointment] = useState({
        pet: '',
        owner: '',
        date: '',
        hour: '',
        symptoms: ''
    });

    //  State
    const [error, updateError] = useState(false);


    // Function to update state when user types on input
    const updateState = e => {
        updateAppointment({
            ...appointment,
            [e.target.name]: e.target.value
        })
    }

    // Extract values
    const {pet, owner, date, hour, symptoms} = appointment;

    // Submmit when user clicks add appointment
    const submitAppointment = e => {
        e.preventDefault();
        
        // Validation
        if (pet.trim() === '' || owner.trim() === '' || date.trim() === '' || 
            hour.trim() === '' || symptoms.trim() === '' ){
                updateError(true);
                return;
        }

        // Delete Previous message
        updateError(false);

        // Assign ID
        appointment.id = v4();
        console.log(appointment.id);

        // Create Appointment
        createAppointment(appointment);

        // Reset Form
        updateAppointment({
            pet: '',
            owner: '',
            date: '',
            hour: '',
            symptoms: ''
        });

    }

    return ( 
        <Fragment>
            <h2>Create Appointment</h2>
            { error ? 
                <p className="alert-error">All fields are required</p> 
            : 
                null
            }
            <form
                onSubmit={submitAppointment}
            >
                <label>Pet Name</label>
                <input 
                    type="text"
                    name="pet"
                    className="u-full-width"
                    placeholder="Pet Name"
                    onChange={updateState}
                    value={pet}
                />
                <label>Owner Name</label>
                <input 
                    type="text"
                    name="owner"
                    className="u-full-width"
                    placeholder="Pet´s Owner Name"
                    onChange={updateState}
                    value={owner}
                />
                <label>Date</label>
                <input 
                    type="date"
                    name="date"
                    className="u-full-width"
                    onChange={updateState}
                    value={date}
                />
                <label>Hour</label>
                <input 
                    type="time"
                    name="hour"
                    className="u-full-width"
                    onChange={updateState}
                    value={hour}
                />
                <label>Symptoms</label>
                <textarea
                    className="u-full-width"
                    name="symptoms" 
                    onChange={updateState}
                    value={symptoms}
                />
                <button 
                    type="submit"
                    className="u-full-width button-primary"
                >
                    Add Appointment
                </button>
            </form>
        </Fragment>
     );
}
 
Form.propTypes = {
    createAppointment: PropTypes.func.isRequired
}
export default Form;