import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// COMPONENTS
import Header from './components/header';
import Home from './components/home';
import Movie from "./components/movie";

const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <div className="container">
                <Switch>
                    <Route path="/movie" component={Movie}></Route>
                    <Route path="/" component={Home}></Route>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App;
