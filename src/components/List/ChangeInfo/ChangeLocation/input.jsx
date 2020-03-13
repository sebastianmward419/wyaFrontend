import React, { useState } from 'react';

import { connect } from 'react-redux';

import { UpdateLocation } from '../../../../utils/fetches/updateInfo';

import '../../../../styles/List/ChangeInfo/ChangeLocation/changeLocationPopup.css';

const Input = props => {
    const [locations, setLocations] = useState ([]);

    const getLocationPredictions = e => {
        fetch (`/api/get/locations/${e.target.value}`)
        .then (resp => resp.json ())
        .then (data => setLocations (data.predictions))
        .catch (err => console.log (err))
    }

    return (
        <div>
            <input onChange={getLocationPredictions} className='change_location_input'></input>

            {
                locations &&
                <ul className='change_location_ul'>
                    {locations.map ((location, id) => (
                        <li key={id} onClick={e => UpdateLocation (props, e.target.innerHTML)} className='change_location_li'>{location.description}</li>
                    ))}
                </ul>
            }
        </div>
    )
}

const mapStateToProps = state => ({
    currentId: state.ListReducer.idSelected, users: state.ListReducer.users
})


export default connect (mapStateToProps, null)(Input);