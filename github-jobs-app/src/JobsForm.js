import React from 'react';
import useInputState from './reducers/useInputState.reducer';




export default function JobsForm() {

    
const initialState = {
    jobDescription: '',
    location: ''
}

const [value, handleChange, reset] = useInputState(initialState);

    return (
        <form className="JobsForm">
            <section className="JobsForm__section">
                <label className="JobsForm__label" htmlFor="job-description">Job Description</label>
                <input className="JobsForm__input" id="job-description" name="jobDescription" type="text" required value={value.jobDescription} onChange={handleChange} />
            </section>
            <section className="JobsForm__section">
                <label className="JobsForm__label" htmlFor="location">Location</label>
                <input className="JobsForm__input" id="location" name="location" type="text" required value={value.location} onChange={handleChange} />
            </section>
            <button className="JobsForm__btn" onClick={reset}>Search</button>
        </form>
    )
}
