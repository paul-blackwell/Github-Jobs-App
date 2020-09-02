import React, { useReducer } from 'react';
import useInputState from './hooks/useInputState';
import { initialState, reducer } from './reducers/input.reducer';

export default function JobsForm() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleChange = (e) => {
        dispatch({field: e.target.name, value: e.target.value});
    }

    const {jobDescription, location} = state;

    return (
        <form className="JobsForm">
            <section className="JobsForm__section">
                <label className="JobsForm__label" htmlFor="job-description">Job Description</label>
                <input className="JobsForm__input" id="job-description" name="Job Description" type="text" value={jobDescription} onChange={handleChange} required />
            </section>
            <section className="JobsForm__section">
                <label className="JobsForm__label" htmlFor="location">Location</label>
                <input className="JobsForm__input" id="location" name="Location" type="text" value={location} onChange={handleChange} required />
            </section>
            <button className="JobsForm__btn">Search</button>
        </form>
    )
}
