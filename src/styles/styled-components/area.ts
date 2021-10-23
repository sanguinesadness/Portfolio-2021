import styled, { keyframes } from "styled-components";
import { getSideOrientation } from "../../lib/side";
import { SideType } from "../../types/side";

interface IAreaProps {
    height?: string;
    width?: string;
    zIndex?: number;
    side: SideType;
    fixed?: boolean;
}

interface ICircleProps {
    offset: number;
    size: number;
    animDelay: number;
    animDuration: number;
    side: SideType;
    flyDistance: string;
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

export const Area = styled.div<IAreaProps>`
    position: ${props => props.fixed ? "fixed" : "static"};
    background: #5B49F5;  
    ${props => props.side}: 0;
    z-index: ${props => props.zIndex || 10};
    height: ${props => props.height || "200px"};
    width: ${props => props.width || "200px"};
`;

export const Circles = styled.ul`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const Circle = styled.li<ICircleProps>`
    position: absolute;
    display: block;
    list-style: none;
    background: rgba(255, 255, 255, 0.2);
    ${props => props.side}: -250px;
    ${props => getSideOrientation(props.side) === "horizontal" ? "top" : "left" }: ${props => props.offset}%;
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    animation-name: ${props => flyAwayAnim(props.side, props.flyDistance)};
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-delay: ${props => props.animDelay}s;
    animation-duration: ${props => props.animDuration}s;
`;