import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { green, red } from '@material-ui/core/colors'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import auth from './firebase'



class LoginForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      message: '',
      currentUser: null
    }
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({
          currentUser: user
        })
      }
    })
  }

  onChange = e => {
    const { name, value } = e.target

    this.setState({
      [name]: value
    })
  }

  onSubmit = e => {
    e.preventDefault()

    const { email, password } = this.state
    auth
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        this.setState({
          currentUser: response.user
        })
      })
      .catch(error => {
        this.setState({
          message: error.message
        })
      })
  }

  logout = e => {
    e.preventDefault()
    auth.signOut().then(response => {
      this.setState({
        currentUser: null
      })
    })
  }

  render() {
    const { message, currentUser } = this.state

    if (currentUser) {
      return (
        <div>
          <p>Hello {currentUser.email}</p>
          <button onClick={this.logout}>Logout</button>
        </div>
      )
    }

    return (



            
                  <form onSubmit={this.onSubmit}>
                    <div className="field">
                      <label className="label">Email</label>
                      <div className="control">
                        <input
                          className="input"
                          type="email"
                          name="email"
                          onChange={this.onChange}
                        />
                      </div>
                    </div>

                    <div className="field">
                      <label className="label">Password</label>
                      <div className="control">
                        <input
                          className="input"
                          type="password"
                          name="password"
                          onChange={this.onChange}
                        />
                      </div>
                    </div>

                    {message ? <p className="help is-danger">{message}</p> : null}

                    <div className="field is-grouped">
                      <div className="control">
                        <button className="button is-link">Submit</button>
                      </div>
                      <div className="control">
                        <button className="button is-text">Cancel</button>
                      </div>
                    </div>
                  </form>
              
    )
  }
}

export default LoginForm
