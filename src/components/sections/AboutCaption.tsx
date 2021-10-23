import React, { FC } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { Element, Link } from 'react-scroll';
import Header from '../other/Header';
import info from '../../images/icons/info-light.svg';

const AboutCaption: FC = () => {
    return (
        <Element name="caption" className="caption section">
            <div className="content-block">
                <Header/>
                <div className="caption-body">
                    <img className="icon" src={info} alt="" />
                    <h1 className="title">Обо мне</h1>
                    <span className="text">История моего становления разработчиком.</span>
                </div>
                <div className="caption-footer">
                    <Link className="button scroll-button" to="story" smooth="easeInOutCubic">
                        <AiFillCaretDown className="icon" />
                    </Link>
                </div>
            </div>
        </Element>
    )
}

export default AboutCaption
