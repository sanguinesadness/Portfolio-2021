import React, { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Area from './components/Area';
import HomePage from './components/pages/HomePage';

const App: FC = () => {
    return (
        <BrowserRouter>
            <Area side="bottom" 
                  width="100vw" 
                  height="100vh" 
                  zIndex={-5} 
                  circleFlyDistance="100vh"
                  circlesNumber={20}
                  fixed/>
            <div id="content-wrapper">
                <Switch>
                    <Route path="/" exact component={HomePage} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App;
