import React, { Component } from 'react';
import {connect} from 'react-redux';

class OpenClient extends Component {

	render() {
		console.log(this.props.clients);
		return (
			<div className="col-md-8">
				<div className="open-client">
					Client Open
				</div>
			</div>
		)
	}
}

export default connect (
	state => ({
		clients: state.clients
	}),
	dispatch => ({
	})
)(OpenClient);
