import React, { FC } from 'react';
import { BrowserRouter} from 'react-router-dom';
import Area from './components/UI/Area';
import ScrollToTop from './components/other/ScrollToTop';
import PageSwitch from './components/other/PageSwitch';
import { Sides } from './types/side';

const App: FC = () => {
    return (
        <BrowserRouter>
            <ScrollToTop/>
            <Area side={Sides.BOTTOM}
                  width="100vw" 
                  height="100vh" 
                  zIndex={-5} 
                  circleFlyDistance="100vh"
                  circlesNumber={10}
                  fixed/>
            <PageSwitch/>
        </BrowserRouter>
    )
}

export default App;
