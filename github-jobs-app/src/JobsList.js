import React, { useContext } from 'react';
import Job from './Job';
import { JobsContext } from "./context/jobs.context";
import './styles/components/__JobList.scss'
import Loader from './Loader';


export default function JobsList() {

    const { jobs } = useContext(JobsContext);

    if (jobs && jobs !== 'loading') {
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
    } else if (jobs === 'loading'){
        return (
            <div className="JobsList">
                <Loader />
            </div>
        )
    } else {
        return (
            <div className="JobsList"></div>
        )
    }
}
