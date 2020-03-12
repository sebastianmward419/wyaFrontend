import React from 'react';

import { connect } from 'react-redux';

import { UpdateInfo } from '../../../../utils/fetches/updateInfo.js';

const StatusIcon = props => (
   
    <span title={props.statusObj.explanation} className='statusDotStyle' onClick={() => UpdateInfo (props)} 
          style={{backgroundColor: props.statusObj.statusColor}}>
    </span>  
)

const mapStateToProps = state => ({
    currentId: state.ListReducer.idSelected, users: state.ListReducer.users
})

export default connect (mapStateToProps, null)(StatusIcon);