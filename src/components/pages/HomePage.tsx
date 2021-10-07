import React, { FC } from 'react';
import Conclusion from '../Conclusion';
import Footer from '../Footer';
import Greeting from '../Greeting';
import Main from '../Main';
import Skills from '../Skills';

const HomePage: FC = () => {
    return (
        <div id="home-page">
            <Main/>
            <Greeting/>
            <Skills/>
            <Conclusion/>
            <Footer/>
        </div>
    )
}

export default HomePage;
