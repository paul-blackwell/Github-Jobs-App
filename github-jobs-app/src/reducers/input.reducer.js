
export const initialState = {
    jobDescription: '',
    location: ''
};

export function reducer(state, { field, value }) {
    return {
        ...state,
        [field]: value
    }
};

