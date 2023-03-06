import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectError, selectLoadingStatus, selectResults, selectRoutes} from "../../../../services/store/selectors/map";
import {addRoute, deleteRoute, fetchSearchResults} from "../../../../services/store/slices/map";
import RoutesList from "./components/routes-list/routes-list";
import styled from "styled-components";
import SearchResult from "./components/search-result/search-result";
import SearchInput from "./components/search-input/search-input";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import Loader from "../../../loader/loader";

const SearchBarContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    background-color: #f9f9f9;
    padding: 20px 40px 0 40px;
    text-align: left;
`

const Sidebar = () => {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState("");
    const results = useSelector(selectResults);
    const routes = useSelector(selectRoutes);
    const isLoading = useSelector(selectLoadingStatus);
    const requestError = useSelector(selectError);

    const searchGeoPosition = (value) => {
        dispatch(fetchSearchResults(value));
    };

    const handleClick = () => {
        searchGeoPosition(inputValue);
    }

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSelect = (route) => {
        dispatch(addRoute(route));
        setInputValue("");
    }

    const handleDelete = (routeId) => {
        dispatch(deleteRoute(routeId));
    }

    return (
        <SearchBarContainer>
            <SearchInput inputValue={inputValue} handleChange={handleChange} handleClick={handleClick}/>
            {
                inputValue ?
                    (
                        isLoading ?
                        <Loader/> :
                        <SearchResult results={results} handleSelect={handleSelect} warning={requestError}/>
                    ) :
                    <DndProvider backend={HTML5Backend}>
                        <RoutesList routes={routes} handleDelete={handleDelete}/>
                    </DndProvider>
            }
        </SearchBarContainer>
    );
}

export default Sidebar;
