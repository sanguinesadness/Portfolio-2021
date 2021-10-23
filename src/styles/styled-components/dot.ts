import styled from "styled-components";
import { DotStyles, DotStyleType } from "../../types/dot";

interface IDotProps {
    styleType: DotStyleType;
}

export const Dot = styled.span<IDotProps>`
    display: block;
    height: 17px;
    width: 17px;

    ${props => props.styleType === DotStyles.RED_CIRCLE ?
        "background: #F54949;" +
        "border-radius: 50%;"
        :
        "background: #FFF;" +
        "border-radius: 5px;"
    }
`;