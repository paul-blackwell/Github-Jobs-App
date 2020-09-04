

export const initialState = {
    jobDescription: '',
    location: ''
}

/**
 * This will return the existing state and update a
 * specific field based on the prams passed in 
 */
export function reducer(state, { field, value }) {
    return {
        ...state,
        [field]: value
    }
}