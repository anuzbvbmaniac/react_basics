import React from 'react';
import ReactDOM from 'react-dom';
import User from "./components/user";
import { MyProvider } from "./context";

/**
 * Context gives the ability to use a centralized place where we can store data, retrieve data, store functions,
 * and retrieve functions.
 * Context is not a HOOK. It's something we get with React.
 * To access the context, we can do it on a Class-Based Component and a Functional-Component. So, we get a HOOK. So we can
 * connect to the context and retrieve the data we want.
 */

const App = () => {
    return (
        <>
            <MyProvider>
                <User/>
            </MyProvider>
        </>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));
