import React, { FC } from 'react';
import { Element } from 'react-scroll';
import person from '../../images/icons/person-6.svg';
import Header from '../other/Header';
import Navbar from '../other/Navbar';

const Main: FC = () => {
    return (
        <Element name="caption" className="caption section">
            <div className="content-block">
                <Header />
                <div className="caption-body">
                    <h2 className="title">Full-stack, Desktop Developer <span className="gray">&</span> Student </h2>
                    <p className="text">Пишу код, создаю простые и красивые интерфейсы.<br />Занимаюсь любимым делом.</p>
                    <img className="face-icon"
                        src={person}
                        alt="" />
                </div>
                <div className="caption-footer">
                    <Navbar />
                </div>
            </div>
        </Element>
    )
}

export default Main;
