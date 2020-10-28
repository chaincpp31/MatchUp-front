import React,{useState,useEffect,useContext} from 'react'
import auth from '../firebase'
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
import Home from '../../pages/Home'
import { StoreContext } from '../../Context/store'

  


const Navbar = () => {
const {session:[session,setSession]} = useContext(StoreContext)

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await auth.signInWithEmailAndPassword(username, password);
      const { user } = response;

      setSession({
        isLoggedIn: true,
        currentUser: user
      });
    } catch (error) {
      setSession({
        isLoggedIn: false,
        currentUser: null,
        errorMessage: error.message
      });
    } setOpen(false)
  };
  const handleLogout = () => {
    auth.signOut().then(response => {
      setSession({
        isLoggedIn: false,
        currentUser: null
      })
    })
  };
  const handleRegister = async () => {
    try {
      const response = await auth.createUserWithEmailAndPassword(
        username,
        password
      )
      const { user } = response
      setSession({
        isLoggedIn: true,
        currentUser: user
      })
    } catch (error) {
      setSession({
        isLoggedIn: false,
        currentUser: null,
        errorMessage: error.essage
      })
    }
  }
  const handleUsername = event => {
    setUsername(event.target.value)
  }

  const handlePassword = event => {
    setPassword(event.target.value)
  }


  const BtnRgt = styled.span`
    color: blue;
  `
  const [open, setOpen] = React.useState(false)

   const DialogActions = styled.div`
     display: flex;
     justify-content: center;
     padding: 8px 24px;
   `

   const DialogContentText = styled.div`
     text-align: center;
   `
   const Context = styled.div`
     display: flex;
     flex-direction: column;
     justify-content: space-around;
     height: 55%;
   `
   const BannerWrap = styled.div`
     display: flex;
     img {
       width: 62%;
     }
   `
   const DialogWrapper = styled.div`
     width: 100%;
     padding: 4%;
     background-color: #dfcfaf;
     color: rgb(28, 29, 34);
   `
   const Button = styled.div`
     /* background-color: rgba(28, 29, 34, 1); */
     border: 1px solid #1c1d22;
     border-radius: 7px;
     padding: 20px 20px;
     color: #dfcfaf;
     font-size: 16px;
     text-align: center;
     font-weight: 700;
     width: 10%;
     margin: 0 2% 0 2%;
     transition: 0.2s;
     &:hover {
       color: #dfcfaf;
       background-color: rgba(28, 29, 34, 0.9);
       border: 1px solid #1c1d22;
     }
   `

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
            {session.isLoggedIn? (session.currentUser && session.currentUser.email):("") }
            <Action>
              <Link to="/">HOME</Link>
            </Action>
            <Action>
              <Link to="/about">ABOUT</Link>
            </Action>
            <Action>
              <Link
                onClick={session.isLoggedIn ? handleLogout : handleClickOpen}>
                {session.isLoggedIn ? 'Logout'  : 'Login'}
              </Link>
              {!session.isLoggedIn ? (
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="form-dialog-title">
                  {/* <DialogTitle id="form-dialog-title">Login</DialogTitle> */}
                  <DialogContent>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="username"
                      label="Username"
                      type="username"
                      onChange={handleUsername}
                      fullWidth
                    />
                    <TextField
                      margin="dense"
                      id="password"
                      label="Password"
                      type="password"
                      onChange={handlePassword}
                      fullWidth
                    />
                  </DialogContent>
                  <DialogActions>
                    <DialogContentText>
                      No account?{' '}
                      <Link
                        to="/register"
                        onClick={handleRegister}
                        color="blue">
                        <BtnRgt>register</BtnRgt>
                      </Link>
                    </DialogContentText>
                    <Button onClick={handleClose} color="primary">
                      <Link>Cancel</Link>
                    </Button>
                    <Button onClick={handleLogin} color="primary">
                      <Link>Login</Link>
                    </Button>
                  </DialogActions>
                </Dialog>
              ) : (
                ''
              )}
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
