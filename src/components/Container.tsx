import React from 'react';
import { ReactNode, FC } from 'react';
import styled from 'styled-components';

const ContainerWrapper = styled.div`
    background: rgba(22, 28, 36, 0.85);
    border-radius: 15px;
    box-shadow: 0 0 20px rgba(33, 43, 54, 0.5);
    padding: 70px 80px;
    font-size: 0.9em;
`;

interface IContainerProps {
    className?: string;
    children?: ReactNode;
}

const Container: FC<IContainerProps> = ({ className, children }) => {
    return (
        <ContainerWrapper className={`container ${className ? className : ""}`}>
            {children}
        </ContainerWrapper>
    )
}

export default Container
