import React from 'react';
import styled from 'styled-components';

const DotWrapper = styled.span`
    display: block;
    height: 17px;
    width: 17px;
    background: #F54949;
    border-radius: 50%;
`;

const Dot = () => {
    return (
        <DotWrapper className="dot"/>
    )
}

export default Dot;
