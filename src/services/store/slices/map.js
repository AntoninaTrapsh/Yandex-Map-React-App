import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import MapApiClient from "../../clients/api-client/api-client";
import {v4 as uuid} from "uuid";
import {coordinateConverter} from "../../utils/converter";

const initialState = {
    results: [],
    routes: [],
    requestError: null,
    isModalOpen: false,
    isResultsLoading: false,
}

export const fetchSearchResults = createAsyncThunk(
    'mapSlice/fetchSearchResults',
    async (value, thunkAPI) => {
        return await MapApiClient.getGeoPosition(value);
    }
)

export const mapSlice = createSlice({
    name: 'mapSlice',
    initialState,
    reducers: {
        addRoute: (state, action) => {
            const newRoute = {...action.payload, id: uuid()};
            state.routes.push(newRoute);
            state.results = [];
        },
        deleteRoute: (state, action) => {
            const routeIndex = state.routes.findIndex((route) => {
                return route.id === action.payload;
            })
            if (routeIndex >= 0) {
                state.routes.splice(routeIndex, 1);
            }
        },
        changeRoutePosition: (state) => {
            // TODO swap waypoints (dnd)
        },
        openModal: (state) => {
            state.isOpen = true;
        },
        closeModal: (state) => {
            state.isOpen = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSearchResults.pending, state => {
                state.isLoading = true;
            })
            .addCase(fetchSearchResults.fulfilled, (state, action) => {
                const data = [...action.payload.response.GeoObjectCollection.featureMember];

                if (!data.length) {
                    state.requestError = "По вашему запросу ничего не найдено";
                }

                state.results = data.reduce((result, curPosition) => {
                    const formattedCoordinates = coordinateConverter(curPosition.GeoObject.Point.pos);
                    result.push({
                        address: curPosition.GeoObject.metaDataProperty.GeocoderMetaData.Address.formatted,
                        coordinates: formattedCoordinates,
                    })
                    return result;
                }, []);

                state.requestError = null;
                state.isLoading = false;
            })
            .addCase(fetchSearchResults.rejected, state => {
                state.isLoading = false;
                state.requestError = 'Произошла ошибка, попробуйте попозже';
            })
            .addDefaultCase((state) => {
                state.isLoading = false;
            })
    }
})

export const {
    addRoute,
    deleteRoute,
    openModal,
    closeModal,
} = mapSlice.actions

export default mapSlice.reducer
