import React, { FC } from 'react';
import { IProject } from '../types/project';
import Container from './Container';
import Tag from './UI/Tag';

interface IProjectCardProps {
    project: IProject;
}

const ProjectCard: FC<IProjectCardProps> = ({ project }) => {
    return (
        <div className="project-card">
            <Container padding="15px">
                <header className="card-header">
                    <Tag text={project.type} className="type-tag"/>
                    <div className="name__wrapper">
                        <h4 className="name">{project.name}</h4>
                    </div>
                </header>
                <div className="card-title-picture__wrapper">
                    <img className="title-picture" src={project.titlePicture} alt=""/>
                    <div className="platform-label">
                        <span className="text">{project.platform}</span>
                    </div>
                </div>
            </Container>
            <div className="card-tech-tags">
                {
                    project.techTags.map(tag => ( 
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

export default ProjectCard;
