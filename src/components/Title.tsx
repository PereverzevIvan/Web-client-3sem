import styled from "styled-components";

interface TitleProps {
    children: string | string[];
    color?: string;
    fontSize?: string;
    textAlign?: string
}

const StyledTitle = styled.h1<TitleProps>`
    font-size: ${({fontSize}) => fontSize || 'var(--big-title-fz)'};
    font-weight: bold;
    color: ${({color}) => color || 'inherit'};
    text-align: ${({textAlign}) => textAlign || 'left'};
    transition: color 0.2s;
`

function Title(props: TitleProps) {
    return (
        <StyledTitle className="title" {...props}/>
    );
}

export default Title;