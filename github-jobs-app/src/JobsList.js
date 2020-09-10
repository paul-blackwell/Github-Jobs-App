import React, { useContext } from 'react';
import Job from './Job';
import { JobsContext } from "./context/jobs.context";
import './styles/components/__JobList.scss'


export default function JobsList() {

    const { jobs } = useContext(JobsContext);

    if (jobs) {
        return (
            <div className="JobsList">
                <h2 className="JobsList__title">Showing {jobs.length} jobs</h2>
                {jobs.length > 0 &&
                    <ul className="JobsList__list">
                        {jobs.map((job) => (
                            <Job {...job} key={job.id} />
                        ))}
                    </ul>
                }
            </div>
        )
    } else {
        return (
            <div className="JobsList"><h1>Loading</h1></div>
        )
    }
}
