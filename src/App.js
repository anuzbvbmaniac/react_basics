import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/home";
import Header from "./components/header";

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <div className="container">
                <Switch>
                    <Route path={'/'} component={Home}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;
