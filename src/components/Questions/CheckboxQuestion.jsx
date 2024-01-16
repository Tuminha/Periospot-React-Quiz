import React from 'react';

// Props validation
import propTypes from 'prop-types';


// Define prop types
CheckboxQuestion.propTypes = {
    question: propTypes.string.isRequired,
    options: propTypes.arrayOf(propTypes.shape({
        id: propTypes.string.isRequired,
        value: propTypes.string.isRequired,
        label: propTypes.string.isRequired,
    })).isRequired,
    userName: propTypes.string.isRequired,
    onSelectionChange: propTypes.func.isRequired,
    className: propTypes.string,
    selectedOptions: propTypes.object.isRequired,
};

function CheckboxQuestion({ question, options, userName, onSelectionChange, className, selectedOptions }) {
    return (
        <div className="center-content">
            <label>{question.replace('{userName}', userName)}</label>
            <div className="choices">
                {options.map(option => (
                    <div key={option.id} className={`choice-item ${selectedOptions[option.value] ? 'checked' : ''}`}>
                        <input 
                            type="checkbox" 
                            id={option.id} 
                            name="interest" 
                            value={option.value}
                            onChange={onSelectionChange} 
                            checked={selectedOptions[option.value] || false} 
                        />
                        <label htmlFor={option.id}>{option.label}</label>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CheckboxQuestion;
