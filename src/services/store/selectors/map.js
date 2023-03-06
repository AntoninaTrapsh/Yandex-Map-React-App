export const selectCenterMapPoint= (store) => store.map.centerMapPoint;
export const selectLoadingStatus = (store) => store.map.isLoading;
export const selectError = (store) => store.map.requestError;
export const selectRoutes = (store) => store.map.routes;
export const selectResults = (store) => store.map.results;
export const selectCoordinates = (store) => {
    return store.map.routes.map((route) => {
        return route.coordinates;
    })
}
