import axios from 'axios';

export default function GithubJobs(query) {

    /**
     * Have to use a proxy otherwise request will not work on localHost 
     * as you get a Access-Control-Allow-Origin (CORS origin) error  
    */    
    const proxy = 'https://cors-anywhere.herokuapp.com/';

    axios.get(`${proxy}https://jobs.github.com/positions.json?description=${query.jobDescription}&location=${query.location}`).then(response => {
        console.log(response.data);
    });

}
