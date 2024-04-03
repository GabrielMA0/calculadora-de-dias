import styled from "styled-components";

const Input = styled.input`
    font-size: 20px;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    padding: 10px;
    outline: none;
    width: 100%;
`

export default Input;