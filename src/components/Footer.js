import React from 'react';
import styled from 'styled-components';
import YoutubeIcon from '../assets/Icon/youtube.png';

const FooterContainer = styled.div`
  background-color: red;
  width: 100vw;
  height: 15vh;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
`

const Logo = styled.div`
  display: block;
  height: 5vh;
  width: 5vw;
  margin: 2rem 0 0 4vw;
  background-color: green;
`

const CoppyRight = styled.div`
  display: block;
  margin: 0.5rem 0 0 1rem;
  padding: 0;
  color: white;
  /* height: 1rem; */
`
const CoppyRightContainer = styled.div``

const MenuBar = styled.div`
  display: flex;
  align-items: center;
  color: white;
  font-size: 30px;
  margin-right: 2rem;
  font-weight: bolder;
`

const Icon = styled.div`

`

function Footer() {
    return (
      <FooterContainer>
        <CoppyRightContainer>
          <Logo />
          <CoppyRight>
            <p>Coppyright © 2020 Ponlawat & Atikom</p>
          </CoppyRight>
        </CoppyRightContainer>
          <MenuBar>HOME   |   GAME   |   ABOUT  </MenuBar>
      </FooterContainer>
    );};

export default Footer
