import styled from "styled-components";

const Observation = styled.span`
    font-size: ${(props) => props.theme.size.observation};;
    font-style: italic;
    color: ${(props) => props.theme.colors.observation};
`

export default Observation