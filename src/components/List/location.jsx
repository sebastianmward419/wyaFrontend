import React, {useState} from 'react';

import ChangeLocationPopup from './ChangeInfo/ChangeLocation/changeLocationPopup.jsx';
import PopupBackdrop       from '../Helpers/popupBackdrop.jsx';

const Location = props => {
    const [popup, togglePopup] = useState (false);

    const changePopup = () => {
        if (popup) {
            console.log ('');
        }
    }

    return (
        <div className='listItemTextStyle' onClick={() => togglePopup (!popup)}>
            {props.location}

            {
                popup &&

                <PopupBackdrop><ChangeLocationPopup /></PopupBackdrop>
            }
        </div>
    )
}

export default Location;