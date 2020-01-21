import React from 'react';

const AddButton = props => (
    <div>
        <button onClick={sendInfo} style={buttonStyle}>Add officemate</button>
    </div>
)

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