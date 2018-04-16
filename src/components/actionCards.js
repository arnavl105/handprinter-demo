import React, { Component } from 'react';
import { Row } from 'react-bootstrap';


class ActionCards extends Component {

	render() {
		return(
			<Row>
	          <div className="container col-md-3">
	          <div className="card mb-4 box-shadow">

	          <div className="card-body">
	          		<span>Recycle Paper and Cardboard</span>
	          </div>

	          <button type="button" className="btn btn-lg btn-outline-primary" onClick={ () => this.props.addTime(10*1000) }>+</button>

	        </div>
	        </div>

	       	<div className="container col-md-3">
	          <div className="card mb-4 box-shadow">

	          <div className="card-body">
	          		<span>Choose a Veggie Burger</span>
	          </div>

	          <button type="button" className="btn btn-lg btn-outline-primary" onClick={ () => this.props.addTime(5*1000) }>+</button>

	        </div>
	        </div>
	     </Row>
		);
	}

}

export default ActionCards;