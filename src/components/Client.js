import React, { Component } from 'react';
import {connect} from 'react-redux';

class Client extends Component {

	set = (el)=>{
		let pkey = el.target.dataset.key;
		let client = this.props.clients[pkey];
		this.props.setClient(client);
	}

	render() {
		return (
			<div data-key={this.props.pkey} className="client">
				<div className="wrap" onClick={this.set} data-key={this.props.pkey} ></div>
				<div className="client-info-left">
					<div>
						<img src={this.props.data.general.avatar} />
					</div>
					<div>
						<h2>{this.props.data.general.firstName}</h2>
						<h3>{this.props.data.job.title}</h3>
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
		setClient:(d)=>{
			dispatch({type:"SET_CLIENT", data:d});
		}
	})
)(Client);
