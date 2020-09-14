import React, { useContext } from 'react';
import Job from './Job';
import { JobsContext } from "./context/jobs.context";
import './styles/components/__JobList.scss'
import Loader from './Loader';



export default function JobsList() {

    const { jobs, savedJobs, showSavedJobs } = useContext(JobsContext);

    if (showSavedJobs.showingSavedJobs) { // if user has clicked on the saved Jobs btn
        return (
            <div className="JobsList">
                <h2 className="JobsList__title">Showing {savedJobs.length} jobs</h2>
                {savedJobs.length > 0 &&
                    <ul className="JobsList__list">
                        {savedJobs.map((job) => (
                            <Job {...job} key={job.id} showSaveBtn={false}/>
                        ))}
                    </ul>
                }
            </div>
        )
    } else if (jobs && jobs !== 'loading') { // if user has clicked on the Search btn
        return (
            <div className="JobsList">
                <h2 className="JobsList__title">Showing {jobs.length} jobs</h2>
                {jobs.length > 0 &&
                    <ul className="JobsList__list">
                        {jobs.map((job) => (
                            <Job {...job} key={job.id} showSaveBtn={true}/>
                        ))}
                    </ul>
                }
            </div>
        )
    } else if (jobs === 'loading') { // if content is loading
        return (
            <div className="JobsList">
                <Loader />
            </div>
        )
    } else { // Nothing has been clicked 'Page load'
        return (
            <div className="JobsList"></div>
        )
    }
}
