import React, { useContext, useState } from 'react';
import Icon from './Icon';
import { formatDate } from './utils/helper';
import useToggleState from './hooks/useToggleState';
import './styles/components/__Job.scss';
import { JobsContext } from "./context/jobs.context";

export default function Job(props) {

    const { saveJob } = useContext(JobsContext);
    const [state, setState] = useState('');

    const [showDescription, toggleDescription] = useToggleState(false);
    const { id, title, location, created_at, company, type, description } = props;


    /**
     * This will save the Job to localStorage,then setState 
     * to loading for one second, We do this so can update 
     * parts of the button so the user can see they have saved 
     * something
     */
    function save(jobId) {
        saveJob(jobId);
        setState({showLoading: true});

        setTimeout(() => {
            setState({showLoading: false});
        }, 1000);
        
    }

    return (
        <li className="Job">
            <h3 className="Job__title">
                {title}
                <span className="Job__title-span"> - {location}</span>
            </h3>
            <p className="Job__date">{formatDate(created_at)}</p>
            <p className="Job__type">{company} - {type}</p>
            <div className="Job__buttons">
                <button className="view-details-dtn" onClick={toggleDescription}>
                    View Details
                    <Icon label='Drop down icon' icon='icon-chevron-down' />
                </button>
                <button className="save-btn" onClick={() => {save(id)}}>
                    <Icon label='Save icon' icon='icon-save' />
                    {!state.showLoading ? 'Save Job' : 'Saving...'}
                </button>
            </div>
            {showDescription &&
                <div className="Job__details" dangerouslySetInnerHTML={{__html: description}} />
            }
        </li>
    )
}
