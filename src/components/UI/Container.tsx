import React from 'react';
import { ReactNode, FC } from 'react';
import * as SC from '../../styles/styled-components/container';

interface IContainerProps {
    className?: string;
    children?: ReactNode;
    padding?: string;
}

const Container: FC<IContainerProps> = ({ className, children, padding }) => {
    return (
        <SC.Container className={`container ${className ? className : ""}`} padding={padding}>
            {children}
        </SC.Container>
    )
}

export default Container
