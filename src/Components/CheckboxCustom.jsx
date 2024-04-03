import React from "react";
import styled from "styled-components";

const CheckboxCustom = styled.input.attrs({ type: 'checkbox' })`
`
const CheckboxContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    color: ${(props) => props.theme.colors.stroke};
`

const Checkbox = (props) => {
    const { children } = props

    return (
        <CheckboxContainer>
            <CheckboxCustom/>
                {children}
        </CheckboxContainer>
    )
}

export default Checkbox