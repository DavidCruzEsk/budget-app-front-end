import React from 'react';
import { useNavigate } from 'react-router-dom';

const EmptyForm = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>CANNOT SEND EMPTY FORM!</h1>
            <p>Press the back button to return to the Edit page </p>
            <button onClick={() => navigate(- 1)}>Back</button>
        </div>
    );
};

export default EmptyForm;