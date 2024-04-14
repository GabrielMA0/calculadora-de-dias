import styled from "styled-components";
import { motion } from "framer-motion"

const Result = styled(motion.span)`
    font-size: 25px;
    font-style: italic;
    letter-spacing: 5px;
    color: ${(props) => props.theme.colors.primary};
    width: 100%;
    padding-bottom: 10px;

    @media (max-width: 768px) {
        text-align: center;
    }
`

export default Result