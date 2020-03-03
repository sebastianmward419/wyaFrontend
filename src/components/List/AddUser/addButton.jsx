import React, {useState} from 'react';

import InfoPopup from './FillInfo/fillInfoPopup.jsx';

import '../../../styles/List/AddUser/addButton.css';

const AddButton = props => {
    const [popUp, togglePopup] = useState (false);

   return (
    <div>
        <button onClick={() => togglePopup (!popUp)} class='buttonStyle'>Add officemate</button>
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