import styled from "styled-components";

const Header = styled.header`
    width: 100%;
    position: relative;

    @media (max-width: 768px) {
        padding-right: 20px;
        padding-top: 20px;
        padding-bottom: 20px;
        display: flex;
        align-items: center;
        justify-content: end;
    }
`

export default Header