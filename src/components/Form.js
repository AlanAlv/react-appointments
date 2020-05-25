import React, { Fragment, useState } from 'react';

const Form = () => {

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

        // Assign ID

        // Create Appointment

        // Reset Form


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
 
export default Form;