import styled from "styled-components";
import Flex from "./Flex";


interface ButtonBoxProps {
    children: JSX.Element | JSX.Element[]
}

const StyledButtonBox = styled.div`
    width: fit-content;
    margin: 0 auto;
`

function ButtonBox(props: ButtonBoxProps) {
    return (
        <StyledButtonBox className="button-box">
            <Flex justify="center" align="center" gap="10px">
                {props.children}
            </Flex>
        </StyledButtonBox>
    );
}

export default ButtonBox;