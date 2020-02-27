import React from 'react';
import '../../styles/List/status.css';

const Status = props => {
    let color;

    switch (props.status)
    {
        case 'yes':
            color = '#13fc00'; break;
        case 'no':
            color = '#fc0000'; break;
        case 'maybe':
            color = '#00defc'; break;
    }

    return (<div><span class='statusDotStyle' style={{backgroundColor: color}}></span></div>)
}

export default Status;
