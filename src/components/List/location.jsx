import React, {useState} from 'react';

import ChangeLocationPopup from './ChangeInfo/ChangeLocation/changeLocationPopup.jsx';


const Location = props => {
    const [popup, togglePopup] = useState (false);

    const changePopup = () => {
        if (popup) {
            console.log ('');
        }
    }

    return (
        <div className='listItemTextStyle'>
            <span onClick={() => togglePopup (!popup)}>{props.location}</span>

            {
                popup &&

                <ChangeLocationPopup />
            }
        </div>
    )
}

export default Location;