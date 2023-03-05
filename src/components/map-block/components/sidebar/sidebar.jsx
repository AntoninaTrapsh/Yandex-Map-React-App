import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectError, selectLoadingStatus, selectResults, selectRoutes} from "../../../../services/store/selectors/map";
import {addRoute, deleteRoute, fetchSearchResults} from "../../../../services/store/slices/map";

const Sidebar = () => {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState("");
    const results = useSelector(selectResults);
    const routes = useSelector(selectRoutes);
    const isLoading = useSelector(selectLoadingStatus);
    const requestError = useSelector(selectError);

    const [error, setError] = useState("");

    const isValidValue = () => {
        //TODO validation
    }

    const searchGeoPosition = (value) => {
        dispatch(fetchSearchResults(value));
    };

    const handleClick = () => {
        searchGeoPosition(inputValue);
    }


    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleBlur = () => {
        setError(null)
    }

    const handleSelect = (route) => {
        dispatch(addRoute(route));
    }

    const handleDelete = (routeId) => {
        dispatch(deleteRoute(routeId));
    }

    return (
        <div>
            <input
                value={inputValue}
                placeholder="Поиск..."
                onChange={handleChange}
                onBlur={handleBlur}
            />
            <button onClick={handleClick}>Показать результаты</button>
            {
                !!results.length &&
                    results.map((place, index) => {
                        return <div key={index} onClick={() => handleSelect(place)}>{`${index + 1} RESULT: ${place.address}`}</div>
                    })
            }
            <div>
                <h1>
                    ROUTES
                </h1>
                {
                    !!routes.length &&
                        routes.map((route) => {
                            return (
                                <div key={route.id}>
                                    <div>{route.address}</div>
                                    <button onClick={() => handleDelete(route.id)}>&#10006;</button>
                                </div>
                            )
                        })
                }
            </div>
        </div>
    );
}

export default Sidebar;
