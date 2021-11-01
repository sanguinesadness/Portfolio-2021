import React, { FC } from 'react';
import { IWork } from '../../types/work';
import Container from '../UI/Container';
import Tag from '../UI/Tag';
import { useMediaQuery } from 'react-responsive';

interface IWorkCardProps {
    work: IWork;
}

const WorkCard: FC<IWorkCardProps> = ({ work }) => {
    const isMobileScreen = useMediaQuery({ maxWidth: 450 });

    return (
        <div className="work-card">
            <a href={work.link} target="_blank" rel="noopener noreferrer">
                <Container padding="15px">
                    <header className="card-header">
                        <Tag text={work.type} className="type-tag"/>
                        <div className="name__wrapper">
                            <h4 className="name">
                                {
                                    isMobileScreen && work.shortName ? 
                                        <>{work.shortName}</>
                                    :
                                        <>{work.name}</>
                                }
                            </h4>
                        </div>
                    </header>
                    <div className="card-title-picture__wrapper">
                        <img className="title-picture" src={work.titlePicture} alt=""/>
                        <div className="platform-label">
                            <span className="text">{work.platform}</span>
                        </div>
                    </div>
                </Container>
            </a>
            <div className="card-tech-tags">
                {
                    work.techTags.map(tag => ( 
                        <Tag className="tech-tag" 
                             key={tag} 
                             text={tag} 
                             padding="7px 15px"
                             margin="7px"/>)
                    )
                }
            </div>
        </div>
    )
}

export default WorkCard;
