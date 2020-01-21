import React from 'react';

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

    return (<div><span style={{...StatusDotStyle, backgroundColor: color}}></span></div>)
}

export default Status;

const StatusDotStyle =
{
    height: '25px',
    width: '25px',
    borderRadius: '50%',
    display: 'inline-block',
    margin: '10px'
}