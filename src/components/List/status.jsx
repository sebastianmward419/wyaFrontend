import React, {useState} from 'react';

import ChangeStatusPopup from './ChangeInfo/ChangeStatus/changeStatusPopup.jsx';
import Statuses          from '../../utils/status/statuses.js';

import '../../styles/List/status.css';

const Status = props => {
    const [popup, togglePopup] = useState (false);

    let color    = Statuses[props.status] ? Statuses[props.status].statusColor : 'yellow';
    let statusEx = Statuses[props.status] ? Statuses[props.status].explanation : 'This should\'nt be yellow';

    return (
    <div>
        <span onClick={() => togglePopup (!popup)}  title={statusEx} className='statusDotStyle' style={{backgroundColor: color}}></span>

        {
            popup &&
            <ChangeStatusPopup toggleStatusPopup={() => togglePopup (!popup)}/>
        }
    </div>)
}

export default Status;
