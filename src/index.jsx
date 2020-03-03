import  React          from 'react';
import ReactDom        from 'react-dom';
import thunk           from 'redux-thunk';
import { Provider }    from 'react-redux'; 

import { createStore, applyMiddleware, compose } from 'redux';

import RootReducer from './storage/reducers/RootReducer.js';
import App         from './components/app.jsx';

const middlewares = [thunk];
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore (RootReducer, composeEnhancer (applyMiddleware (... middlewares)));

ReactDom.render(<Provider store={store}><App /></Provider>, document.getElementById('App'));