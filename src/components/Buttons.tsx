import { Button } from 'antd';
import styled from 'styled-components';


export const StyledButton = styled(Button)`
  &.ant-btn-default {
    border-radius: 5px;
    padding: 0 10px;
    border: none;
    color: inherit;
    cursor: pointer;
    text-align: center;
    min-width: 70px;
    font-weight: bold;
  }

  &.ant-btn-default:not(:disabled):active {
    transform: scale(0.95);
  }

  &.ant-btn-default:disabled {
    cursor: not-allowed;
  }
`

export const DefaultStyledButton = styled(StyledButton)`
  &.ant-btn-default {
    background-color: var(--default-button-bg);
    border: 1px solid var(--black);
  }

  &.ant-btn-default:not(:disabled):hover {
    background-color: var(--four-color);
    color: var(--accent-color);
    border: 1px solid var(--accent-color);
  }

  &.ant-btn-default:disabled {
    background-color: var(--third-color);
  }
`

export const GreenStyledButton = styled(StyledButton)`
  &.ant-btn-default {
    background-color: var(--green);
    color: var(--font-color);
  }

  &.ant-btn-default:not(:disabled):hover {
    color: var(--font-color);
    background-color: var(--dark-green);
  }

  &.ant-btn-default:active {
    transform: scale(0.8);
  }

`

export const RedStyledButton = styled(GreenStyledButton)`
  &.ant-btn-default {
    background-color: var(--red);
    color: var(--font-color);
  }

  &.ant-btn-default:not(:disabled):hover {
    color: var(--font-color);
    background-color: var(--dark-red);
  }
`

export const FormGreenStyledButton = styled(GreenStyledButton)`
  &.ant-btn-default:not(:disabled):hover {
    color: var(--font-color);
  }
`