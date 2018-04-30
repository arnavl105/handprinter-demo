import React, { Component } from 'react';
import { Row, Panel, Button } from 'react-bootstrap';


class ActionCards extends Component {


	 constructor(props, context) {
	    super(props, context);

	    this.state = {
	      open: false
	    };
	  }

	render() {

		const infoText = (this.props.idea.text) ? this.props.idea.text : ""; 

		return(
	          <div className="container col-md-3">
	          <Panel className="actionCard"expanded={this.state.open}>

	          <div className="card-body">
	          		<h4>{this.props.idea.name}</h4>
	          </div>


	       	<Button onClick={() => this.setState({ open: !this.state.open })}>+</Button>

	        <Panel.Collapse>

	        	<p>{ infoText }</p>
	        	<p>This action will bring you net positivity for {this.props.idea.time}</p>

	        </Panel.Collapse>

	        </Panel>
	        </div>
		);
	}

}

export default ActionCards;