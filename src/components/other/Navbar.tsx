import React, { FC } from 'react';
import briefcase from '../../images/icons/briefcase-gradient-solid.svg';
import info from '../../images/icons/info-gradient-solid.svg';
import github from '../../images/icons/github-gradient.svg';
import Container from '../UI/Container';
import { Link } from 'react-router-dom';
import settings from '../../../package.json';

const appGitName = settings['git-name'];

const Navbar: FC = () => {
    return (
        <div className="navbar">
            <Container className="navbar-buttons" padding="15px 30px">
                <Link to={`/${appGitName}/works`} className="my-project-button navbar-button">
                    <img src={briefcase} alt="" />
                </Link>
                <a className="github-button navbar-button" href="https://github.com/sanguinesadness" target="_blank" rel="noopener noreferrer">
                    <img src={github} alt="" />
                </a>
                <Link to={`/${appGitName}/about`} className="info-button navbar-button">
                    <img src={info} alt="" />
                </Link>
            </Container>
        </div>
    )
}

export default Navbar
