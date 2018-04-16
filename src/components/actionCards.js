import React, { Component } from 'react';
import { Row } from 'react-bootstrap';


class ActionCards extends Component {

	render() {
		return(
	          <div className="container col-md-3">
	          <div className="card mb-4 box-shadow">

	          <div className="card-body">
	          		<span>{this.props.idea.name}</span>
	          </div>

	          <button type="button" className="btn btn-lg btn-outline-primary" onClick={ () => this.props.takeIdea(10*1000, this.props.index) }>+</button>

	        </div>
	        </div>
		);
	}

}

export default ActionCards;