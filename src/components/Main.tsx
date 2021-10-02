import React, { FC } from 'react';
import rst_logo from '../images/icons/rst-logo.svg';
import rustam_faceless from '../images/icons/rustam-faceless.svg';
import paper_plane_regular from '../images/icons/paper-plane-regular.svg';
import briefcase_regular from '../images/icons/briefcase-regular.svg';
import info_regular from '../images/icons/info-regular.svg';
import shape_1 from '../images/shapes/shape-1.svg';
import shape_2 from '../images/shapes/shape-2.svg';
import Shape from './Shape';

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
                     src={rustam_faceless}
                     alt=""/>
            </div>
            <div className="navbar">
                <div className="navbar-buttons">
                    <span className="message-button navbar-button">
                        <img src={paper_plane_regular} alt=""/>
                    </span>
                    <span className="my-project-button navbar-button">
                        <img src={briefcase_regular} alt=""/>
                    </span>
                    <span className="info-button navbar-button">
                        <img src={info_regular} alt=""/>
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Main;
