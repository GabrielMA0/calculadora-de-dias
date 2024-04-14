import styled from "styled-components";

const Title = styled.h1`
    color: ${({ theme }) => theme.colors.primary};
    font-style: italic;
    font-size: 40px;
    text-align: center;

    @media (max-width: 768px) {
        font-size: ${props => props.theme.size.mobile.title}
    }
`
export default Title;