import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

const SwitchWrapper = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const SwitchBorder = styled.div`
    border: 2px solid ${props => props.color ? props.color : "#212B36"};
    border-radius: 50px;
    height: 38px;
    width: 80px;
    background: ${props => props.about === "state1" ? "#FFF" : props.color ? props.color : "#212B36"};
    transition: 400ms cubic-bezier(.69,.04,.16,1.1);
`;

const SwitchDot = styled.span`
    transition: 400ms cubic-bezier(.69,.04,.16,1.1);
    border-radius: 50px;
    display: flex;
    height: 26px;
    width: 26px;
    background: ${props => props.about === "state1" ? props.color ? props.color : "#212B36" : "#FFF"};
    margin: 4px 0;
    transform: ${props => props.about === "state1" ? "translateX(5px)" : "translateX(45px)"};
`;

SwitchDot.defaultProps = {
    about: "state1"
};

const SwitchTitle = styled.span`
    margin-right: 30px;
    font-weight: 700;
`;

interface ISwitchProps {
    color?: string,
    title?: string;
    action1?: () => void;
    action2?: () => void; 
}

const Switch: FC<ISwitchProps> = ({ title, action1, action2, color }) => {
    const [state, setState] = useState<"state1" | "state2">("state1");

    const toggleState = () => {
        switch (state) {
            case "state1":
                setState("state2");
                action1?.call(null);
                break;
            case "state2":
                setState("state1");
                action2?.call(null);
                break;
        }
    };

    return (
        <SwitchWrapper className={`switch ${state}`} onClick={toggleState}>
            {
                title ?
                    <SwitchTitle className="switch-title">{title}</SwitchTitle>
                    :
                    <></>
            }
            <SwitchBorder className="border" about={state} color={color}>
                <SwitchDot className="dot" about={state} color={color}/>
            </SwitchBorder>
        </SwitchWrapper>
    )
}

export default Switch
