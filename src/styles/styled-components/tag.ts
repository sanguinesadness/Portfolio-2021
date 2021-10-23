import styled from 'styled-components';

interface ITagProps {
    bgColor?: string;
    padding?: string;
    margin?: string;
}

interface ITextProps {
    fontColor?: string;
}

export const Tag = styled.div<ITagProps>`  
    margin: ${props => props.margin || ""};
    background: ${props => props.bgColor || "#5B49F5"};
    padding: ${props => props.padding || "7px 12px"};
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.05);
`;

export const Text = styled.span<ITextProps>`
    color: ${props => props.fontColor || "inherit"};
    font-size: 0.65em;
    font-weight: 600;
    white-space: nowrap;
`;