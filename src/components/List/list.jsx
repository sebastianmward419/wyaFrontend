import React, { useState, useEffect } from 'react';
import People from '../MockData/people.js';
import ListPanel  from './list_panel.jsx';
import '../../styles/List/list.css';

const List = props => {
    const [users, setUsers] = useState ([]);

    useEffect (() => {
        fetch ('/api/get/officemates')
        .then (resp => resp.json ())
        .then (data => setUsers (data))
        .catch (err => console.log (err))
    }, []);

    return (
        <div>
            <ul id='listHeader'>
                <li>Name</li>
                <li>Location</li>
            </ul>
            <ul>
                {console.log (users)}
                {users.map ((person, id) => <ListPanel info={person} key={id + person.name}/>)}     
            </ul>
        </div> 
    )
}

export default List;
