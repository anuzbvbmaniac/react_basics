import React from 'react';

const Age = ({age}) => {

    console.log('4 - Age Rendered!');

    return (
        <div>
            Age is : {age}
        </div>
    );
};

export default React.memo(Age); // Memo listens for state/props change. And Rerender the component only if the state/props change.
