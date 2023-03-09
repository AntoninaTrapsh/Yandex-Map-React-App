import styled from "styled-components";
import React from "react";
import SearchWarning from "../search-warning/search-warning";
import PropTypes from "prop-types";

const Result = styled.div` 
    width: 100%;
    padding: 5px 0;
    margin: 0;
    border-bottom: 1px solid #bdbdbd;
    cursor: pointer;
    &:hover {
        background-color: rgb(235 239 239);
        border-bottom: 1px solid #03a9f4;
    }
`

const Title = styled.h3`
    margin-bottom: 7px;
`

const SearchResult = ({results, handleSelect, warning}) => {

    return (
        <>
            {
                !!warning && <SearchWarning>{warning}</SearchWarning>
            }
            {
                !!results.length &&
                <div>
                    <Title>Результаты поиска:</Title>
                    {
                        results.map((place, index) => {
                            return <Result key={index} onClick={() => handleSelect(place)} data-test={"result"}>{place.address}</Result>
                        })
                    }
                </div>
            }
        </>
    )
}

SearchResult.propTypes = {
    results: PropTypes.array.isRequired,
    handleSelect: PropTypes.func.isRequired,
    warning: PropTypes.string.isRequired,
}

export default React.memo(SearchResult);
