export const coordinateConverter = (coordinates) => {
    return coordinates
        .split(" ")
        .map((coordinate) => {
            return parseFloat(coordinate);
        })
        .reverse()
}
