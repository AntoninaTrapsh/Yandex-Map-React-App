import React from "react";
import styled from "styled-components";

const LoaderContainer = styled.div`
      display: flex;
      position: relative;
      justify-content: center;
      margin-top: 40px;
      
      div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        margin: 8px;
        border: 6px solid #03a9f4;
        border-radius: 50%;
        animation: loader-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: #03a9f4 transparent transparent transparent;
        width: 40px;
        height: 40px;
      }
      div:nth-child(1) {
        animation-delay: -0.45s;
      }
      div:nth-child(2) {
        animation-delay: -0.3s;
      }
      div:nth-child(3) {
        animation-delay: -0.15s;
      }
      @keyframes loader-ring {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
`

const Loader = () => {
    return (
        <LoaderContainer>
            <div></div><div></div><div></div><div></div>
        </LoaderContainer>
    )
}

export default Loader;
