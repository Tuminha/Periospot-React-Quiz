import { useState } from 'react';
import propTypes from 'prop-types';

function User({ onNameSubmit }) {
    const [name, setName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevents page refresh
        onNameSubmit(name); // Pass the name back to the parent component
    };

// Define prop types
User.propTypes = {
    onNameSubmit: propTypes.func.isRequired,
};

    return (
        <form onSubmit={handleSubmit} className="center-content">
            <label htmlFor="firstName">2. Before we start, can we get your first name?</label>
            <input 
                type="text" 
                id="firstName" 
                name="firstName" 
                placeholder="Type your answer here..."
                value={name}
                onChange={(e) => setName(e.target.value)} // Update state on input change
            />
            <br /><br />
            <input type="submit" id="submitQuizForm" value="Submit" />
        </form>
    );
}

export default User;
