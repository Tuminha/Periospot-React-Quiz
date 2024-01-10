import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="./assets/Logo_blanco-01.png" className="App-logo" alt="logo" />
          <h1 className="App-title">Periospot</h1>
        </header>
        <p className="App-intro">
          Do you want to test your skills?
        </p>
        <button onClick={this.startQuiz}>Let's start!</button>
        <p className="instruction">Press Enter &rarr;</p>
      </div>
    );
  }

  startQuiz() {
    // Implement the startQuiz function here
  }
}

export default App;
