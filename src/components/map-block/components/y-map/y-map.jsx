import {YMaps, Map, Placemark, Polyline} from '@pbe/react-yandex-maps';
import {useDispatch, useSelector} from "react-redux";
import {
    selectCoordinates,
    selectMapState,
    selectPolylineVisibleStatus,
    selectRoutes
} from "../../../../services/store/selectors/map";
import {fetchAddressByCoordinates, hidePolyline} from "../../../../services/store/slices/map";

const YMap = () => {
    const dispatch = useDispatch();
    const isPolylineVisible = useSelector(selectPolylineVisibleStatus);
    const routes = useSelector(selectRoutes);
    const polylineCoordinates = useSelector(selectCoordinates);
    const options = useSelector(selectMapState);

    const mapState = {
        ...options,
        controls: ["zoomControl", "fullscreenControl"],
    }

    const handleDragStart = () => {
        dispatch(hidePolyline());
    }

    const handleDragEnd = (e, id) => {
        const coordinates = e.originalEvent.target.geometry._coordinates;
        dispatch(fetchAddressByCoordinates({
            id,
            coordinates
        }));
    }

    return (
        <YMaps>
                <Map
                    state={mapState}
                    modules={["control.ZoomControl", "control.FullscreenControl"]}
                    style={{
                        flex: 2,
                        height: "calc(100vh - 57px)"
                    }}
                >
                    {
                        !!routes.length &&
                            routes.map((route) => {
                                return <Placemark key={route.id}
                                    modules={["geoObject.addon.balloon"]}
                                    geometry={route.coordinates}
                                    properties={{
                                    balloonContentBody: route.address,
                                    }}
                                    options={{
                                        draggable: true,
                                    }}
                                    onDragEnd={(e) => handleDragEnd(e, route.id)}
                                    onDragStart={() => handleDragStart()}
                                />
                            })
                    }
                    {
                        isPolylineVisible &&
                        <Polyline
                            geometry={polylineCoordinates}
                            options={{
                                strokeColor: "#000",
                                strokeWidth: 4,
                                strokeOpacity: 0.5,
                            }}
                        />
                    }
                </Map>
        </YMaps>
    )
}

export default YMap;
