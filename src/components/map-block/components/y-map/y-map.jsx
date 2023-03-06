import {YMaps, Map, Placemark, Polyline} from '@pbe/react-yandex-maps';
import {useSelector} from "react-redux";
import {selectCoordinates, selectRoutes} from "../../../../services/store/selectors/map";

const YMap = () => {
    const routes = useSelector(selectRoutes);
    const polylineCoordinates = useSelector(selectCoordinates);

    return (
        <YMaps>
                <Map
                    defaultState={{
                        center: [55.75, 37.57],
                        zoom: 9,
                        controls: ["zoomControl", "fullscreenControl"],
                    }}
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
                                />
                            })
                    }
                <Polyline
                    geometry={polylineCoordinates}
                    options={{
                        strokeColor: "#000",
                        strokeWidth: 4,
                        strokeOpacity: 0.5,
                    }}
                />
                </Map>
        </YMaps>
    )
}

export default YMap;
