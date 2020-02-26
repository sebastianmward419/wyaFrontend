import React from 'react';
import Status from './status.jsx';
import '../../styles/List/list_panel.css';

const ListPanel = props => (
    <li class='listItemStyle'>
        <Status status={props.info.status} />
        <div class='listItemTextStyle'>{props.info.name}</div>
        <div class='listItemTextStyle'>{props.info.location}</div>
    </li>
)

export default ListPanel;
