import React from 'react';
import { ReactNode, FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div<IWrapperProps>`
    background: rgba(22, 28, 36, 0.85);
    border-radius: 15px;
    box-shadow: 0 0 20px rgba(33, 43, 54, 0.5);
    padding: ${props => props.padding || "70px 80px"};
    font-size: 0.9em;
`;

interface IWrapperProps {
    padding?: string;
}

interface IContainerProps {
    className?: string;
    children?: ReactNode;
    padding?: string;
}

const Container: FC<IContainerProps> = ({ className, children, padding }) => {
    return (
        <Wrapper className={`container ${className ? className : ""}`} padding={padding}>
            {children}
        </Wrapper>
    )
}

export default Container
