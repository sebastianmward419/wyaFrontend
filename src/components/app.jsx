import React from 'react';

import List       from './List/list.jsx';
import HeaderMain from './Header/header_main.jsx';

class App extends React.Component {

    componentDidMount () {
        document.body.style.margin = 0;
    }

    render = () => (
        <div>
            <HeaderMain />
            <List />
        </div>
    )
}

export default App;