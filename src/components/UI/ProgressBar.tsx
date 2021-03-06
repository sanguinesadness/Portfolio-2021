import React, { FC } from 'react';
import * as SC from '../../styles/styled-components/progress-bar';

interface IProgressBarProps {
    className?: string;
    barWidth?: number;
    value: number;
    wrapperRef?: React.RefObject<HTMLDivElement>;
}

const ProgressBar: FC<IProgressBarProps> = ({ 
    className, 
    barWidth, 
    value, 
    wrapperRef }) => {
    return (
        <SC.ProgressBar ref={wrapperRef} className={`progress-bar__wrapper ${className ? className : ""}`}>
            <SC.Bar style={{ width: barWidth }} className="bar">
                <SC.BarValue style={{ width: `${value}%` }} className="value"/>
            </SC.Bar>
            <SC.ValueText className="value-text">{value}%</SC.ValueText>
        </SC.ProgressBar>
    )
}

export default ProgressBar;
