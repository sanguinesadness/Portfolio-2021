import React, { FC, ReactNode } from 'react';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import { Link } from 'react-scroll';
import { QueuePositions, QueuePositionType } from '../../types/queue-position';

interface IScrollButtonProps {
    element: string;
    className?: string;
    pos: QueuePositionType
}

const ScrollButton: FC<IScrollButtonProps> = ({ pos, element, className }) => {
    return (
        <Link activeClass="active" 
              className={`scroll-button ${className || ""}`} 
              to={element} 
              smooth="easeInOutCubic"
              spy={true}>
            <span className="scroll-position">
                {
                    pos === QueuePositions.LAST ?
                        <AiFillCaretDown/>
                    : pos === QueuePositions.FIRST ?
                        <AiFillCaretUp/>
                    : <></>
                }
            </span>
        </Link>
    )
}

export default ScrollButton
