import React, { useContext } from 'react';
import useInputState from './reducers/useInputState.reducer';
import { JobsContext } from "./context/jobs.context";
import './styles/components/__JobsForm.scss';


export default function JobsForm() {

    const initialState = {
        jobDescription: 'python',
        location: 'new york',
        fulltime: false
    }

    const { searchJobs, showLoader, showingSavedJobs} = useContext(JobsContext)
    const [value, handleChange, reset] = useInputState(initialState);
    
    return (
        <form
            className="JobsForm"
            onSubmit={e => {
                e.preventDefault();
                showingSavedJobs(); // Hide saved jobs list if its on the page
                showLoader();
                searchJobs(value);
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
            <section className="JobsForm__section--checkbox">
                <input className="JobsForm__input" id="fulltime" name="fulltime" type="checkbox" onChange={handleChange} />
                <label className="JobsForm__label--checkbox" htmlFor="fulltime">Full Time only</label>
            </section>
            <div className="JobsForm__buttons">
                <button className="JobsForm__btn">Search</button>
            </div>
        </form>
    )
}
