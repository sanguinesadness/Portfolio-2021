import React from 'react';
import { Element } from 'react-scroll';
import briefcase from '../../images/icons/briefcase-light.svg';
import Header from '../other/Header';
import { AiFillCaretDown } from 'react-icons/ai';
import { Link } from 'react-scroll';

const WorksCaption = () => {
    return (
        <Element name="caption" className="caption section">
            <div className="content-block">
                <Header />
                <div className="caption-body">
                    <img src={briefcase} alt="" className="icon" />
                    <h1 className="title">Мои работы</h1>
                    <span className="text">Проекты, созданные мной с целью обучения и практики.</span>
                </div>
                <div className="caption-footer">
                    <Link className="button scroll-button" to="works" smooth="easeInOutCubic">
                        <AiFillCaretDown className="icon" />
                    </Link>
                </div>
            </div>
        </Element>
    )
}

export default WorksCaption;
