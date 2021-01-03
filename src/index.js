import React, { useState, useCallback } from 'react';
import ReactDOM from 'react-dom';

import './styles/style.css'
import Title from "./components/title";
import CountBtn from "./components/countBtn";
import Age from "./components/age";
import AgeBtn from "./components/ageBtn";
import Count from "./components/count";

const App = () => {

    const [count, setCount] = useState(0);
    const [age, setAge] = useState(10);

    const incrementCount = useCallback(() => { // useCallback => Store Callback Function into memory / cache the function
        setCount(prevCount => prevCount + 1);
    }, []); // [count] => dependency,

    const incrementAge = useCallback(() => {
        setAge(prevAge => prevAge + 10);
    }, []);

    return (
        <>
            <Title title={'Anuz Pandey'}/>
            <Count count={count}/>
            <CountBtn handleCount={incrementCount}/>
            <hr/>
            <Age age={age}/>
            <AgeBtn handleAge={incrementAge}/>
        </>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));
