export const coordinateConverter = (coordinates) => {
    return coordinates
        .split(" ")
        .map((coordinate) => {
            return parseFloat(coordinate);
        })
        .reverse()
}

export const concatRouteCoordinate = (routes) => {
    return routes.map((route) => {
        return coordinateConverter(route.coordinates);
    })
}
