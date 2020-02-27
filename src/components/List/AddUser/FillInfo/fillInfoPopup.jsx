import React from 'react';

import useInput from '../../../Helpers/Inputs/useInput.jsx';

// {
//     "id": "5e445775b3ea67000b5fb0a1",
//     "email": "tod@gmail.com",
//     "password": "DEFAULT",
//     "status": "yes",
//     "location": "nowhere",
//     "name": "bitch lastname"
// }

const InfoPopup = props => {
    const {value: first_name, bind: bind_first_name, reset: reset_first_name} = useInput ('');
    const {value: last_name, bind: bind_last_name, reset: reset_last_name} = useInput ('');
    const {value: email, bind: bind_email, reset: reset_email} = useInput ('');

    const handleSubmit = e => {
        e.preventDefault ();
    
        let userInfo = JSON.stringify ({first_name, last_name, email, location: 'unset', status: 'maybe'});


        fetch ('/api/post/officemate', {
            method: 'POST',
            headers: 
            {
                'Content-Type': 'application/json',
            },
            body: userInfo
        })
        .then (data => console.log (data));
        
        reset_first_name (); reset_last_name (); reset_email ();
    }

    return (
        <div style={formStyles.div}>
            <form style={formStyles.form}>
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
        </div>
    )
}

export default InfoPopup;

const formStyles = 
{
    div: 
    {
        boxShadow: '5px 10px 8px 10px#888888',
        width: '150px',
        height: '150px',
        padding: '20px'
    },
    form: 
    {
       
    },
    label:
    {

    },
    input:
    {

    }
}