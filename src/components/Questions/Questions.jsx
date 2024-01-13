import { useState } from 'react';
import propTypes from 'prop-types';
import CheckboxQuestion from './CheckboxQuestion';
import RadioQuestion from './RadioQuestion';
import ImageChoiceQuestion from './ImageChoiceQuestion';
import questionsData from './questionsData';


// Questions prop types
Question.propTypes = {
    currentQuestionIndex: propTypes.number.isRequired,  // The index of the current question    
    userName: propTypes.string.isRequired,
    onQuestionSubmit: propTypes.func.isRequired,
    onCorrectAnswer: propTypes.func.isRequired,  // Function to call when the answer is correct
    onAnswerSelection: propTypes.func.isRequired,  // Function to call when the answer is selected
    isAnswered: propTypes.bool.isRequired  // Boolean to check if the question is answered
};

// Define prop types
function Question({ currentQuestionIndex, userName, onQuestionSubmit, onCorrectAnswer, onAnswerSelection }) {
    const [selectedOptions, setSelectedOptions] = useState({});

    const handleSelectionChange = (event) => {
        const { value, checked, type } = event.target;
        if (type === 'checkbox') {
            setSelectedOptions({
                ...selectedOptions,
                [value]: checked
            });
        } else if (type === 'radio') {
            setSelectedOptions({
                ...selectedOptions,
                // Assuming you want to store the selected value under a generic key like 'selected'
                selected: value
            });
        } else {
            // Handle for image choice question
            setSelectedOptions({
                ...selectedOptions,
                selected: value
            });
        }
        onAnswerSelection(true);
    };



    const handleSubmit = (event) => {
        event.preventDefault();
    
        // Check if the answer is correct
        let isCorrect = false;
        if (currentQuestion.type === 'checkbox') {
            // For checkbox, all selected options must be correct and all correct options must be selected
            const correctAnswers = new Set(currentQuestion.correctAnswer);
            const selectedAnswers = Object.keys(selectedOptions).filter(key => selectedOptions[key]);
            isCorrect = selectedAnswers.length === correctAnswers.size &&
                        selectedAnswers.every(answer => correctAnswers.has(answer));
        } else {
            // For radio and image choice, the selected option must match the correct answer
            isCorrect = selectedOptions.selected === currentQuestion.correctAnswer;
        }

        if (isCorrect) {
            onCorrectAnswer(); // Call a new prop function to increment the score
        }

        onQuestionSubmit(selectedOptions);
        
        // Check if everything is ok
        if (isCorrect && selectedOptions) {
            console.log("Everything is ok");
        } else {
            console.log("Something went wrong");
        }
    };

    // Get the current question based on the index
    const currentQuestion = questionsData[currentQuestionIndex];

    return (
        <form onSubmit={handleSubmit} className="center-content">
            {currentQuestion.type === 'checkbox' ? (
                <CheckboxQuestion 
                    key={currentQuestion.questionText}
                    question={currentQuestion.questionText.replace('{userName}', userName)} // Replace placeholder with actual userName
                    options={currentQuestion.options}
                    userName={userName}
                    onSelectionChange={handleSelectionChange}
                />
            ) : currentQuestion.type === 'radio' ? (
                <RadioQuestion 
                    key={currentQuestion.questionText}
                    question={currentQuestion.questionText.replace('{userName}', userName)} // Replace placeholder with actual userName
                    options={currentQuestion.options}
                    userName={userName}
                    onSelectionChange={handleSelectionChange}
                />
            ) : (
                <ImageChoiceQuestion 
                    key={currentQuestion.questionText}
                    question={currentQuestion.questionText.replace('{userName}', userName)} // Replace placeholder with actual userName
                    options={currentQuestion.options}
                    userName={userName}
                    onSelectionChange={handleSelectionChange}
                />
            )}
            <input type="submit" id="submitQuizForm" value="Submit" />
        </form>
    );
}

export default Question;

