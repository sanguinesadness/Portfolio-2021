import React, { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Area from './components/UI/Area';
import HomePage from './components/pages/HomePage';
import MyWorksPage from './components/pages/MyWorksPage';
import ScrollToTop from './components/ScrollToTop';

const App: FC = () => {
    return (
        <BrowserRouter>
            <ScrollToTop/>
            <Area side="bottom" 
                  width="100vw" 
                  height="100vh" 
                  zIndex={-5} 
                  circleFlyDistance="100vh"
                  circlesNumber={10}
                  fixed/>
            <div id="content-wrapper">
                <div id="glass">
                    <Switch>
                        <Route path="/" exact component={HomePage} />
                        <Route path="/works" exact component={MyWorksPage}/>
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
