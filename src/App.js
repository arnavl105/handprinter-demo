import React, { Component } from 'react';
import './App.css';
import logo from './img/logo_handprint.png'
import Homepage from './components/homepage.js'
import { connect } from 'react-redux';
import { takeAction, addIdea } from './actions/actionIdea';
import { addTime, refreshTime } from './actions/timer';


class App extends Component {
  render() {

    return (
      <div className="App">

        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous" />
        <img src={logo} alt="logo"/>
        <a style={{marginTop: "5%", float: "right"}}>Join Handprinter</a>
        <hr/>

        <Homepage {...this.props} />
        
        <hr/>
        <div id="footer">

          <div id="footer_col1">

          <span>Copyright 2018 by New Earth</span>

          <p class="footer_title">Contact us:</p>

          <p class="footer_content">

          Tel: (207) 351-1897</p>

          </div>


      </div>

      </div>

    );
  }
}

const mapStateToProps = (state) => ({

  ideas: state.actionIdeas.ideas,
  ideasTaken: state.actionIdeas.ideasTaken,
  timerStart: state.timer.startTime,
  timerExp: state.timer.expTime

});

const mapDispatchToProps = (dispatch) => ({

  takeAction: () => {dispatch(takeAction())},
  addIdea: (idea) => { dispatch(addIdea(idea)) },
  addTime: (time) => { dispatch(addTime(time)) },
  refreshTime: () => { dispatch(refreshTime()) }

});

export default connect(mapStateToProps, mapDispatchToProps)(App);
