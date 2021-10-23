import React from 'react';
import { Element } from 'react-scroll';
import Timeline from '../other/Timeline';

const Story = () => {
    return (
        <Element name="story" className="story section">
            <div className="content-block">
                <Timeline/>
            </div>
        </Element>
    )
}

export default Story
