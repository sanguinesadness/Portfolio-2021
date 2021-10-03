import React, { FC } from 'react';
import rst_logo from '../images/icons/rst-logo-2.svg';
import person from '../images/icons/person-1.svg';
import paper_plane from '../images/icons/paper-plane-light.svg';
import briefcase from '../images/icons/briefcase-light.svg';
import info from '../images/icons/info-light.svg';

const Main: FC = () => {
    return (
        <section className="main-section full-height">
            <header className="header">
                <div className="rst-logo__wrapper">
                    <img className="rst-logo"
                        src={rst_logo}
                        alt="" />
                </div>
            </header>
            <div className="info">
                <h2 className="title">Full-stack, Desktop Developer <span className="gray">&</span> Student </h2>
                <p className="text">Пишу код, создаю простые и красивые интерфейсы.<br/>Занимаюсь любимым делом.</p>
                <img className="face-icon"
                     src={person}
                     alt=""/>
            </div>
            <div className="navbar">
                <div className="navbar-buttons">
                    <span className="message-button navbar-button">
                        <img src={paper_plane} alt=""/>
                    </span>
                    <span className="my-project-button navbar-button">
                        <img src={briefcase} alt=""/>
                    </span>
                    <span className="info-button navbar-button">
                        <img src={info} alt=""/>
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Main;
