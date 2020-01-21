import React from 'react';

class HeaderMain extends React.Component {
    render = () => (
        <div style={headerStyle}>
            <h1>WYA</h1>
            <p>Property of TodEnterprises</p>
        </div>
    )
}

export default HeaderMain;

const headerStyle = 
{
    padding   : '60px',
    textAlign : 'center',
    background: '#1abc9c',
    color     : 'white',
    fontSize  : '30px'
}

