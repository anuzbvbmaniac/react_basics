import React from 'react';

const AgeBtn = ({handleAge}) => {

    console.log('5 - Age Button Rendered!');

    return (
        <div>
            <button onClick={handleAge}>
                Add One to Age
            </button>
        </div>
    );
};

export default React.memo(AgeBtn); // Memo listens for state/props change. And Rerender the component only if the state/props change.
