import React, {useState} from 'react';

import ChangeLocationPopup from './ChangeInfo/ChangeLocation/changeLocationPopup.jsx';


const Location = props => {
    const [popup, togglePopup] = useState (false);

    return (
        <div className='listItemTextStyle'>
            <span onClick={() => togglePopup (!popup)}>{props.location}</span>

            {
                popup &&

                <ChangeLocationPopup togglePopup={() => togglePopup (!popup)}/>
            }
        </div>
    )
}

export default Location;