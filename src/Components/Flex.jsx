import styled from "styled-components";
import { motion } from "framer-motion"

const Flex = styled(motion.div) `
    display: flex;
    gap: 20px;
    align-items: center;
    width: 100%;
    justify-content: center;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`
export default Flex