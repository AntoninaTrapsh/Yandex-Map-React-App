import styled from "styled-components";
import React from "react";

const ResultList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

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

const SearchResult = ({results, handleSelect}) => {

    return (
        <>
            <Title>Результаты поиска</Title>
            {
                !!results.length &&
                results.map((place, index) => {
                    return <Result key={index} onClick={() => handleSelect(place)}>{place.address}</Result>
                })
            }
        </>
    )
}

export default SearchResult;
