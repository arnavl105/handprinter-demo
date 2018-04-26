import React, { Component } from 'react';
import { Row, Jumbotron, Alert, Button } from 'react-bootstrap';
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
		this.props.takeAction();
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

		const alert = (this.props.ideasTaken != 0 && this.props.ideasTaken % 5 == 0)? (
				<Alert bsStyle="danger" onDismiss={this.handleDismiss}>
					<p>You are on a roll! You have taken {this.props.ideasTaken} actions. Sign up to save your progress!</p>
            		<Button>Sign Up</Button>
       			</Alert>) : ""; 

		return(
			<div className="homepage">
				<h3 hidden={this.props.timerExp <= this.props.timerStart} className="timeString">You are net positive until: {dateExp.toLocaleDateString('en-US') + ", " + dateExp.toLocaleTimeString('en-US')}</h3>
				{ alert }

				<Row>
				<Jumbotron className="text-center"style={{ background: "url(" + treeBg + ")",
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
					<HomepageContent cards={cards}/>
				</Row>


			</div>
		);
	}
}

export default Homepage;