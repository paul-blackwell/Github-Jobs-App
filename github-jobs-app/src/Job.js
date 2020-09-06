import React from 'react';
import Icon from './Icon';
import './styles/components/__Job.scss';

export default function Job(props) {

    const {title, location, created_at, company, type} = props;

    // Sun Sep 06 14:30:27 UTC 2020
    const str = created_at;
    var index = str.indexOf( ' ', str.indexOf( ' ' ) + 1 );
    var firstChunk = str.substr( 0, index );
    console.log(firstChunk)

    return (
        <li className="Job">
            <h3 className="Job__title">
                {title}
                <span className="Job__title-span"> - {location}</span>
            </h3>
            <p className="Job__date">{created_at}</p>
            <p className="Job__type">{company} - {type}</p>
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
