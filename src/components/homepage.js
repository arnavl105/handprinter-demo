import React, { Component } from 'react';
import { Row, Jumbotron } from 'react-bootstrap';
import ActionCards from './actionCards.js';
import treeBg from '../img/trees.jpg';


class Homepage extends Component {

	componentDidMount() {
		const timerInterval = setInterval( ()=> this.props.refreshTime(), 1000);
	}

	render(){

		return(
			<div className="homepage">
				<h3>Time remaining: {Math.round((this.props.timerExp - this.props.timerStart)/1000, 1000)}</h3>
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
					<ActionCards addTime={this.props.addTime}/>
				</Row>
			</div>
		);
	}
}

export default Homepage;