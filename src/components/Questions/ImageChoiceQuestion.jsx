import { useState } from 'react';


function ImageChoiceQuestion({ question, options, userName, onSelectionChange }) {
  return (
    <div className="center-content">
      <label>{question.replace('{userName}', userName)}</label>
      <div className="image-choices">
        {options.map((option) => (
          <div key={option.id} className="image-choice">
            <input
              type="radio" // Use radio buttons for single selection
              id={option.id}
              name="imageChoice" // All inputs should have the same name
              value={option.value}
              onChange={onSelectionChange}
              style={{ display: 'none' }} // Hide the radio button
            />
            <label htmlFor={option.id}>
              <div className="image-and-paragraph">
                <img src={option.image} alt={option.label} />
                <p>{option.label}</p>
              </div>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageChoiceQuestion;