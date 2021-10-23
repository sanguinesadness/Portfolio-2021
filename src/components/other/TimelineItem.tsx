import React, { FC } from 'react';
import { DotStyles } from '../../types/dot';
import { ITimelineItem } from '../../types/timeline';
import Container from '../UI/Container';
import Dot from '../UI/Dot';

interface ITimelineProps {
    info: ITimelineItem;
}

const TimelineItem: FC<ITimelineProps> = ({ info }) => {
    return (
        <div className="timeline-item">
            <Container className="image__wrapper" padding="12px">
                <img src={info.image} alt="" className="image" />
            </Container>
            <div className="info">
                <div className="year-block">
                    <h1 className="year">{info.year}</h1>
                    <Dot style={DotStyles.WHITE_SQUARE} />
                </div>
                <div className="text-block">
                    {
                        info.paragraphs.map((p, index) => 
                            <p key={index} className="paragraph">{p}</p>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default TimelineItem
