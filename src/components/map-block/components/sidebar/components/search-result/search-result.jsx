import styled from "styled-components";
import React from "react";

const ResultList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Result = styled.p`
    text-align: left;
    
    &:hover {
        background-color: #f7f6f9;
    }
`

const SearchResult = ({results, handleSelect}) => {

    return (
        <>
            <h3>Результаты поиска</h3>
            {
                !!results.length &&
                results.map((place, index) => {
                    return <Result key={index} onClick={() => handleSelect(place)}>{`${index + 1} RESULT: ${place.address}`}</Result>
                })
            }
        </>
    )
}

export default SearchResult;
