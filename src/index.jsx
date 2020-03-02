import  React          from 'react';
import { createStore } from 'redux';
import { Provider }    from 'react-redux'; 
import ReactDom        from 'react-dom';

import RootReducer from './storage/reducers/RootReducer.js';

import App from './components/app.jsx';

let store = createStore (RootReducer);

ReactDom.render(<Provider store={store}><App /></Provider>, document.getElementById('App'));