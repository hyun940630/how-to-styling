import 'antd/dist/antd.css';
import './App.css';

import Button from 'antd/lib/button';
import Checkbox from 'antd/lib/checkbox';
import React from 'react';
import styled from 'styled-components';

const styles = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
};

// Antd Button + styled-components
const StyledButton = styled(Button)`
    color: palevioletred;
    font-weight: normal;
    :focus {
        color: palevioletred;
        border-color: palevioletred;
    }
    :hover {
        color: palevioletred;
        border-color: palevioletred;
    }
    &.ant-btn-clicked:after {
        content: '';
        position: absolute;
        top: -1px;
        left: -1px;
        bottom: -1px;
        right: -1px;
        border-radius: inherit;
        border: 0 solid palevioletred;
        opacity: 0.4;
        -webkit-animation: buttonEffect 0.4s;
        animation: buttonEffect 0.4s;
        display: block;
    }
`;

// Antd Checkbox + styled-components
const StyledCheckbox = styled(Checkbox)`
    .ant-checkbox-input:focus + .ant-checkbox-inner,
    .ant-checkbox-wrapper:hover .ant-checkbox-inner,
    .ant-checkbox:hover .ant-checkbox-inner {
        border-color: palevioletred;
    }
    .ant-checkbox-checked .ant-checkbox-inner,
    .ant-checkbox-indeterminate .ant-checkbox-inner {
        background-color: palevioletred;
        border-color: palevioletred;
    }
    .ant-checkbox-checked:after {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 2px;
        border: 1px solid palevioletred;
        content: '';
        -webkit-animation: antCheckboxEffect 0.36s ease-in-out;
        animation: antCheckboxEffect 0.36s ease-in-out;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
        visibility: hidden;
    }
`;

const App = () => {
    return (
        <div style={styles}>
            <h3>Styled Button</h3>
            <StyledButton>test</StyledButton>
            <br />
            <h3>None Styled Button</h3>
            <Button>test</Button>
            <br />
            <h3>Styled Checkbox</h3>
            <StyledCheckbox>StyledCheckbox</StyledCheckbox>
            <br />
            <h3>None Styled Checkbox</h3>
            <Checkbox>Checkbox</Checkbox>
        </div>
    );
};

export default App;
