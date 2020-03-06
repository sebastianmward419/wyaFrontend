import React from 'react';

import StatusIcon from './statusIcon.jsx';
import Statuses   from '../../../../utils/status/statuses.js';

import '../../../../styles/List/ChangeInfo/ChangeStatus/changeStatusPopup.css';

const ChangeStatusPopup = props => {
    const statuses = 
    [
        {color: '#fc0000', statusCode: 'no'},  {color: '#00defc', statusCode: 'maybe'}, 
        {color: '#13fc00', statusCode: 'yes'}, {color: '#a00be0', statusCode: 'WFH'}
    ]
   
    return (
   <div className='status_popup_menu'>
        
        {
        Object.keys (Statuses).map ((statusObj, id) => (
            <StatusIcon key={id} statusObj={Statuses[statusObj]} />
        ))
        }
        
    </div>)
}



export default ChangeStatusPopup;