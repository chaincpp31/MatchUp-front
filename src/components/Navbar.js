import React from "react";
import { Link } from "react-router-dom";
// import routes from "./config/routes";
import styled from "styled-components";
import logoImg from "../assets/LogoMatchUp.png";

const NavContainer = styled.div`
  background-color: #ff0000;
  width: 100vw;
  height: 10vh;
  /* position: fixed; */
  display: flex;
  padding: 0rem;
  margin: 0rem;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  padding: 2rem;
  background-color: #000;
`;
// const NavButton = styled.div`
//   color: #fff;
//   padding: 0 3rem 0 3rem;
// `

const NavButtonContainer = styled.div`
  display: flex;
  text-align: center;
  list-style-type: none;
`;

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  padding: 2rem;
`;

const ActionContainer = styled.ul`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;

const Action = styled.li`
  padding: 0 1rem;
  display: flex;
  flex-wrap: wrap;
  /* text-align: center; */
  align-content: center;
      transition:background-color .2s;
      border-radius:10px;
    &:hover{
      padding:1rem;
      border-radius:10px;
      background-color:#000;
    }
`;

function Navbar() {
  return (
    <NavContainer>
      <Wrapper>
        <Logo src={logoImg} ></Logo>

        <ActionContainer>
          <NavButtonContainer>
            <Action>
              <Link to="/">HOME</Link>
            </Action>
            <Action>
              <Link to="/game">GAME</Link>
            </Action>
            <Action>
              <Link to="/about">ABOUT</Link>
            </Action>
            <Action>
              <Link to="/login">LOGIN</Link>
            </Action>
          </NavButtonContainer>
        </ActionContainer>
      </Wrapper>
    </NavContainer>
  );
}

export default Navbar;
