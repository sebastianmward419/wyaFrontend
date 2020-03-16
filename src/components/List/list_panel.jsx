import React from 'react';

import { connect } from 'react-redux';

import Status   from './status.jsx';
import Location from './location.jsx';

import '../../styles/List/list_panel.css';

import { selectId } from '../../storage/actions/listActions.js';

const ListPanel = props => (
    <li className='listItemStyle' onClick={() => props.selectId (props.id)}>
        
        <Status status={props.info.status} />
        <div className='listItemTextStyle'>{props.info.name}</div>
        <Location location={props.info.location}/>
        
    </li>
)

const mapDispatchToProps = dispatch => ({
    selectId: id => dispatch (selectId (id))
})

export default connect (null, mapDispatchToProps)(ListPanel);
