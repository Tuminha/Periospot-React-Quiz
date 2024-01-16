import propTypes from 'prop-types';

// Define prop types
RadioQuestion.propTypes = {
    question: propTypes.string.isRequired,
    options: propTypes.arrayOf(propTypes.shape({
        id: propTypes.string.isRequired,
        value: propTypes.string.isRequired,
        label: propTypes.string.isRequired
    })).isRequired,
    userName: propTypes.string.isRequired,
    onSelectionChange: propTypes.func.isRequired,
    selectedOptions: propTypes.object.isRequired,
    className: propTypes.string.isRequired
};




function RadioQuestion({ question, options, userName, onSelectionChange, selectedOptions, className }) {
    return (
        <div className="center-content">
            <label>{question.replace('{userName}', userName)}</label>
            <div className="choices">
                {options.map(option => (
                    <div key={option.id} className={`choice-item ${selectedOptions[option.value] ? 'checked' : ''}`}>
                        <input 
                            type="radio" 
                            id={option.id} 
                            name="interest" 
                            value={option.value}
                            onChange={onSelectionChange} 
                            checked={selectedOptions[option.value] || false}
                            className="choice-item"
                        />
                        <label htmlFor={option.id}>{option.label}</label>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RadioQuestion;

