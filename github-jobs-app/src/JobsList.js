import React, { useContext } from 'react';
import Job from './Job';
import { JobsContext } from "./context/jobs.context";
import './styles/components/__JobList.scss'


export default function JobsList() {

    const { jobs } = useContext(JobsContext);

    return (
        <div className="JobsList">
            <h2 className="JobsList__title">Showing 2 jobs</h2>
            <ul className="JobsList__list">
                {jobs.map((job) => (
                    <Job {...job} key={job.id}/>
                ))}
            </ul>
        </div>
    )
}
