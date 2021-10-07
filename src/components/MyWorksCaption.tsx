import React, { useRef } from 'react';
import briefcase from '../images/icons/briefcase-light.svg';
import Header from './Header';
import ScrollButton from './UI/ScrollButton';

const MyWorksCaption = () => {
    const nextSectionRef = useRef<HTMLDivElement>(null);

    return (
        <section className="caption-section">
            <Header/>
            <div className="content">
                <img src={briefcase} alt="" className="icon" />
                <h1 className="title">Мои работы</h1>
                <span className="text" ref={nextSectionRef}>Проекты, созданные мной с целью обучения и практики.</span>
            </div>
            <div className="scroll-button__wrapper">
                <ScrollButton element="my-projects"/>
            </div>
        </section>
    )
}

export default MyWorksCaption;
