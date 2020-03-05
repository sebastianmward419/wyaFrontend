import React, {useState} from 'react';

import ChangeStatusPopup from './ChangeInfo/ChangeStatus/changeStatusPopup.jsx';

import '../../styles/List/status.css';

const Status = props => {
    const [popup, togglePopup] = useState (false);

    let color;

    switch (props.status)
    {
        case 'yes':
            color = '#13fc00'; break;
        case 'no':
            color = '#fc0000'; break;
        case 'maybe':
            color = '#00defc'; break;
    }

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
