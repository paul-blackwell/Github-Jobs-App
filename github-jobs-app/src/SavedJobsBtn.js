import React from 'react';
import Icon from './Icon';
import './styles/components/__SavedJobsBtn.scss'

export default function SavedJobsBtn() { 

    return (
        <button className="SavedJobsBtn">
            <Icon label='Folder Icon' icon='icon-folder' />
            Saved Jobs
        </button>
    )
}
