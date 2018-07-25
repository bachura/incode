import React, { Component } from 'react';
import {connect} from 'react-redux';

class Clients extends Component {
  render() {
    return (
      <a href="#" onClick={OpenClients} className="list-clients">
      	<img src={this.props.data.general.avatar} />
      	<h2>{this.props.data.general.firstName}</h2>
      	<h3>{this.props.data.job.title}</h3>
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
