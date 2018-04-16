import React, { Component } from 'react';
import { Row, Jumbotron, Button } from 'react-bootstrap';
import ActionCards from './actionCards.js';
import treeBg from '../img/trees.jpg';


class Homepage extends Component {

	render(){

		console.log(this.props.timerExp);

		return(
			<div className="homepage">
				<h3>Time remaining: {this.props.timerExp - this.props.timerStart}</h3>
				<Row>
				<Jumbotron style={{ background: "url(" + treeBg + ")",
								backgroundSize: "auto",
								backgroundRepeat: "round" }}>
					<div className="jumboText" style={{ backgroundColor: "rgb(255, 255, 255, 0.75)" }}>
			          	<h2>Ensuring the</h2>
			          	<h2><b>world is better</b> off</h2>
			          	<h2><b>with us</b> than without us</h2>
			          	<br />
			          	<p>A <b>handprint</b> measures the <b>positive impacts</b> we can make, simply by changing the way we do things, at home, and at work.</p>
		          	</div>
				</Jumbotron>
				</Row>

				<Row>
					<ActionCards />
				</Row>
			</div>
		);
	}
}

export default Homepage;