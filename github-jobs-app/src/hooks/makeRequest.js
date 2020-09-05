import { useState, useEffect } from 'react';
import axios from 'axios';

// export default function GithubJobs(query) {
//     const [response, setResponse] = useState('');

//     /**
//      * Have to use a proxy otherwise request will not work on localHost 
//      * as you get a Access-Control-Allow-Origin (CORS origin) error  
//     */
//     const proxy = 'https://cors-anywhere.herokuapp.com/';

//     useEffect(() => {
//         // Load data 
//         // Set state with that data
//         axios.get(`${proxy}https://jobs.github.com/positions.json?description=${query.jobDescription}&location=${query.location}`).then(response => {
//             console.log(response.data);
//             setResponse(response.data)
//         });
//     });


// }

export default query => {
    const [state, setState] = useState('');

    /**
     * Have to use a proxy otherwise request will not work on localHost 
     * as you get a Access-Control-Allow-Origin (CORS origin) error  
    */
    const proxy = 'https://cors-anywhere.herokuapp.com/';

    useEffect(() => {
        // Load data 
        // Set state with that data
        axios.get(`${proxy}https://jobs.github.com/positions.json?description=${query.jobDescription}&location=${query.location}`).then(response => {
            console.log(response.data);
            setState(response.data)
        });
    });

    return state;
}

