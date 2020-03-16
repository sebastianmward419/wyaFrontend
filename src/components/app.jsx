import React, { useState, useEffect } from 'react';

import HeaderMain  from './Header/header_main.jsx';
import List        from './List/list.jsx';
import Group       from './Group/group.jsx';
import AddButton   from './List/AddUser/addButton.jsx';

const App = props => {
    const [group, showGroup] = useState (false);
    
    useEffect (() => document.body.style.margin = 0)

    return (
        <div>ß
        <HeaderMain />
        {!this.state.showGroup && <List />}
        {!this.state.showGroup && <AddButton />}
        {this.state.showGroup && <Group />}
        </div>
    )
}

export default App;