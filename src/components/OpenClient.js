import React, { Component } from 'react';
import {connect} from 'react-redux';

class OpenClient extends Component {

	render() {
		return (
			<div className="col-md-7 col-sm-12 open-client-wrap">
				<div className="open-client">
					<div className="row">
						<div className="col-sm-4">
							<img src={this.props.client.general.avatar} />
						</div>
						<div className="col-sm-8">
							<h2>{this.props.client.general.firstName}</h2>
							<h3>{this.props.client.general.lastName}</h3>
							<br />
							<p>{this.props.client.job.company}</p>
							<p>{this.props.client.job.title}</p>
							<br />
							<p>{this.props.client.contact.email}</p>
							<p>{this.props.client.contact.phone}</p>
							<br />
							<p>{this.props.client.address.street}</p>
							<p>{this.props.client.address.city}</p>
							<p>{this.props.client.address.zipCode}</p>
							<p>{this.props.client.address.country}</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default connect (
	state => ({
		client: state.client
	}),
	dispatch => ({
	})
)(OpenClient);
