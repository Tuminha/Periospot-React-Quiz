import { Component } from 'react';
import './App.css';
import User from './components/User/User';
import Question from './components/Questions/Questions';
import questionsData from './components/Questions/questionsData';
import EndScreen from './components/EndScreen/EndScreen';
import Footer from './components/Footer/Footer';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showStartScreen: true,
            currentQuestionIndex: 0,
            userName: '',
            score: 0,
            isAnswered: false,
            showResults: false,
            totalQuestions: questionsData.length - 1,
        };
    }

    startQuiz = () => {
        this.setState({ showStartScreen: false, currentQuestionIndex: -1 });
    };

    handleUserName = (name) => {
        this.setState({ userName: name, currentQuestionIndex: 0 }); // Move to the first question
    };

    onCorrectAnswer = () => {
      console.log('onCorrectAnswer called, current score:', this.state.score);
      this.setState(prevState => {
          console.log('Incrementing score from', prevState.score, 'to', prevState.score + 1);
          return { score: prevState.score + 1 };
      });
  };

    handleQuestionSubmit = (userAnswer, isCorrect) => {
      if (this.state.isAnswered) {
          this.setState(prevState => {
              const isLastQuestion = prevState.currentQuestionIndex === questionsData.length - 1;
  
              const newState = isLastQuestion ? {
                  showResults: true,
                  isAnswered: false, // This might be unnecessary since we're showing results
              } : {
                  currentQuestionIndex: prevState.currentQuestionIndex + 1,
                  isAnswered: false, // Reset for the next question
              };
  
              return newState;
          });
  
          if (isCorrect) {
              this.onCorrectAnswer(); // Only increment score here if the answer is correct
          }
      } else {
          alert('Please select an answer');
      }
  };

    handleAnswerSelection = (isAnswered) => {
        this.setState({isAnswered});
    }


    checkIfAnswerIsCorrect = (currentQuestion, userAnswer) => {
        // Implement the actual logic to check if the answer is correct
        // This will vary based on your question and answer structure
        return currentQuestion.correctAnswer === userAnswer;
    };

    onPrevStep = () => {
        this.setState(prevState => {
            return { currentQuestionIndex: prevState.currentQuestionIndex - 1 };
        });
    };

    onNextStep = () => {
        this.setState(prevState => {
            return { currentQuestionIndex: prevState.currentQuestionIndex + 1 };
        });
    };
    

    render() {
        const { showStartScreen, currentQuestionIndex, userName, score, showResults, isAnswered } = this.state;

        // Show the endscreen depending on the score
        if (showResults) {
            return <EndScreen score={score} />;
        }

        return (
            <div className="App">
                {showStartScreen ? (
                    <>
                        <h1> Periospot Quiz App</h1>
                        <div className="logo-image">
                        <img src="/public/images/Logo_blanco-01.png" alt="Periospot Logo" />
                        </div>
                        <p>Let&apos;s see how much you know about Implant Dentistry!</p>
                        <button className="start-button" onClick={this.startQuiz}>Let&apos;s start!</button>
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
                        isAnswered={isAnswered}
                        score={this.state.score}
                    />
                )}
                <Footer 
                currentStep={currentQuestionIndex} 
                totalSteps={questionsData.length} 
                onPrevStep={this.onPrevStep}
                onNextStep={this.onNextStep}
                />
            </div>
        );
    }
}

export default App;
