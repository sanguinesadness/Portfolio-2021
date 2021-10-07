import React, { FC } from 'react';
import { IProject } from '../types/project';
import ProjectCard from './ProjectCard';

interface IProjectCardsProps {
    projects: IProject[];
}

const ProjectCards: FC<IProjectCardsProps> = ({ projects }) => {
    return (
        <div className="project-cards">
            {
                projects.map(project => 
                    <ProjectCard key={project.id} project={project}/>
                )
            }
        </div>
    )
}

export default ProjectCards;
