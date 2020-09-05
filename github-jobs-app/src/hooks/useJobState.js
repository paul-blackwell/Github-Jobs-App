import { useState } from 'react';

export default initialJobs => {
    const [jobs, setJobs] = useState(initialJobs);

    return {
        addJob: newJob => {
            setJobs(newJob);
        }
    }
}