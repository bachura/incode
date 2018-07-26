import React, { Component } from 'react';
import ListClients from './components/ListClients';
import OpenClient from './components/OpenClient';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="container">
				<div className="row app">
					<ListClients />
					<OpenClient />
				</div>
			</div>
		);
	}
}

export default App;
