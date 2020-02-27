import React, {useState} from 'react';

import InfoPopup from './FillInfo/fillInfoPopup.jsx';

const AddButton = props => {
    const [popUp, togglePopup] = useState (false);

   return (
    <div style={buttonStyle.div}>
        <button onClick={() => togglePopup (!popUp)} style={buttonStyle.button}>Add officemate</button>
        {
            popUp &&
            <InfoPopup />
        }
    </div>
   ) 
}

const sendInfo = officeMAteInfo => {
    fetch ('/api/post/officemate', officeMAteInfo)
    .then (data => console.log ('FetchPost: ', data))
    .catch (err => console.log (err))
}

export default AddButton;

const buttonStyle = 
{
    div: 
    {
        margin: '10px',
        padding: '20px'
    },
    button: 
    {
        width: '75px',
        height: '75px',
        border: '1px solid black',
        backgroundColor: 'white',
    }
}