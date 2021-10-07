import React from 'react';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { TiArrowBack } from 'react-icons/ti';
import { useHistory } from 'react-router';
import styled from 'styled-components';

const Button = styled.button`
    position: fixed;
    top: 0;
    left: 0;
    margin: 10px;
`;

const BackToPageButton = () => {
    const history = useHistory();

    return (
        <Button className="back-to-page-button" onClick={() => history.goBack()}>
            <TiArrowBack className="icon"/>
        </Button>
    )
}

export default BackToPageButton;
