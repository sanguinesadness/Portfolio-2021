import React, { FC } from 'react';
import man_pointing from '../images/illustrations/man-pointing.svg';
import gear from '../images/icons/gear.svg';
import terminal from '../images/icons/terminal.svg';
import Dot from './UI/Dot';

const Greeting: FC = () => {
    return (
        <section className="greeting-section">
            <div className="content">
                <div className="info">
                    <h2 className="title">
                        <p>Привет,</p>
                        <p>меня зовут Рустам.</p>
                    </h2>
                    <Dot/>
                    <div className="text">
                        <p>Я начал интересоваться информационными технологиями в старших классах, и тогда точно понял — это <strong>мое</strong>.</p>
                        <p>С тех пор я изучил множество языков, фреймворков, подходов и методик разработки ПО и теперь готов применять свои знания.</p>
                    </div>
                </div>
                <div className="illustration">
                    <img className="gear" src={gear} alt=""/>
                    <img className="person" src={man_pointing} alt=""/>
                    <img className="terminal" src={terminal} alt=""/>
                </div>
            </div>
        </section>
    )
}

export default Greeting;
