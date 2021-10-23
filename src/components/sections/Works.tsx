import React, { FC } from 'react';
import WorkCards from '../other/WorkCards';
import { works as works } from '../../data/works';
import { Element } from 'react-scroll';

const Works: FC = () => {
    return (
        <Element name="works" className="works-grid section">
            <div className="content-block">
                <WorkCards works={works}/>
            </div>
        </Element>
    )
}

export default Works;
