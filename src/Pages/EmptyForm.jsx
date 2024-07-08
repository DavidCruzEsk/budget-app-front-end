import React from 'react';
import { useNavigate } from 'react-router-dom';

const EmptyForm = () => {
    const navigate = useNavigate();

    return (
        <div className='empty-div'>
            <h1 className='empty-header'>CANNOT SEND EMPTY FORM!</h1>
            <p className='edit-p'>Press the back button to return to the Edit page </p>
            <button className='button-inEmpty' onClick={() => navigate(- 1)}>Back</button>
        </div>
    );
};

export default EmptyForm;