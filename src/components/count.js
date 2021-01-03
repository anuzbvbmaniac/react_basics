import React from 'react';

const Count = ({count}) => {

    console.log('2 - Count Rendered!');

    return (
        <div>
            Count is : {count}
        </div>
    );
};

export default React.memo(Count); // Memo listens for state/props change. And Rerender the component only if the state/props change.
