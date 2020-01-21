import React from 'react';

import useInput from '../../../Helpers/Inputs/useInput.jsx';

const InfoPopup = props => {
    const {value: first_name, bind: bind_first_name, reset: reset_first_name} = useInput ('');
    const {value: last_name, bind: bind_last_name, reset: reset_last_name} = useInput ('');
    const {value: email, bind: bind_email, reset: reset_email} = useInput ('');

    const handleSubmit = e => {
        e.preventDefault ();
    
        let userInfo = {first_name, last_name, email};
        
        reset_first_name (); reset_last_name (); reset_email ();
    }

    return (
        <form>
            <label>
                First Name: 
                <input {...bind_first_name}></input>
            </label>
            <label>
                Last Name: 
                <input {...bind_last_name}></input>
            </label>
            <label>
                Email: 
                <input {...bind_email}></input>
            </label>

            <button onClick={handleSubmit} type='submit'>Submit User</button>
        </form>
    )
}


export default InfoPopup;