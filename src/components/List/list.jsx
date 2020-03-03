import React, { useEffect } from 'react';

import { connect } from 'react-redux';

import ListPanel  from './list_panel.jsx';
import '../../styles/List/list.css';

import fetchUsers from '../../utils/fetches/fetchUsers.js';


const List = props => {

    useEffect (() => {
       props.fetchUsers ();
    });

    return (
        <div>
            <ul id='listHeader'>
                <li>Name</li>
                <li>Location</li>
            </ul>
            <ul>
                {props.users.map ((person, id) => <ListPanel info={person} key={id + person.name}/>)}     
            </ul>
        </div> 
    )
}

const mapStateToProps = state => ({
    users: state.ListReducer.users
})

export default connect (mapStateToProps, {fetchUsers})(List);
