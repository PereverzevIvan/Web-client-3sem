import styled from "styled-components";

// Интерфейс для входных параметров компонента
interface FlexProps {
    children: JSX.Element | JSX.Element[]
    direction?: "column" | "row"
    align?: string
    justify?: string
    margin?: string
    gap?: string
    width?: string
    height?: string
}

// Стилизованный компонент для flex-контейнера
const StyledFlex = styled.div<FlexProps>`
    display: flex;
    flex-direction: ${props => props.direction || 'row'};
    align-items: ${props => props.align || 'stretch'};
    justify-content: ${props => props.justify || 'stretch'};
    margin: ${({margin}) => margin || "0"};
    gap: ${({gap}) => gap || "0px"};
    width: ${({width}) => width || "auto"};
    height: ${({height}) => height || "auto"};
`


function Flex(props: FlexProps) {
    return (
        <StyledFlex className="flex" {...props}/>
    );
}

export default Flex;