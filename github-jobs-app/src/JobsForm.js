import React from 'react'

export default function JobsForm() {
    return (
        <form className="JobsForm">
            <section className="JobsForm__section">
                <label className="JobsForm__label" for="job-description">Job Description</label>
                <input className="JobsForm__input" id="job-description" name="Job Description" type="text" placeholder=" "  required />
            </section>
            <section className="JobsForm__section">
                <label className="JobsForm__label" for="location">Location</label>
                <input className="JobsForm__input" id="location" name="Location" type="text" placeholder=" "  required />
            </section>
            <button className="JobsForm__btn">Search</button>
        </form>
    )
}
