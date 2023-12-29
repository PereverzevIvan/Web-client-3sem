import styled from "styled-components";

interface SectionProps {
    children: JSX.Element | JSX.Element[];
}

const StyledSection = styled.section<SectionProps>`
    padding: 15px;
    background-color: var(--secondary-color);
    border-radius: 10px;
    margin-top: 10px;
    transition: background-color 0.2s;
`

function Section(props: SectionProps) {
    return (
        <StyledSection className="section" {...props}/>
    );
}

export default Section;