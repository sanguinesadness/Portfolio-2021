import React from 'react';
import { FC } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

// scroll to top on page switch
const ScrollToTop: FC = () => {
    const location = useLocation();

    useEffect(() => {
        setTimeout(() => scroll.scrollToTop({ smooth: false, duration: 0 }));
    }, [location]);

    return <></>;
}

export default ScrollToTop;