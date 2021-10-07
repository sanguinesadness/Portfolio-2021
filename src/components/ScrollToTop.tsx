import React from 'react';
import { FC } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

// scroll to top on page switch
const ScrollToTop: FC = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        scroll.scrollToTop({
            smooth: "linear",
            duration: 0
        });
    }, [pathname]);

    return null;
}

export default ScrollToTop;