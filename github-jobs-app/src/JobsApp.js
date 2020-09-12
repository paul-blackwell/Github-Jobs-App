import React from 'react';
import JobsForm from './JobsForm';
import JobsList from './JobsList';
import SavedJobsBtn from './SavedJobsBtn';
import { JobsProvider } from './context/jobs.context';
import './styles/components/__JobsApp.scss';


export default function JobsApp() {
    return (
        <div className="JobsApp">
            <JobsProvider>
                <header className="JobsApp__header">
                    <h1 className="JobsApp__title">Github Jobs</h1>
                    <SavedJobsBtn />
                </header>
                <JobsForm />
                <JobsList />
            </JobsProvider>
        </div>
    )
}
