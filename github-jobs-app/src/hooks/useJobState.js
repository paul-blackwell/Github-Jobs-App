import { useState } from 'react';
import axios from 'axios';
import useLocalStorageState from '../hooks/useLocalStorageState';

export default initialJobs => {
    const [jobs, setJobs] = useState(initialJobs);

    const [savedJobs, setSavedJobs] = useLocalStorageState("Jobs", []);
    
    /**
     * This will be used to toggle saved Jobs list if the the Saved Jobs btn 
     * has been clicked
     * */
    const [showSavedJobs, setShowSavedJobs] = useState({showingSavedJobs: false});


    return {
        jobs,
        savedJobs,
        showSavedJobs,
        addJob: newJob => {
            setJobs(newJob);
        },
        showLoader: () => {
            setJobs('loading');
        },
        showingSavedJobs: (show = false) => {
            setShowSavedJobs({showingSavedJobs: show});
        },
        toggleShowingSavedJobs:() => {
            setShowSavedJobs({showingSavedJobs: !showSavedJobs.showingSavedJobs});
        },
        saveJob: (id) => {
            
            /**
             * This will return the job you want to save as an object,
             * based on the ID passed in
             */
            const saveThis = jobs.find(job => {
                return job.id === id
            })
            setSavedJobs([...savedJobs, saveThis]);
        },
        searchJobs: query => {

            /**
             * To get this to work locally:
             * Run:  npm start
             * Then in a different terminal 
             * Run: npm run proxy
             * You will have to do this to proxy to bypass CORS issues 
             * when making requests from localhost, see docs https://www.npmjs.com/package/local-cors-proxy
             */

            // If on localhost 
            const API_BASE_URL = "http://localhost:8010/proxy/";

            // If live
            //const API_BASE_URL = "https://jobs.github.com/";

            const { jobDescription, fulltime, location } = query;
            const URL = `${API_BASE_URL}positions.json?description=${jobDescription}&full_time=${fulltime}&location=${location}`;

            try {
                axios.get(URL).then(response => {
                    setJobs(response.data);
                });
            } catch (error) {
                console.log(error);
            }
        },
    }
}