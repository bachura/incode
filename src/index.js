import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import App from './App';

import {Provider} from 'react-redux';

import {composeWithDevTools} from 'redux-devtools-extension';

import {createStore, applyMiddleware} from 'redux';

import reducer from './reducers';

import thunk from 'redux-thunk';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render (
	<Provider store={store}>
			<App />
	</Provider>,
	document.getElementById('root')
)
