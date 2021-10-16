import React, { FC } from 'react';
import Container from './Container';
import briefcase from '../images/icons/briefcase-gradient.svg';
import info from '../images/icons/info-gradient.svg';
import github from '../images/icons/github-gradient.svg';
import { Link } from 'react-router-dom';

const Conclusion: FC = () => {
    return (
        <section className="conclusion-section">
            <div className="content">
                <h2 className="title">Ссылки</h2>
                <div className="container-links">
                    <Link to="/works" className="link my-works-link">
                        <Container className="my-works-container vertical">
                            <div className="main-block">
                                <img src={briefcase} alt="" className="icon" />
                                <h3 className="title">Мои работы</h3>
                            </div>
                            <div className="text-block">
                                <span className="text">Последние созданные<br />учебные проекты</span>
                            </div>
                        </Container>
                    </Link>
                    <Link to="/about" className="link about-me-link">
                        <Container className="about-me-container vertical">
                            <div className="main-block">
                                <img src={info} alt="" className="icon" />
                                <h3 className="title">Обо мне</h3>
                            </div>
                            <div className="text-block">
                                <span className="text">Подробнее о моем опыте<br />программирования</span>
                            </div>
                        </Container>
                    </Link>
                    <a className="link github-link" href="https://github.com/sanguinesadness" target="_blank" rel="noopener noreferrer">
                        <Container className="github-container horizontal">
                            <div className="main-block">
                                <img src={github} alt="" className="icon" />
                                <h3 className="title">Github</h3>
                            </div>
                            <div className="text-block">
                                <span className="text">Все мои более-менее<br />серьезные разработки<br />за все время</span>
                            </div>
                        </Container>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Conclusion;
