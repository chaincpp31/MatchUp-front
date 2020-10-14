import React from "react";
import { Link } from "react-router-dom";
// import routes from "./config/routes";
import styled from "styled-components";


const NavContainer = styled.div`
background-color: #FF0000;
width: 100vw;
height: 10vh;
position: fixed;
    display: flex;
    padding: 0rem;
    margin: 0rem;
    justify-content: space-between;
    align-items: center;
    `

    const Logo = styled.div`
    display: flex;
    padding: 2rem;
    margin-left: 2rem;
    background-color: #000;
    `
    // const NavButton = styled.div`
    //   color: #fff;
    //   padding: 0 3rem 0 3rem;
    // `

    const NavButtonContainer = styled.div`
      display: flex;
      text-align: center;
      list-style-type: none;
    `

    const Wrapper = styled.div`
      display: flex;
      flex: 1;
      padding: 2rem;
    `;

    const ActionContainer = styled.ul`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`

    const Action = styled.li`
  padding: 0 1rem;
  display: flex;
  flex-wrap: wrap;
  /* text-align: center; */
  align-content: center;
`


function Navbar(){
    return (
      <NavContainer>
        <Wrapper>
          <Logo />
          <ActionContainer>
            <NavButtonContainer>
              <Action>
                <Link to="/">Home</Link>
              </Action>
              <Action>
                <Link to="/game">Game</Link>
              </Action>
              <Action>
                <Link to="/about">About</Link>
              </Action>
              <Action>
                <Link to="/login">Login</Link>
              </Action>
              
            </NavButtonContainer>
          </ActionContainer>
        </Wrapper>
      </NavContainer>
    );
}

export default Navbar;