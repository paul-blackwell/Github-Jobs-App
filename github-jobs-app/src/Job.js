import React from 'react';
import Icon from './Icon';
import './styles/components/__Job.scss';

export default function Job() {
    return (
        <li className="Job">
            <h3 className="Job__title">
                .Net Software Developer (GIS experience)
                <span className="Job__title-span"> - Remote, United Kingdom</span>
            </h3>
            <p className="Job__date">17 days ago</p>
            <p className="Job__type">SoloProtect – Full Time</p>
            <div className="Job__buttons">
                <button className="view-details-dtn">
                    View Details
                    <Icon label='Drop down icon' icon='icon-chevron-down' />
                </button>
                <button className="save-btn">
                    <Icon label='Save icon' icon='icon-save' />
                    Save Job
                </button>
            </div>
        </li>
    )
}
