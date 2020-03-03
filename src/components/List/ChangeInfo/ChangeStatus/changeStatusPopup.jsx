import React from 'react';

import '../../../../styles/List/ChangeInfo/ChangeStatus/changeStatusPopup.css';

const changeStatus = e => {
    console.log (e);
}

const ChangeStatusPopup = props => (
    <div onClick={changeStatus} className='status_popup_menu'>
        yea
    </div>
)

export default ChangeStatusPopup;