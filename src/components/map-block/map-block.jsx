import React from "react";
import Sidebar from "./components/sidebar/sidebar";
import YMap from "./components/y-map/y-map";
import Modal from "../modal/modal";
import SearchResult from "../search-result/search-result";
import {useDispatch, useSelector} from "react-redux";
import {selectModalState} from "../../services/store/selectors/map";
import {closeModal} from "../../services/store/slices/map";

const MapBlock = () => {
    const dispatch = useDispatch();
    const isModalOpen = useSelector(selectModalState);

    const handleCloseModal = () => {
        dispatch(closeModal);
    }

    return (
        <div>
            <Sidebar/>
            <YMap/>
            {
                isModalOpen &&
                <Modal handleModalClose={handleCloseModal}>
                    <SearchResult/>
                </Modal>
            }
        </div>
    )
}

export default MapBlock;
