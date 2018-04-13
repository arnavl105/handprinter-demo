import React, { Component } from 'react';
import './App.css';
import logo from './img/logo_handprint.png'
import Homepage from './components/homepage.js'

class App extends Component {
  render() {
    return (
      <div className="App">

        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous" />
        <img src={logo} alt="logo"/>
        <hr/>

        <Homepage />
        
        <hr/>
        <p>Footer goes here</p>
      </div>
    );
  }
}

export default App;
