import React, {useState} from 'react';

import ChangeStatusPopup from './ChangeInfo/ChangeStatus/changeStatusPopup.jsx';
import Statuses          from '../../utils/status/statuses.js';

import '../../styles/List/status.css';

const Status = props => {
    const [popup, togglePopup] = useState (false);

    let color = Statuses[props.status] ? Statuses[props.status].statusColor : 'yellow';

    return (
    <div>
        <span onClick={() => togglePopup (!popup)} className='statusDotStyle' style={{backgroundColor: color}}></span>

        {
            popup &&
            <ChangeStatusPopup />
        }
    </div>)
}

export default Status;
