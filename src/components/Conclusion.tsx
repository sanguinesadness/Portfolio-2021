import React, { FC } from 'react';
import Container from './Container';
import briefcase from '../images/icons/briefcase-gradient.svg';
import info from '../images/icons/info-gradient.svg';
import github from '../images/icons/github-gradient.svg';

const Conclusion: FC = () => {
    return (
        <section className="conclusion-section">
            <div className="content">
                <h2 className="title">Ссылки</h2>
                <div className="container-links">
                    <Container className="my-works-container vertical">
                        <img src={briefcase} alt="" className="icon"/>
                        <h3 className="title">Мои работы</h3>
                        <span className="text">Последние созданные учебные проекты</span>
                    </Container>
                    <Container className="about-me-container vertical">
                        <img src={info} alt="" className="icon"/>
                        <h3 className="title">Обо мне</h3>
                        <span className="text">Подробнее о моем опыте программирования</span>
                    </Container>
                    <Container className="github-container horizontal">
                        <img src={github} alt="" className="icon"/>
                        <h3 className="title">Github</h3>
                        <span className="text">Все мои более-менее серьезные разработки за все время</span>
                    </Container>
                </div>
            </div>
        </section>
    )
}

export default Conclusion;
