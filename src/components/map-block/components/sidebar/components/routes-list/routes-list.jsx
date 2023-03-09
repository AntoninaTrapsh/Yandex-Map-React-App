import styled from "styled-components";
import React from "react";
import RouteElement from "../route-element/route-element";
import Loader from "../../../../../loader/loader";
import {WARNING_TEXT} from "../../../../../../utils/const";
import SearchWarning from "../search-warning/search-warning";
import PropTypes from "prop-types";

const RoutesListContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`

const Title = styled.h3`
    margin-bottom: 7px;
`

const RoutesList = ({routes, handleDelete, isLoading}) => {
    return (
        <>
            <Title>Выбранный маршрут</Title>
            {
                isLoading ?
                    <Loader/> :
                        (
                            routes.length ?
                                <RoutesListContainer>
                                    {
                                        routes.map((route, index) => {
                                            return (
                                                <RouteElement key={route.id} route={route} handleDelete={handleDelete} index={index}/>
                                            )
                                        })
                                    }
                                </RoutesListContainer> :
                                <SearchWarning>{WARNING_TEXT.NO_POINTS}</SearchWarning>
                        )
            }
        </>
    )
}

RoutesList.propTypes = {
    routes: PropTypes.array.isRequired,
    handleDelete: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
}

export default React.memo(RoutesList);
