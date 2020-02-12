import React from 'react';

class HeaderMain extends React.Component {
    render = () => (
        <div style={headerStyle}>

            <ul style={navbarStyle}>
                <li style={navbarLiStyle}><a href="#" style={navbarLiAStyle}>List</a></li>
                <li style={navbarLiStyle}><a href="#" style={navbarLiAStyle}>Calendar</a></li>
                <li style={navbarLiStyle}><a href="#" style={navbarLiAStyle}>Group</a></li>
            </ul>

            <h1>WYA</h1>
            <p>Property of TodEnterprises</p>
        </div>
    )
}

export default HeaderMain;

const headerStyle = 
{
    padding: '60px',
    textAlign: 'center',
    background: '#1abc9c',
    color: 'white',
    fontSize: '30px'
}

const navbarStyle = 
{
    display: 'inline',
    listStyleType: 'none'
}

const navbarLiStyle =
{
    float: 'left'
}
  
const navbarLiAStyle = 
{
    display: 'block',
    padding: '0em 1em 0em 1em',
    color: 'white',
    textDecoration: 'none',
}
