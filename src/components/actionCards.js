import React, { Component } from 'react';
import { Row, Panel, Button } from 'react-bootstrap';


class ActionCards extends Component {

	render() {

		return(
	          <div className="container col-md-3">
	          <Panel>

	          <div className="card-body">
	          		<h4>{this.props.idea.name}</h4>
	          </div>

	          <Button block bsSize="small" onClick={ () => this.props.takeIdea(this.props.idea.time, this.props.index) }>+</Button>

	        </Panel>
	        </div>
		);
	}

}

export default ActionCards;