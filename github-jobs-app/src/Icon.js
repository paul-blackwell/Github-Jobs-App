import React from 'react';
import sprite from './assets/icons/sprite.svg';
import './styles/components/__Icon.scss';

export default function Icon(props) {
    return (
            <svg className="Icon" aria-label={props.label}>
                <use href={`${sprite}#${props.icon}`} />
            </svg>
    )
}
