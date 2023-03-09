import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

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

SearchWarning.propTypes = {
    children: PropTypes.string.isRequired,
}

export default SearchWarning;
