import React, { FC } from 'react';
import ProjectCards from './ProjectCards';
import { myProjects } from '../data/projects';
import { Link, Element } from 'react-scroll';

const Projects: FC = () => {
    return (
        <Element name="my-projects" className="projects-section">
            <ProjectCards projects={myProjects}/>
        </Element>
    )
}

export default Projects;
