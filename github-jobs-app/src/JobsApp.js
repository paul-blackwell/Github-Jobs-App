import React from 'react';
import JobsForm from './JobsForm';
import JobsList from './JobsList';
import { JobsProvider } from './context/jobs.context';
import './styles/components/__JobsApp.scss';

export default function JobsApp() {
    return (
        <div className="JobsApp">
            <h1 className="JobsApp__title">Github Jobs</h1>
            <JobsProvider>
                <JobsForm />
                <JobsList />
            </JobsProvider>
        </div>
    )
}
