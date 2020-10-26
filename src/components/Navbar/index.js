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
import Button from '@material-ui/core/Button'

import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import styled from 'styled-components'

function Navbar() {
  const BtnRgt = styled.span`
    color: blue;
  `
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

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
              <Link onClick={handleClickOpen}>LOGIN</Link>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Login</DialogTitle>
                <DialogContent>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="username"
                    label="Username"
                    type="username"
                    fullWidth
                  />
                  <TextField
                    margin="dense"
                    id="password"
                    label="Password"
                    type="password"
                    fullWidth
                  />
                </DialogContent>
                <DialogActions>
                  <DialogContentText>
                    Are you have account?{' '}
                    <Link to="/register" onClick={handleClose} color="blue">
                      <BtnRgt>register</BtnRgt>
                    </Link>
                  </DialogContentText>
                  <Button onClick={handleClose} color="primary">
                    Cancel
                  </Button>
                  <Button onClick={handleClose} color="primary">
                    Login
                  </Button>
                </DialogActions>
              </Dialog>
            </Action>
              <Action>
                <Link to="/CreateEvent">Create</Link>
              </Action>
          </NavButtonContainer>
        </ActionContainer>
      </Wrapper>
    </NavContainer>
  )
}

export default Navbar
