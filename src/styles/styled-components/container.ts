import styled from 'styled-components';

interface IContainerProps {
    padding?: string;
}

export const Container = styled.div<IContainerProps>`
    background: rgba(22, 28, 36, 0.85);
    border-radius: 15px;
    box-shadow: 0 0 20px rgba(33, 43, 54, 0.5);
    padding: ${props => props.padding || "70px 80px"};
    font-size: 0.9em;
`;