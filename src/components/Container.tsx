import React from 'react';
import { ReactNode, FC } from 'react';
import styled from 'styled-components';

const ContainerWrapper = styled.div`
    background: #FFFFFF;
    border-radius: 15px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    padding: 70px 80px;
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
