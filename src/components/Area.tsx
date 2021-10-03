import React, { FC, ReactNode } from 'react';
import styled, { keyframes } from 'styled-components';

const getRandomInt = (min: number, max: number): number => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

const getSideOrientation = (side: SideType): "horizontal" | "vertical" => {
    if (side === "right" || side === "left") {
        return "horizontal";
    }
    else {
        return "vertical";
    }
}

const flyAwayAnim = (side: SideType, distance: string) => keyframes`
    0% {
        transform: ${getSideOrientation(side) === "horizontal" ? "translateX(0)" : "translateY(0)"} rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }

    100% {
        transform: ${side === "right" ? `translateX(-${distance})` :
                     side === "left" ? `translateX(${distance})` :
                     side === "bottom" ? `translateY(-${distance})` :
                     side === "top" ? `translateY(${distance})` : ""} rotate(540deg);
        opacity: 0;
        border-radius: 50%;
    }
`;

const AreaObj = styled.div<IAreaObjProps>`
    position: ${props => props.fixed ? "fixed" : "static"};
    background: #5B49F5;  
    ${props => props.side}: 0;
    z-index: ${props => props.zIndex || 10};
    height: ${props => props.height || "200px"};
    width: ${props => props.width || "200px"};
`;

const Circles = styled.ul`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

const Circle = styled.li<ICircleProps>`
    position: absolute;
    display: block;
    list-style: none;
    background: rgba(255, 255, 255, 0.2);
    ${props => props.side}: -150px;
    ${props => getSideOrientation(props.side) === "horizontal" ? "top" : "left" }: ${props => props.offset}%;
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    animation-name: ${props => flyAwayAnim(props.side, props.flyDistance)};
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-delay: ${props => props.animDelay}s;
    animation-duration: ${props => props.animDuration}s;
`;

type SideType = "left" | "right" | "top" | "bottom"; 

interface ICircleProps {
    offset: number;
    size: number;
    animDelay: number;
    animDuration: number;
    side: SideType;
    flyDistance: string;
}

interface IAreaObjProps {
    height?: string;
    width?: string;
    zIndex?: number;
    side: SideType;
    fixed?: boolean;
}

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

const Area: FC<IAreaProps> = ({ id, className, height, width, zIndex, side, circleFlyDistance, circlesNumber, children, fixed }) => {
    return (
        <AreaObj id={id}
                 className={`area ${className ? className : ""}`} 
                 height={height} 
                 width={width} 
                 zIndex={zIndex} 
                 side={side}
                 fixed={fixed}>
            <Circles>
                {
                    [Array.apply(0, Array(circlesNumber || 10)).map((x, i) => 
                        <Circle key={i} 
                                offset={getRandomInt(0, 101)}
                                size={getRandomInt(50, 150)}
                                animDelay={getRandomInt(0, 10)}
                                animDuration={getRandomInt(10, 30)}
                                side={side}
                                flyDistance={circleFlyDistance}/>
                    )]
                }
            </Circles>
            <div className="content">
                {children}
            </div>
        </AreaObj>
    )
}

export default Area;
