import React, { useContext } from 'react';
import useInputState from './reducers/useInputState.reducer';
import { JobsContext } from "./context/jobs.context";


export default function JobsForm() {

    const initialState = {
        jobDescription: 'python',
        location: 'new york'
    }

    const { searchJobs } = useContext(JobsContext);
    const [value, handleChange, reset] = useInputState(initialState);
    
    return (
        <form
            className="JobsForm"
            onSubmit={e => {
                e.preventDefault();
                searchJobs(value)
                reset();
            }}
        >
            <section className="JobsForm__section">
                <label className="JobsForm__label" htmlFor="job-description">Job Description</label>
                <input className="JobsForm__input" id="job-description" name="jobDescription" type="text" required value={value.jobDescription} onChange={handleChange} />
            </section>
            <section className="JobsForm__section">
                <label className="JobsForm__label" htmlFor="location">Location</label>
                <input className="JobsForm__input" id="location" name="location" type="text" required value={value.location} onChange={handleChange} />
            </section>
            <button className="JobsForm__btn">Search</button>
        </form>
    )
}
