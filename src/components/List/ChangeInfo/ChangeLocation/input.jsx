import React, { useState } from 'react';

import { connect } from 'react-redux';

import { UpdateLocation, UpdateStatus } from '../../../../utils/fetches/updateInfo';

import '../../../../styles/List/ChangeInfo/ChangeLocation/changeLocationPopup.css';

const Input = props => {
    const [locations, setLocations] = useState ([]);
    const [inputVal , setInputVal ] = useState ('');

    const getLocationPredictions = e => {
        setInputVal (e.target.value);
        
        fetch (`/api/get/locations/${inputVal}`)
        .then (resp => resp.json ())
        .then (data => setLocations (data.predictions))
        .catch (err => console.log (err))
    }

    const WFH = innerHTML => {
        const statusObj = {statusObj: {statusCode: 'WFH'}};
    
        UpdateLocation (props, innerHTML);
        UpdateStatus ({...props, ...statusObj})

        props.togglePopup ();
    }

    return (
        <div>
            <input onChange={getLocationPredictions} value={inputVal} className='change_location_input'></input>

            <ul className='change_location_ul'>

                {
                    (locations && inputVal.length > 0) &&
                    locations.map ((location, id) => (
                        <li key={id} onClick={e => {UpdateLocation (props, e.target.innerHTML); props.togglePopup ();}} 
                            className='change_location_li'>{location.description}</li>
                    ))
                }

                <li onClick={e => WFH (e.target.innerHTML)} className='change_location_li'>🏠</li>
            </ul>
        </div>
    )
}

const mapStateToProps = state => ({
    currentId: state.ListReducer.idSelected, users: state.ListReducer.users
})


export default connect (mapStateToProps, null)(Input);