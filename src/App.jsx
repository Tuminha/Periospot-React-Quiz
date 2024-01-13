import React, { Component } from 'react';
import './App.css';
import User from './components/User/User';
import Question from './components/Questions/Questions';
import questionsData from './components/Questions/questionsData';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showStartScreen: true,
            currentQuestionIndex: 0,
            userName: '',
            score: 0,
            isAnswered: false,
            isCorrect: false,
            showResults: false
        };
    }

    startQuiz = () => {
        this.setState({ showStartScreen: false, currentQuestionIndex: -1 });
    };

    handleUserName = (name) => {
        this.setState({ userName: name, currentQuestionIndex: 0 }); // Move to the first question
    };

    handleQuestionSubmit = () => {
      // First, check if the question has been answered
      if (this.state.isAnswered) {
          this.setState(prevState => {
              // Check if the current question is the last one
              const isLastQuestion = prevState.currentQuestionIndex === questionsData.length - 1;
  
              if (isLastQuestion) {
                  // If it's the last question, show results
                  return {
                      showResults: true,
                      isAnswered: false // Reset isAnswered for the next quiz or if the quiz is restarted
                  };
              } else {
                  // If it's not the last question, go to the next question and reset isAnswered
                  return {
                      currentQuestionIndex: prevState.currentQuestionIndex + 1,
                      isAnswered: false
                  };
              }
          });
      } else {
          // Handle the case where the user doesn't answer the question by showing an alert
          alert('Please select an answer');
      }
  };

    handleAnswerSelection = (isAnswered) => {
      this.setState({isAnswered});
    }

    onCorrectAnswer = () => {
      this.setState((prevState) => ({score: prevState.score + 1}));
    }

    render() {
        const { showStartScreen, currentQuestionIndex, userName, score, showResults } = this.state;

        if (showResults) {
          // Render the results component when the quiz is completed
          return (
              <div className="App">
                  <h1>Results</h1>
                  <p>{userName}, you scored {score} out of {questionsData.length}.</p>
              </div>
          );  
        }

        return (
            <div className="App">
                {showStartScreen ? (
                    <>
                        <h1> Periospot Quiz App</h1>
                        <div className="logo-image">
                        <img src="/public/images/Logo_blanco-01.png" alt="Periospot Logo" />
                        </div>
                        <p>Let's see how much you know about Implant Dentistry!</p>
                        <button onClick={this.startQuiz}>Let's start!</button>
                    </>
                ) : currentQuestionIndex === -1 ? (
                    <User onNameSubmit={this.handleUserName} />
                ) : (
                    <Question
                        currentQuestionIndex={currentQuestionIndex}
                        userName={userName}
                        onQuestionSubmit={this.handleQuestionSubmit}
                        onCorrectAnswer={this.onCorrectAnswer}
                        onAnswerSelection={this.handleAnswerSelection}
                    />
                )}
            </div>
        );
    }
}

export default App;
