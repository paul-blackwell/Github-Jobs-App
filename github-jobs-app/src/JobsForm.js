import React, { useReducer } from 'react';
import { initialState, reducer } from './reducers/input.reducer';




export default function JobsForm() {

     // This will handle the form state for us
    const [state, dispatch] = useReducer(reducer, initialState);
    const onChange = (e) => {
        dispatch({ field: e.target.name, value: e.target.value });
    }
    const { jobDescription, location } = state;

    return (
        <form className="JobsForm">
            <section className="JobsForm__section">
                <label className="JobsForm__label" htmlFor="job-description">Job Description</label>
                <input className="JobsForm__input" id="job-description" name="jobDescription" type="text" required value={jobDescription} onChange={onChange} />
            </section>
            <section className="JobsForm__section">
                <label className="JobsForm__label" htmlFor="location">Location</label>
                <input className="JobsForm__input" id="location" name="location" type="text" required value={location} onChange={onChange} />
            </section>
            <button className="JobsForm__btn">Search</button>
        </form>
    )
}
