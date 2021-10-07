import React, { FC } from 'react';
import person from '../images/icons/person-6.svg';
import Header from './Header';
import Navbar from './Navbar';

const Main: FC = () => {
    return (
        <section className="main-section">
            <Header/>
            <div className="info">
                <h2 className="title">Full-stack, Desktop Developer <span className="gray">&</span> Student </h2>
                <p className="text">Пишу код, создаю простые и красивые интерфейсы.<br/>Занимаюсь любимым делом.</p>
                <img className="face-icon"
                     src={person}
                     alt=""/>
            </div>
            <Navbar/>
        </section>
    )
}

export default Main;
