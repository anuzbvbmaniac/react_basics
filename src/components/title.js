import React from 'react';

const Title = ({title}) => {

    console.log('1 - Title Rendered!');

    return (
        <>
            <h1>{title}</h1>
        </>
    );
};

export default React.memo(Title); // Memo listens for state/props change. And Rerender the component only if the state/props change.
