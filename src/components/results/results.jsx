import propTypes from 'prop-types';

function Results({ score }) {
    return (
        <div className="results-container">
            <h1>Your Score</h1>
            <p>{score}</p>
            {/* You can add more details about the results here */}
        </div>
    );
}

Results.propTypes = {
    score: propTypes.number.isRequired
};

export default Results;