import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
    display: flex;
    background-color: rgb(104 172 203);
    padding: 15px 40px;
`

const Logo = styled.div`
    color: white;
    font-size: 20px;
    font-weight: bold;
    
`

const Header = () => {
    return (
        <HeaderContainer>
            <Logo>FB-Map</Logo>
        </HeaderContainer>
    )
}

export default Header;
