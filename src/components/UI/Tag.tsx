import React, { FC } from 'react';
import * as SC from '../../styles/styled-components/tag';

interface ITagProps {
    bgColor?: string;
    fontColor?: string;
    text: string;
    className?: string;
    padding?: string;
    margin?: string;
}

const Tag: FC<ITagProps> = ({ 
    bgColor, 
    fontColor, 
    text, 
    className, 
    padding, 
    margin }) => {
    return (
        <SC.Tag margin={margin} 
                padding={padding} 
                bgColor={bgColor} 
                className={`tag ${className || ""}`}>
            <SC.Text fontColor={fontColor} className="text">
                {text}
            </SC.Text>
        </SC.Tag>
    )
}

export default Tag;
