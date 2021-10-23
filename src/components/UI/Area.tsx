import React, { FC, ReactNode } from 'react';
import { getRandomInt } from '../../lib/random';
import * as SC from '../../styles/styled-components/area';
import { SideType } from '../../types/side';

interface IAreaProps {
    id?: string;
    className?: string;
    height?: string;
    width?: string;
    zIndex?: number;
    side: SideType;
    circleFlyDistance: string;
    circlesNumber?: number;
    children?: ReactNode;
    fixed?: boolean;
}

const Area: FC<IAreaProps> = ({ 
        id, 
        className, 
        height, 
        width, 
        zIndex, 
        side, 
        circleFlyDistance, 
        circlesNumber, 
        children, 
        fixed 
    }) => {
    return (
        <SC.Area id={id}
                 className={`area ${className ? className : ""}`} 
                 height={height} 
                 width={width} 
                 zIndex={zIndex} 
                 side={side}
                 fixed={fixed}>
            <SC.Circles>
                {
                    [Array.apply(0, Array(circlesNumber || 10)).map((x, i) => 
                        <SC.Circle key={i} 
                                offset={getRandomInt(0, 101)}
                                size={getRandomInt(100, 250)}
                                animDelay={getRandomInt(0, 10)}
                                animDuration={getRandomInt(10, 30)}
                                side={side}
                                flyDistance={circleFlyDistance}/>
                    )]
                }
            </SC.Circles>
            <div className="content">
                {children}
            </div>
        </SC.Area>
    )
}

export default Area;
