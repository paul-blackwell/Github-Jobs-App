import React, { useContext }  from 'react';
import Icon from './Icon';
import { JobsContext } from "./context/jobs.context";
import './styles/components/__SavedJobsBtn.scss'

export default function SavedJobsBtn() { 

    const { toggleShowingSavedJobs } = useContext(JobsContext);

    return (
        <button className="SavedJobsBtn" onClick={() => toggleShowingSavedJobs()}>
            <Icon label='Folder Icon' icon='icon-folder' />
            Saved Jobs
        </button>
    )
}
