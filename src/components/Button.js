import React from 'react';

const Button = ({onClick, color, text}) => {
    return (
        <React.Fragment>
            <button onClick={onClick} className={`ui ${color} button`}>
                {text}
            </button>
        </React.Fragment>
    );
};

export default Button;