import React from 'react';

const PopupBackdrop = props => (
    <div style={styles.section}>
        {props.children}
    </div>
)

const styles =
{
    section: 
    {
        zIndex         : 0,
        backgroundColor: 'blue',
        width          : '100%',
        height         : '100%',
        position       : 'absolute',

        top : 0,
        left: 0
    }
}

export default PopupBackdrop;