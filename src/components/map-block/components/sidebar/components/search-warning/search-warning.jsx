import React from "react";
import styled from "styled-components";

const Warning = styled.p`
    padding: 5px 0;
    margin: 0;
    color: grey;
`

const SearchWarning = ({children}) => {
    return (
        <Warning>{children}</Warning>
    )
}

export default SearchWarning;
