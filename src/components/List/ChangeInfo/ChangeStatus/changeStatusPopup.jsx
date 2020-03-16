import React from 'react';

import StatusIcon from './statusIcon.jsx';
import Statuses   from '../../../../utils/status/statuses.js';

import '../../../../styles/List/ChangeInfo/ChangeStatus/changeStatusPopup.css';

const ChangeStatusPopup = props => (
      
   <div className='status_popup_menu'>
        
        {
        Object.keys (Statuses).map ((statusObj, id) => (
           <StatusIcon key={id} statusObj={Statuses[statusObj]} toggleStatusPopup={props.toggleStatusPopup}/>
        ))
        }
        
    </div>
)



export default ChangeStatusPopup;