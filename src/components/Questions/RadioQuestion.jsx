function RadioQuestion({ question, options, userName, onSelectionChange }) {
    return (
        <div className="center-content">
            <label>{question.replace('{userName}', userName)}</label>
            <div className="choices">
                {options.map(option => (
                    <div key={option.id}>
                        <input 
                            type="radio" 
                            id={option.id} 
                            name="interest" 
                            value={option.value}
                            onChange={onSelectionChange} 
                        />
                        <label htmlFor={option.id}>{option.label}</label>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RadioQuestion;
