import React, { FC } from 'react';
import { QueuePositions } from '../../types/queue-position';
import ScrollButton from './ScrollButton';

interface IScrollButtonsProps {
    elements: string[];
    className?: string;
}

const ScrollButtons: FC<IScrollButtonsProps> = ({ elements, className }) => {
    return (
        <div className={`scroll-buttons ${className || ""}`}>
            {elements.map((element, index) =>
                <ScrollButton key={element} 
                              element={element} 
                              className="circle"
                              pos={index === 0 ? QueuePositions.FIRST 
                                    : index === elements.length - 1 ? QueuePositions.LAST 
                                    : undefined}/>
            )}
        </div>
    )
}

export default ScrollButtons
