import React from 'react';

const CountBtn = ({handleCount}) => {

    console.log('3 - Count Button Rendered!');

    return (
        <div>
            <button onClick={handleCount}>
                Add One to Count
            </button>
        </div>
    );
};

export default React.memo(CountBtn); // Memo listens for state/props change. And Rerender the component only if the state/props change.
