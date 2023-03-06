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
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 3px 0;
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

const EmptyWarning = styled.p`
    text-align: left;
`

const RoutesList = ({routes, handleDelete}) => {

    return (
        <>
            <Title>Выбранный маршрут</Title>
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
