import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Icon, Input } from 'semantic-ui-react';
import Clients from './Clients';

class ListClients extends Component {

	showClients = () => {
		return this.props.clients.map((el,key)=>{
			return <Clients key={key} data={el} />
		})
	}

	render() {
		return (
			<div className="col-md-4 text-left">
				<div className="search">
					<Input icon placeholder='Search'>
						<input />
						<Icon name='search' />
					</Input>
				</div>
				<div className="list-clients">
					{this.showClients()}
				</div>
			</div>
		);
	}
}

export default connect (
	state => ({
		clients: state.clients
	}),
	dispatch => ({
	})
)(ListClients);
