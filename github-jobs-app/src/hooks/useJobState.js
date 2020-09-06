import { useState } from 'react';
import axios from 'axios';

export default initialJobs => {
    const [jobs, setJobs] = useState(initialJobs);

    return {
        jobs,
        addJob: newJob => {
            setJobs(newJob);
        },
        searchJobs: query => {
            const proxy = 'https://cors-anywhere.herokuapp.com/';
            // Load data 
            // Set state with that data
            axios.get(`${proxy}https://jobs.github.com/positions.json?description=${query.jobDescription}&full_time=${query.fulltime}&location=${query.location}`).then(response => {
                console.log(response.data);
                setJobs(response.data)
            });
        },
    }
}