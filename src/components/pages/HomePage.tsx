import React, { FC } from 'react';
import Greeting from '../Greeting';
import Main from '../Main';
import Skills from '../Skills';

const HomePage: FC = () => {
    return (
        <div id="home-page">
            <Main/>
            <Greeting/>
            <Skills/>
        </div>
    )
}

export default HomePage;
