import React from 'react';
import Status from './status.jsx';
// import '../../styles/List/list_panel.css';

const ListPanel = props => (
    <li style={ListItemStyle}>
        <Status status={props.info.status} />
        <div style={ListItemTextStyle}>{props.info.name}</div>
        <div style={ListItemTextStyle}>{props.info.location}</div>
    </li>
)

export default ListPanel;

const ListItemStyle = 
{
    listStyle: 'none',
    padding  : '10px',
    display  : 'flex'
}

const ListItemTextStyle =
{
    margin  : '10px',
    fontSize: '30px',
    width   : '400px'
}