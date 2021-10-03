import React, { FC, useRef, useState } from 'react';
import Container from './Container';
import ProgressBar from './ProgressBar';
import Switch from './Switch';

export interface ISkillItem {
    logo: string;
    name: string;
    progress: number;
}

export interface ISkillCategory {
    name: string;
    items: ISkillItem[];
}

interface ISkillBlockProps {
    captionLogoSrc: string;
    captionText: string;
    categories: ISkillCategory[];
}

const SkillBlock: FC<ISkillBlockProps> = ({ captionLogoSrc, captionText, categories }) => {
    const [activeObject, setActiveObject] = useState<"name" | "progress">("name");

    return (
        <Container className="skill-block">
            <div className="skill-block__header">
                <div className="caption">
                    <img className="caption-icon" src={captionLogoSrc} alt=""/>
                    <span className="caption-text">{captionText}</span>
                </div>
                <div className="progress">
                    <Switch title="Прогресс"
                            action1={() => setActiveObject("progress")}
                            action2={() => setActiveObject("name")}
                            color="#5B49F5"/>
                </div>
            </div>
            <div className="skill-block__body">
                {
                    categories.map(category => 
                        <div key={category.name} className="skill-category">
                            <span className="title">{category.name}</span>
                            <div className="skill-items">
                                {
                                    category.items.map(item =>
                                        <div key={item.name} className="skill-item">
                                            <img className="skill-item__icon" src={item.logo} alt="" />

                                            <div className="skill-item__name-progress">
                                                {
                                                    activeObject === "name" ?
                                                        <span className="name">{item.name}</span>
                                                        :
                                                        <ProgressBar className="progress" value={item.progress} />
                                                }
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    )
                }
            </div>
        </Container>
    )
}

export default SkillBlock