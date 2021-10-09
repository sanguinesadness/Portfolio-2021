import React, { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Area from './components/UI/Area';
import HomePage from './components/pages/HomePage';
import MyWorksPage from './components/pages/MyWorksPage';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import { TransitionGroup, Transition } from 'react-transition-group';
import { animateTransition } from './transitions/animate';

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
                    <Header />
                    <Route render={({ location }) => {
                        const { pathname, key } = location;

                        return (
                            <TransitionGroup component={null}>
                                <Transition key={key} 
                                            onEnter={(node, appears) => animateTransition(pathname, node, appears)} 
                                            timeout={{ enter: 300, exit: 0 }}>
                                    <Switch>
                                        <Route path="/" exact component={HomePage} />
                                        <Route path="/works" exact component={MyWorksPage} />
                                    </Switch>
                                </Transition>
                            </TransitionGroup>
                        )
                    }}/>
                    <Footer />
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
