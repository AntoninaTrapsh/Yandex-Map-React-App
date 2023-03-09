import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Input = styled.input`
    border: none;
    border-bottom: 1px solid #bdbdbd;
    border-radius: 0;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    line-height: 1.25;
    font-size: 14px;
    padding: 10px 5px;
    background-color: #f5f5f5;
    width: 100%;
    
    &:focus {
        outline: 0;
        border-bottom: 1px solid #03a9f4;
        box-shadow: none;
        background-color: #eee;
    }
`

const SearchInput = ({inputValue, handleChange, handleKeyPress}) => {
    return (
        <>
            <Input
                value={inputValue}
                placeholder="Поиск"
                onChange={handleChange}
                onKeyPress={handleKeyPress}
            />
        </>
    )
}

SearchInput.propTypes = {
    inputValue: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleKeyPress: PropTypes.func.isRequired,
}

export default SearchInput;
