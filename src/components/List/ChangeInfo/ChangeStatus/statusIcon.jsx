import React from 'react';

import { connect } from 'react-redux';

const StatusIcon = props => {
    const changeStatus = e => {
        let userToChange = props.users [props.currentId];
        
        userToChange.status = props.statusObj.statusCode;

        let fetchOptions =
        {
            method: 'PUT',
            headers: 
            {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify (userToChange)
        }

        fetch (`/api/update/officemate/${userToChange.id}`, fetchOptions)
        .then (resp => resp.json ())
        .then (data => console.log (data))
        .catch (err => console.log (err))
    }

    return (
        <span className='statusDotStyle' onClick={changeStatus} style={{backgroundColor: props.statusObj.statusColor}}>

        </span>
    )
}

const mapStateToProps = state => ({
    currentId: state.ListReducer.idSelected, users: state.ListReducer.users
})

export default connect (mapStateToProps, null)(StatusIcon);