import React from 'react';
import Job from './Job';

export default function JobsList() {
    return (
        <div className="JobsList">
            <h2 className="JobsList__title">Showing 2 jobs</h2>
            <ul className="JobsList__list">
                <Job />
                <Job />
            </ul>
        </div>
    )
}
