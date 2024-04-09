import React from "react";
import styled from "styled-components";

const CheckboxCustom = styled.input.attrs({ type: 'checkbox' })`
`
const CheckboxContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    color: ${(props) => props.theme.colors.stroke};

    & label{
        cursor: pointer;
    }
`

const Checkbox = (props) => {
    const { children, ...restProps } = props

    return (
        <CheckboxContainer>
            <CheckboxCustom {...restProps}/>
                {children}
        </CheckboxContainer>
    )
}

export default Checkbox