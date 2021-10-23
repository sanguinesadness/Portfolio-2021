import React, { FC } from 'react';
import * as SC from '../../styles/styled-components/dot';
import { DotStyleType } from '../../types/dot';

interface IDotProps {
    style: DotStyleType;
}

const Dot: FC<IDotProps> = ({ style }) => {
    return (
        <SC.Dot className="dot" styleType={style}/>
    )
}

export default Dot;
