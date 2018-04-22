import React, { Component } from 'react';
import { Row, Jumbotron } from 'react-bootstrap';
import ActionCards from './actionCards.js';
import treeBg from '../img/trees.jpg';
import HomepageContent from './homepageContent.js';


class Homepage extends Component {

	constructor(props){
		super(props);
		this.state={
			viewActions: this.randomActions(this.props.ideas)
		}
		this.takeIdea = this.takeIdea.bind(this);
	}

	randomActions(ideas){
		if(ideas.length==0){
			return [];
		}
		else{
			var ideasList = [];
			for(var i=0; i < 4; i++){
				var randIdea = ideas[Math.floor(Math.random()*ideas.length)];
				ideasList.push(randIdea)
			}
			return ideasList;
		}
	}

	takeIdea(time, index){
		this.props.addTime(time);
		var randIdea = this.props.ideas[Math.floor(Math.random()*this.props.ideas.length)];
		var newIdeas = this.state.viewActions;
		while(newIdeas.includes(randIdea)){
			randIdea = this.props.ideas[Math.floor(Math.random()*this.props.ideas.length)];
		}
		newIdeas[index] = randIdea;
		this.setState({ viewActions: newIdeas })
	}

	componentDidMount() {
		const timerInterval = setInterval( ()=> this.props.refreshTime(), 1000);
	}

	render(){


		if(this.state.viewActions){
			var cards = this.state.viewActions.map((idea, index) => {
				return (
	                <div className="idea-card" >
	                    <ActionCards
							takeIdea={this.takeIdea}
							idea={idea}
							index={index}
	                    />
	                </div>
	            );

			});
		}
		else {
			var cards = [];
		}


		const dateExp = new Date(this.props.timerExp);

		return(
			<div className="homepage">
				<h3 hidden={this.props.timerExp == this.props.timerStart} className="timeString">You are net positive until: {dateExp.toLocaleDateString('en-US') + ", " + dateExp.toLocaleTimeString('en-US')}</h3>
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

					{ cards }

				</Row>

				<Row>
					<HomepageContent />
				</Row>
			</div>
		);
	}
}

export default Homepage;