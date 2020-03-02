import React from 'react';

import HeaderMain  from './Header/header_main.jsx';
import List        from './List/list.jsx';
import Group       from './Group/group.jsx';
import AddButton   from './List/AddUser/addButton.jsx';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { showGroup: false }
    }

    componentDidMount () {
        document.body.style.margin = 0;
    }

    render = () => (
        <div>
            <HeaderMain />
            <List />
            {this.state.showGroup && <Group />}
            <AddButton />
        </div>
    )

    static triggerShowGroup = () => {
        console.log('test');
        console.log(this.state);
        console.log(this.state.showGroup);
        this.state.showGroup = true;
    }
}

export default App;