export const selectMapState= (store) => store.map.mapState;
export const selectSearchLoadingStatus = (store) => store.map.isSearchResultLoading;
export const selectRoutesLoadingStatus = (store) => store.map.isRouteLoading;
export const selectError = (store) => store.map.requestError;
export const selectPolylineVisibleStatus = (store) => store.map.isPolylineVisible;
export const selectRoutes = (store) => store.map.routes;
export const selectResults = (store) => store.map.results;
export const selectCoordinates = (store) => {
    return store.map.routes.map((route) => {
        return route.coordinates;
    })
}
