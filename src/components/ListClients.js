import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Icon, Input } from 'semantic-ui-react';
import Clients from './Clients';

class ListClients extends Component {

	constructor(params) {
		super(params);
		this.state = {
			str: ''
		}
	}

	showClients() {
		let filtred = [];
		for (let j in this.props.clients) 
		{
			let client = this.props.clients[j];
			if(this.state.str)
			{
				if(JSON.stringify(client).toLowerCase().search(this.state.str.toLowerCase()) !== -1) {
						filtred.push(<Clients key={j} data={client} />);
				} else 
				{
					continue;
				}
			} else 
			{
				filtred.push(<Clients key={j} data={client} />);
			}
		}
			return filtred;
	}

	SearchClients = (el) => {
		this.setState({str:el.target.value})
	}

	render() {
		return (
			<div className="col-sm-5 text-left">
				<div className="list-clients-wrap">
					<div className="search">
						<Input onInput={this.SearchClients} icon placeholder='Search'>
							<input />
							<Icon name='search' />
						</Input>
					</div>
					<div>
						{this.showClients()}
					</div>
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
