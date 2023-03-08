import React, {useCallback, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    selectError,
    selectResults,
    selectRoutes, selectRoutesLoadingStatus,
    selectSearchLoadingStatus
} from "../../../../services/store/selectors/map";
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
    const isSearchResultLoading = useSelector(selectSearchLoadingStatus);
    const isRouteLoading = useSelector(selectRoutesLoadingStatus);
    const requestError = useSelector(selectError);

    const searchGeoPosition = useCallback((value) => {
        dispatch(fetchSearchResults(value));
    }, [dispatch]);

    const handleChange = useCallback((event) => {
        setInputValue(event.target.value);
    }, []);

    const handlePressEnter = useCallback((event) => {
        if (event.key === 'Enter'){
            searchGeoPosition(inputValue);
        }
    }, [inputValue, searchGeoPosition])

    const handleSelect = useCallback((route) => {
        dispatch(addRoute(route));
        setInputValue("");
    }, [dispatch])

    const handleDelete = useCallback((routeId) => {
        dispatch(deleteRoute(routeId));
    }, [dispatch])

    return (
        <SearchBarContainer>
            <SearchInput inputValue={inputValue} handleChange={handleChange} handleKeyPress={handlePressEnter}/>
            {
                inputValue ?
                    (
                        isSearchResultLoading ?
                        <Loader/> :
                        <SearchResult results={results} handleSelect={handleSelect} warning={requestError}/>
                    ) :
                    <DndProvider backend={HTML5Backend}>
                        <RoutesList routes={routes} handleDelete={handleDelete} isLoading={isRouteLoading}/>
                    </DndProvider>
            }
        </SearchBarContainer>
    );
}

export default Sidebar;
