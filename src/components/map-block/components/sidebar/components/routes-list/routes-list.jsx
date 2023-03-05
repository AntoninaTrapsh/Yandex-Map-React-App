import styled from "styled-components";
import React from "react";

const Button = styled.button`
    background-color: transparent;
    color: #8d91a0;
    border: none;
    cursor: pointer;
    
    &:hover {
        color: black;
    }
`;

const RoutesListContainer = styled.div`
    display: flex,
    justify-content: center;
`

const Route = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    
    &:hover {
        background-color: #f7f6f9;
    }
`

const EmptyWarning = styled.p`
    text-align: left;
`

const RoutesList = ({routes, handleDelete}) => {

    return (
        <>
            <h3>Выбранный маршрут</h3>
            {
                routes.length ?
                <RoutesListContainer>
                    {
                        routes.map((route) => {
                            return (
                                <Route key={route.id}>
                                    <p>{route.address}</p>
                                    <Button onClick={() => handleDelete(route.id)}>&#10006;</Button>
                                </Route>
                            )
                        })
                    }
                </RoutesListContainer> :
                <EmptyWarning>Ни одна точка маршрута не указана</EmptyWarning>
            }
        </>
    )
}

export default RoutesList;
