import styled from "styled-components";

export const StyledForm = styled.form`
    width: 500px;
    border: 1px solid var(--black);
    border-radius: 10px;
    padding: 10px;
    background-color: var(--four-color);
    margin: 0 auto;
`

export const StyledLegend = styled.legend`
    text-align: center;
`

export const StyledFieldset = styled.fieldset`
    border: none;
`

export const StyledLabel = styled.label`
    color: inherit;
`

export const StyledInput = styled.input`
    color: inherit;
    padding: 7px;
    border-radius: 5px;
    background-color: var(--primary-color);
    border: none;
`

export const StyledTextarea = styled.textarea`
    color: inherit;
    padding: 7px;
    border-radius: 5px;
    resize: none;
    background-color: var(--primary-color);
    border: none;
`

export const StyledErrorContainer = styled.div`
    background-color: var(--red);
    padding: 5px;
    border: none;
    border-radius: 5px;
`