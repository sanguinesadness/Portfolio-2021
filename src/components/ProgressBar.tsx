import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
`;

const Bar = styled.div`
    width: ${props => props.style?.width ? props.style.width + "px" : "100%"};
    height: 15px;
    background: #DEDBFD;
    border-radius: 3px;
    overflow: hidden;
`;

const BarValue = styled.div`
    background: linear-gradient(270deg, #5B49F5 0%, #8375FF 20%, #5B49F5 50%);
    height: 100%;
    border-radius: 1px;
    box-shadow: 5px 0 10px rgba(0, 0, 0, 0.1);
    background-size: 500% 100%;
    animation: gradient 20s linear infinite;
`;

const ValueText = styled.span`
    margin-left: 20px;
    font-size: 0.9em;
    font-weight: 500;
`;

interface BarValueProps {
    value: number;
}

interface IProgressBarProps {
    className?: string;
    barWidth?: number;
    value: number;
    wrapperRef?: React.RefObject<HTMLDivElement>;
}

const ProgressBar: FC<IProgressBarProps> = ({ className, barWidth, value, wrapperRef }) => {
    return (
        <Wrapper ref={wrapperRef} className={`progress-bar__wrapper ${className ? className : ""}`}>
            <Bar style={{ width: barWidth }}>
                <BarValue style={{ width: `${value}%` }}/>
            </Bar>
            <ValueText className="progress-value-text">{value}%</ValueText>
        </Wrapper>
    )
}

export default ProgressBar;
