import React, { useState, useEffect } from 'react';

import People from '../MockData/people.js';

import ListPanel  from './list_panel.jsx';

const List = props => {
    const [users, setUsers] = useState ([]);

    useEffect (() => {
        fetch ('/api/get/officemates')
        .then (resp => resp.json ())
        .then (data => setUsers (data))
        .catch (err => console.log (err))
    }, []);

    return (
        <div style={listStyle}>
            <ul>
                {console.log (users)}
                {users.map ((person, id) => <ListPanel info={person} key={id + person.name}/>)}     
            </ul>
        </div> 
    )
}

export default List;

const listStyle = 
{
    boxShadow: '10px 10px 5px #aaaaaa',
    margin: '10px',
}