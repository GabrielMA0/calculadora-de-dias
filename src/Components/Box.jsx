import styled from "styled-components";

const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;

    @media (max-width: 768px) {
        gap: 10px;
    }
`
export default Box