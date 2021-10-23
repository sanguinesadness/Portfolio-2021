import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import { TransitionGroup, Transition } from 'react-transition-group';
import Footer from './Footer';
import { animateTransition } from '../../transitions/animate';
import Conclusion from '../sections/Conclusion';
import Greeting from '../sections/Greeting';
import HomeCaption from '../sections/HomeCaption';
import Skills from '../sections/Skills';
import WorksCaption from '../sections/WorksCaption';
import Works from '../sections/Works';
import Page from './Page';
import BackToPageButton from './BackToPageButton';
import ScrollButtons from './ScrollButtons';
import AboutCaption from '../sections/AboutCaption';
import Story from '../sections/Story';

const PageSwitch: FC = () => {
    return (
        <div className="page-switch">
            <Route render={({ location }) => {
                const { pathname, key } = location;

                return (
                    <TransitionGroup component={null}>
                        <Transition key={key}
                            onEnter={(node: HTMLElement) => animateTransition(pathname, node.children)}
                            timeout={{ enter: 300, exit: 0 }}>
                            <Switch>
                                <Route path="/" exact render={() =>
                                    <Page className="home">
                                        <HomeCaption />
                                        <Greeting />
                                        <Skills />
                                        <Conclusion />
                                        <ScrollButtons elements={["caption", "greeting", "skills", "conclusion"]} />
                                    </Page>
                                } />
                                <Route path="/works" exact render={() =>
                                    <Page className="works">
                                        <BackToPageButton />
                                        <WorksCaption />
                                        <Works />
                                        <ScrollButtons elements={["caption", "works"]} />
                                    </Page>
                                } />
                                <Route path="/about" exact render={() => 
                                    <Page className="about">
                                        <BackToPageButton/>
                                        <AboutCaption/>
                                        <Story/>
                                        <ScrollButtons elements={["caption", "story"]} />
                                    </Page>
                                }/>
                            </Switch>
                        </Transition>
                    </TransitionGroup>
                )
            }} />
            <Footer />
        </div>
    )
}

export default PageSwitch
