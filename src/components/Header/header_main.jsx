import React from 'react';
import App from '../app.jsx'
import '../../index.css'

class HeaderMain extends React.Component {
    render = () => (
        <header>
            <ul id="navbar">
                <li><a href="#">List</a></li>
                <li><a href="#">Calendar</a></li>
                <li><a onClick={App.triggerShowGroup}>Group</a></li>
            </ul>

            <h1>WYA</h1>
            <p>Property of TodEnterprises</p>
        </header>
    )
}

export default HeaderMain;
