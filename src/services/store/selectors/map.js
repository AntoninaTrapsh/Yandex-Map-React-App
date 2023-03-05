export const selectModalState = (store) => store.map.isModalOpen;
export const selectLoadingStatus = (store) => store.map.isResultsLoading;
export const selectError = (store) => store.map.requestError;
export const selectRoutes = (store) => store.map.routes;
export const selectResults = (store) => store.map.results;
export const selectCoordinates = (store) => {
    return store.map.routes.map((route) => {
        return route.coordinates;
    })
}
