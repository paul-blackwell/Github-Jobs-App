import React, { createContext } from "react";
import useJobState from '../hooks/useJobState';


const defaultJobs = [];

export const JobsContext = createContext();

export function JobsProvider(props) {
    const state = useJobState(defaultJobs);
    return (
        <JobsContext.Provider value={state}>
            {props.children}
        </JobsContext.Provider>
    );
}