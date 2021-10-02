import React, { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';

const App: FC = () => {
    return (
        <BrowserRouter>
            <div className="area left-sided" >
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div className="area right-sided" >
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div id="content-wrapper">
                <Switch>
                    <Route path="/" exact component={HomePage} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App;
