import React from "react";
import Sidebar from "./components/sidebar/sidebar";
import YMap from "./components/y-map/y-map";
import styled from "styled-components";

const MapSection = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 0;
    min-height: calc(100vh - 57px);
`

const MapBlock = () => {

    return (
        <MapSection>
            <Sidebar/>
            <YMap/>
        </MapSection>
    )
}

export default MapBlock;
