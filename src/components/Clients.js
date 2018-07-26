import React, { Component } from 'react';
import {connect} from 'react-redux';

class Clients extends Component {
	render() {
		return (
			<a href="#" onClick={OpenClients} className="client">
				<div className="row">
					<div className="col-sm-3">
						<img src={this.props.data.general.avatar} />
					</div>
					<div className="client-info">
						<div>
							<h2>{this.props.data.general.firstName}</h2>
							<h3>{this.props.data.job.title}</h3>
						</div>
					</div>
				</div>
			</a>
		);
	}
}

function OpenClients() {
	console.log("lorem");
}

export default connect (
	state => ({
		clients: state.clients
	}),
	dispatch => ({
	})
)(Clients);
