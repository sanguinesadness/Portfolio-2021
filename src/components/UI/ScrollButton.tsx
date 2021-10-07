import React, { FC } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { Link } from 'react-scroll';

interface IScrollButtonProps {
    element: string;
    className?: string;
}

const ScrollButton: FC<IScrollButtonProps> = ({ element, className }) => {
    return (
        <Link className="scroll-link" to={element} smooth="easeInOutCubic">
            <button className={`scroll-button ${className || ""}`}>
                <AiFillCaretDown className="icon" />
            </button>
        </Link>
    )
}

export default ScrollButton
