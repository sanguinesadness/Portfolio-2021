import React, { FC } from 'react';
import styled from 'styled-components';

const ShapeWrapper = styled.div`
    position: absolute;
    z-index: -1;
`;

interface IShapeProps {
    src: string;
    className?: string;
}

const Shape: FC<IShapeProps> = ({ src, className }) => {
    return (
        <ShapeWrapper className={`shape-wrapper ${className ? className : ""}`}>
            <img src={src} className="shape"/>
        </ShapeWrapper>
    )
}

export default Shape;