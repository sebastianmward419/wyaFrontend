import React from 'react';

import { connect } from 'react-redux';

import '../../../../styles/List/ChangeInfo/ChangeStatus/changeStatusPopup.css';

const ChangeStatusPopup = props => {
    const statuses = 
    [
        {color: '#fc0000', statusCode: 'no'},  {color: '#00defc', statusCode: 'maybe'}, 
        {color: '#13fc00', statusCode: 'yes'}, {color: '#a00be0', statusCode: 'WFH'}
    ]
   
    const changeStatus = e => {
        let userToChange = props.users [props.currentId];
        console.log (e)
        userToChange.status = 'no';
    }
   
    return (
   <div onClick={changeStatus} className='status_popup_menu'>
        
        {
        statuses.map ((statusObj, id) => (
            <span key={id} className='statusDotStyle' style={{backgroundColor: statusObj.color}}></span>
        ))
        }
        
    </div>)
}

const mapStateToProps = state => ({
    currentId: state.ListReducer.idSelected, users: state.ListReducer.users
})

export default connect (mapStateToProps, null)(ChangeStatusPopup);