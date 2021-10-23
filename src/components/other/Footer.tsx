import React, { FC } from 'react';
import telegram from '../../images/icons/telegram.svg';
import github from '../../images/icons/github.svg';
import vk from '../../images/icons/vk.svg';
import { Element } from 'react-scroll';

const Footer: FC = () => {
    return (
        <Element name="footer" className="footer">
            <div className="social-links">
                <a href="https://vk.com/id152544760" className="social-link" target="_blank" rel="noopener noreferrer">
                    <img src={vk} alt="" className="icon"/>
                </a>
                <a href="https://github.com/sanguinesadness" className="social-link" target="_blank" rel="noopener noreferrer">
                    <img src={github} alt="" className="icon"/>
                </a>
                <a href="https://t.me/sanguinesadness" className="social-link" target="_blank" rel="noopener noreferrer">
                    <img src={telegram} alt="" className="icon"/>
                </a>
            </div>
        </Element>
    )
}

export default Footer;
