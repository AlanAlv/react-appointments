import React, { Fragment } from 'react';

const Form = () => {
    return ( 
        <Fragment>
            <h2>Create Appointment</h2>
            <form>
                <label>Pet Name</label>
                <input 
                    type="text"
                    name="pet"
                    className="u-full-width"
                    placeholder="Pet Name"
                />

                <label>Owner Name</label>
                <input 
                    type="text"
                    name="owner"
                    className="u-full-width"
                    placeholder="Pet´s Owner Name"
                />
                <label>Date</label>
                <input 
                    type="date"
                    name="date"
                    className="u-full-width"
                />
                <label>Hour</label>
                <input 
                    type="time"
                    name="hour"
                    className="u-full-width"
                />
                <label>Symptoms</label>
                <textarea
                    className="u-full-width"
                    name="symptoms" 
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