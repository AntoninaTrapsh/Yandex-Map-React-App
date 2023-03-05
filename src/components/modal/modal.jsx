import React from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components';

const ModalContainer = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: #1C1C21;
    width: 720px;
    border-radius: 40px;
    z-index: 1001;
    min-height: 100px;
`

const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`

const Button = styled.button`
    position: absolute;
    background-color: transparent;
    border: none;
    padding: 0;
    top: -13px;
    right: 0;
    cursor: pointer;
`;


const Modal = ({title, children, handleModalClose}) => {
    const modalRoot = document.getElementById("modal-root");

    return ReactDOM.createPortal(
        <>
            {/*<ModalOverlay handleModalClose={handleModalClose}/>*/}
            <ModalContainer>
                <ModalContent>
                    {
                        !!title &&
                        (<div>
                            <h2 className="text text_type_main-large">{title}</h2>
                        </div>)
                    }
                    {children}
                    <Button
                        onClick={() => handleModalClose()}
                    >
                        Закрыть
                    </Button>
                </ModalContent>
            </ModalContainer>
        </>,
        modalRoot
    )
}

export default Modal;
