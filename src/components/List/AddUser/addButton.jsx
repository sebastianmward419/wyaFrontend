import React, {useState} from 'react';

import InfoPopup from './FillInfo/fillInfoPopup.jsx';

const AddButton = props => {
    const [popUp, togglePopup] = useState (false);

   return (
    <div>
        <button onClick={() => togglePopup (!popUp)} style={buttonStyle}>Add officemate</button>
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
    width: '75px',
    height: '75px',
    border: '1px solid black',
    backgroundColor: 'white',
}