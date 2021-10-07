import React, { FC } from 'react';
import styled from 'styled-components';

interface IWrapperProps {
    bgColor?: string;
    padding?: string;
    margin?: string;
}

interface ITextProps {
    fontColor?: string;
}

interface ITagProps {
    bgColor?: string;
    fontColor?: string;
    text: string;
    className?: string;
    padding?: string;
    margin?: string;
}

const Wrapper = styled.div<IWrapperProps>`  
    margin: ${props => props.margin || ""};
    background: ${props => props.bgColor || "#5B49F5"};
    padding: ${props => props.padding || "7px 12px"};
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.1);
`;

const Text = styled.span<ITextProps>`
    color: ${props => props.fontColor || "inherit"};
    font-size: 0.65em;
    font-weight: 600;
    white-space: nowrap;
`;

const Tag: FC<ITagProps> = ({ bgColor, fontColor, text, className, padding, margin }) => {
    return (
        <Wrapper margin={margin} padding={padding} bgColor={bgColor} className={`tag ${className || ""}`}>
            <Text fontColor={fontColor} className="text">{text}</Text>
        </Wrapper>
    )
}

export default Tag;
