import React from 'react';

import LocationInput from './input.jsx';

import '../../../../styles/List/ChangeInfo/ChangeLocation/changeLocationPopup.css';

const ChangeLocationPopup = props => (
    <div className='change_location_section'>
        <LocationInput togglePopup={props.togglePopup}/>
    </div>
)

export default ChangeLocationPopup;