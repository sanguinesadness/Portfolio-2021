import styled from 'styled-components';
import { SwitchStates, SwitchStateType } from '../../types/switch-state';

interface IBorderProps {
    state: SwitchStateType;
    color?: string;
}

interface ICircletProps {
    state: SwitchStateType;
}

export const Switch = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Border = styled.div<IBorderProps>`
    border: 2px solid ${props => props.color ? props.color : "#212B36"};
    border-radius: 50px;
    height: 38px;
    width: 80px;
    background: ${props => props.state === SwitchStates.FIRST ? "transparent" : props.color ? props.color : "#212B36"};
    transition: 400ms cubic-bezier(.69,.04,.16,1.1);
`;

export const Circlet = styled.span<ICircletProps>`
    transition: 400ms cubic-bezier(.69,.04,.16,1.1);
    border-radius: 50px;
    display: flex;
    height: 26px;
    width: 26px;
    background: ${props => props.state === SwitchStates.FIRST ? props.color ? props.color : "#212B36" : "rgba(255, 255, 255, 0.9)"};
    margin: 4px 0;
    transform: ${props => props.state === SwitchStates.FIRST ? "translateX(5px)" : "translateX(45px)"};
`;

export const Title = styled.span`
    margin-right: 30px;
    font-weight: 700;
`;