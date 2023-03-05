import {YMaps, Map, Placemark, Polyline} from '@pbe/react-yandex-maps';
import {useSelector} from "react-redux";
import {selectCoordinates, selectRoutes} from "../../../../services/store/selectors/map";

const YMap = () => {
    const routes = useSelector(selectRoutes);
    const polylineCoordinates = useSelector(selectCoordinates);

    return (
        <YMaps>
            <div>
                My awesome application with maps!
                <Map
                    defaultState={{
                        center: [55.75, 37.57],
                        zoom: 9,
                        controls: ["zoomControl", "fullscreenControl"],
                    }}
                    modules={["control.ZoomControl", "control.FullscreenControl"]}
                    width="700px"
                    height="700px"
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
                        balloonCloseButton: false,
                        strokeColor: "#000",
                        strokeWidth: 4,
                        strokeOpacity: 0.5,
                    }}
                />
                </Map>
            </div>
        </YMaps>
    )
}

export default YMap;
