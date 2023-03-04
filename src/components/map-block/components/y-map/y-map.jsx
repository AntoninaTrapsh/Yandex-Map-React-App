import {YMaps, Map, Placemark, Polyline, SearchControl} from '@pbe/react-yandex-maps';

const YMap = () => {
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
                <SearchControl options={{ float: "right" }} />
                <Placemark
                    modules={["geoObject.addon.balloon"]}
                    defaultGeometry={[55.75, 37.57]}
                    properties={{
                        balloonContentBody:
                            "This is balloon loaded by the Yandex.Maps API module system",
                    }}
                />
                <Polyline/>
                </Map>
            </div>
        </YMaps>
    )
}

export default YMap;
