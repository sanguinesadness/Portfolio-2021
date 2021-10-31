import React, { FC } from 'react';
import TimelineItem from './TimelineItem';
import { timelineItems } from '../../data/timeline-items';

const Timeline: FC = () => {
    return (
        <div className="timeline">
            <div className="main-line">
                {
                    timelineItems.map((_, index) => 
                        <div className="row" key={index}>
                            <div className="rhomb"/>
                            <div className="sub-line"/>
                        </div>
                    )
                }
            </div>
            <div className="timeline-items">
                {
                    timelineItems.map(item => 
                        <TimelineItem info={item} key={item.id}/>
                    )
                }
            </div>
        </div>
    )
}

export default Timeline
