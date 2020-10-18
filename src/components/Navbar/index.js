import React from 'react'
import {
  NavButtonContainer,
  NavContainer,
  Wrapper,
  Logo,
  ActionContainer,
  Action
} from './Styles'
import { Link } from 'react-router-dom'
import useScroll from '../../utils/useScroll'

function Navbar() {
  const isScroll = useScroll(20)
  
  return (
    <NavContainer isScroll={isScroll}>
      <Wrapper>
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
              <Link>LOGIN</Link>
            </Action>
          </NavButtonContainer>
        </ActionContainer>
      </Wrapper>
    </NavContainer>
  )
}

export default Navbar
