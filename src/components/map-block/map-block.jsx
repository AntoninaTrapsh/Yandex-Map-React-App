import React from "react";
import Sidebar from "./components/sidebar/sidebar";
import YMap from "./components/y-map/y-map";
import Modal from "../modal/modal";
import {useDispatch, useSelector} from "react-redux";
import {selectModalState} from "../../services/store/selectors/map";
import {closeModal} from "../../services/store/slices/map";
import styled from "styled-components";

const MapSection = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 0;
    min-height: calc(100vh - 57px);
`

const MapBlock = () => {
    const dispatch = useDispatch();
    const isModalOpen = useSelector(selectModalState);

    const handleCloseModal = () => {
        dispatch(closeModal);
    }

    return (
        <MapSection>
            <Sidebar/>
            <YMap/>
            {
                isModalOpen &&
                <Modal handleModalClose={handleCloseModal}>
                    {/*<SearchResult/>*/}
                </Modal>
            }
        </MapSection>
    )
}

export default MapBlock;
