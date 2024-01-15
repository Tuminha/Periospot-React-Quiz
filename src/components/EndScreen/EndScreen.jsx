// Import the score result so we can render different endscreens depending on the score
import questionsData from '../Questions/questionsData';
import propTypes from 'prop-types';

// Define prop types
EndScreen.propTypes = {
    score: propTypes.number.isRequired
};


function EndScreen({ score }) {
    if (score < 3) {
        return (
            <div id="content-container" className="center-content">
                <div className="feedback-container" id="feedback-container">
                    <img src="images/ralph-flute.gif" alt="Celebration Gif" className="celebration-gif" id="celebration-gif"/>
                    <h1 id="congratulations-header">Oh, Dear 😅</h1>
                    <p id="score-paragraph">Oh, dear. You got <span className="score-highlight" id="score-highlight">{score}</span> of {questionsData.length - 1}. We have a lot of work to do 😅. But no worries, you&apos;ll see that with our recommendations you&apos;ll improve your score. Press the yellow button below to get the best content for you.</p>
                    <a href="https://periospot.com/your-score-was-lests-just-say-it-was-%F0%9F%98%85/" id="recommended-content-button" target="_blank" rel="noreferrer">Recommended Content</a>
                </div>
                <div id="restart-quiz-button-container">
                    <a href="index.html" id="restart-quiz-button">Restart Quiz</a>
                </div>
            </div>
        );
    }

    if (score >= 3 || score <= 5) {
        return (
            <div id="content-container" className="center-content">
                <div className="feedback-container" id="feedback-container">
                    <img src="images/ronaldo.gif" alt="Celebration Gif" className="celebration-gif" id="celebration-gif"/>
                    <h1 id="congratulations-header">Not bad 😉</h1>
                    <p id="score-paragraph">Not bad! You got <span className="score-highlight" id="score-highlight">{score}</span> out of {questionsData.length - 1}, so we strongly recommend you to follow the yellow button below where you will find content that will help you to achieve a higher score.</p>
                    <a href="https://periospot.com/your-score-was-good-but-not-excellent/" id="recommended-content-button" target="_blank" rel="noreferrer">Recommended Content</a>
                </div>
                <div id="restart-quiz-button-container">
                    <a href="index.html" id="restart-quiz-button">Restart Quiz</a>
                </div>
            </div>
        );
    } else {
        return (
            <div id="content-container" className="center-content">
                <div className="feedback-container" id="feedback-container">
                    <img src="images/dicaprio.gif" alt="Celebration Gif" className="celebration-gif" id="celebration-gif"/>
                    <h1 id="congratulations-header">OMG, You are really a master 👏</h1>
                    <p id="score-paragraph">You nailed with a <span className="score-highlight" id="score-highlight">{score}</span> out of {questionsData.length - 1}, nevertheless, in the yellow button below we have some content recommendations for you!</p>
                    <a href="https://periospot.com/congrats-🎉-you-are-a-periospot-master-👌/" id="recommended-content-button" target="_blank" rel="noreferrer">Recommended Content</a>
                </div>
                <div id="restart-quiz-button-container">
                    <a href="index.html" id="restart-quiz-button">Restart Quiz</a>
                </div>
            </div>
        );
    }
}

export default EndScreen;