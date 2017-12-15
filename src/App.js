import React, { Component } from 'react';
import './reset.css';
import './App.css';
import logo from './assets/logo.png';
import ShelveChoices from './components/ShelveChoices';
import { Link, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>SHELFIE</h1>
        </header>
        <p className="App-intro">
          <ShelveChoices />
        </p>
      </div>
    );
  }
}

export default App;

