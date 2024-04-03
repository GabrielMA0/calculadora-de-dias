import styled from "styled-components";

const Result = styled.span`
    font-size: 25px;
    font-style: italic;
    letter-spacing: 5px;
    color: ${(props) => props.theme.colors.primary};
    width: 100%;
`

export default Result