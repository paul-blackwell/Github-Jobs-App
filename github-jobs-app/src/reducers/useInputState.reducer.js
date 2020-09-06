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


    /**
    * If input is a checkbox set its value depending
    * on if its been checked or not, else update state 
    * based on form input value 
    */
    const handleChange = (e) => {

        if (e.target.type === 'checkbox') {
            dispatch({ field: e.target.name, value: e.target.checked });
        } else {
            dispatch({ field: e.target.name, value: e.target.value });
        }
    }

    /**
     * Clear every items value in the state, 
     * we will use this to reset all the form inputs 
     */
    const reset = () => {
        Object.keys(state).forEach((key) => {
            dispatch({ field: key, value: "" })
        });
    };


    return [state, handleChange, reset];
}