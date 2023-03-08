import styled from "styled-components";
import React from "react";
import RouteElement from "../route-element/route-element";
import Loader from "../../../../../loader/loader";
import {WARNING_TEXT} from "../../../../../../utils/const";

const RoutesListContainer = styled.div`
    display: flex;
    justify-content: center;
`

const Title = styled.h3`
    margin-bottom: 7px;
`

const EmptyWarning = styled.p`
    text-align: left;
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
                                <EmptyWarning>{WARNING_TEXT.NO_POINTS}</EmptyWarning>
                        )
            }
        </>
    )
}

export default React.memo(RoutesList);
