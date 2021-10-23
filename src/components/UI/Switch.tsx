import React, { FC, useState } from 'react';
import { SwitchStates, SwitchStateType } from '../../types/switch-state';
import * as SC from '../../styles/styled-components/switch';

interface ISwitchProps {
    color?: string,
    title?: string;
    action1?: () => void;
    action2?: () => void; 
}

const Switch: FC<ISwitchProps> = ({ title, action1, action2, color }) => {
    const [state, setState] = useState<SwitchStateType>(SwitchStates.FIRST);

    const toggleState = () => {
        switch (state) {
            case SwitchStates.FIRST:
                setState(SwitchStates.SECOND);
                action1?.call(null);
                break;
            case SwitchStates.SECOND:
                setState(SwitchStates.FIRST);
                action2?.call(null);
                break;
        }
    };

    return (
        <SC.Switch className={`switch ${state}-state`} onClick={toggleState}>
            {
                title ?
                    <SC.Title className="switch-title">{title}</SC.Title>
                    :
                    <></>
            }
            <SC.Border className="border" state={state} color={color}>
                <SC.Circlet className="circlet" state={state} color={color}/>
            </SC.Border>
        </SC.Switch>
    )
}

export default Switch
