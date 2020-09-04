import { useReducer } from 'react';



export default initialState => {

    

    /**
    * This function will be used to figure out what part of 
    * initialState we need to update
    */
    function reducer(state, { field, value }) {
        return {
            ...state,
            [field]: value
        }
    }


    // Initialize state
    const [state, dispatch] = useReducer(reducer, initialState);


    // Update state based on form input values
    const handleChange = (e) => {
        dispatch({ field: e.target.name, value: e.target.value });
    }

    /**
     * Clear every items value in the state, 
     * we will use this to reset all the form inputs 
     */
    const reset = (state) => {
        Object.keys(state).forEach((key) => { 
            state[key] = ""; 
        });
    };
    
    return [state, handleChange, reset];
}