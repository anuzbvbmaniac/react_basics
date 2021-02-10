import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./components/home";
import Header from "./components/header";
import PureComponent from "./components/pureComponent";

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <div className="container">
                <Switch>
                    <Route path={'/purecomp'} component={PureComponent}/>
                    <Route path={'/'} component={Home}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;
