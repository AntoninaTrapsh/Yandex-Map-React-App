import React, {useRef} from "react";
import styled from "styled-components";
import {ItemTypes} from "../../../../../../utils/dnd-types";
import {useDrag, useDrop} from "react-dnd";
import {useDispatch} from "react-redux";
import {changeRoutePositionFromList} from "../../../../../../services/store/slices/map";
import PropTypes from "prop-types";
import {ROUTE_TYPE} from "../../../../../../utils/types";

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

const Button = styled.button`
    background-color: transparent;
    color: #8d91a0;
    border: none;
    cursor: pointer;
    
    &:hover {
        color: black;
    }
`;

const RouteElement = ({route, handleDelete, index}) => {
    const dispatch = useDispatch();
    const ref = useRef(null);

    const [{ isDragging }, drag] = useDrag({
        type: ItemTypes.ROUTE,
        item: () => {
            return {
                id: route.id,
                index
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    })

    const [, drop ] = useDrop({
        accept: ItemTypes.ROUTE,
        hover: (item, monitor) => {
            if (!ref.current) {
                return
            }
            const dragIndex= item.index;
            const hoverIndex = index;
            if (dragIndex === hoverIndex) {
                return
            }

            const hoverBoundingRect = ref.current.getBoundingClientRect();
            const clientOffset = monitor.getClientOffset();
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            }

            const indices = {
                toIndex: dragIndex,
                fromIndex: hoverIndex
            }

            dispatch(changeRoutePositionFromList(indices));

            item.index = hoverIndex;
        }
    });

    const opacity = isDragging ? 0 : 1
    drag(drop(ref))


    return (
        <Route key={route.id} style={{opacity}} ref={ref}>
            <p>{route.address}</p>
            <Button onClick={() => handleDelete(route.id)}>&#10006;</Button>
        </Route>
    )
}

RouteElement.propTypes = {
    route: ROUTE_TYPE.isRequired,
    handleDelete: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
}

export default RouteElement;
