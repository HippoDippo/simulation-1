// ID: 37E-1 - A whole lotta imports used below.
import React, { Component } from 'react';
import './reset.css';
import './App.css';
import logo from './assets/logo.png';
import ShelveChoices from './components/ShelveChoices';

class App extends Component {
  render() {
    return (
      // ID: 36G - JSX used here and the ShelveChoices component below.
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