import React, { Fragment,useState,useEffect,useCallback } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import StepperForm from './StepperForm'
import { green, red } from '@material-ui/core/colors'
import Container from '@material-ui/core/Container'
import RegisterAPI from '../services/RegisterApi'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  logo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0.5rem',
    color: '#745c97',
    fontWeight: 'bold',
    letterSpacing: '1rem'
  },
  border: {
    // border: '0.15rem solid #d597ce',
    borderRadius: '2px',
    padding: '2%',
    height: '0',
    width: '19rem',
    textAlign: 'center'
  },
  topLayout: {
    margin: '0rem 0',
    [theme.breakpoints.down('xs')]: {
      margin: '1rem 0'
    }
  },
  paperLayout: {
    padding: '2rem',
    [theme.breakpoints.up('md')]: {
      width: '35em'
    },
    marginTop: '10rem',
    margin: 'auto',
    border: '1px solid #ebedf0',
    borderRadius: '4px',
    [theme.breakpoints.down('xs')]: {
      marginTop: '3rem'
    }
  }
}))



export default function Register(callback) {
  const [values, setValues] = useState({
    name: '',
    user_name: '',
    password: '',
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    age: '',
    birth_day: '',
    status: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const handleChange = e => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value
    })
  }
  
  const handleSubmit = e => {
    e.preventDefault()
    console.log(values, '1')
    RegisterAPI(values)
    // console.log(values)
  }
  
  useEffect(() => {
    if (isSubmitting) {
      callback()
    }
  }, [])
  const classes = useStyles()
  return (
    <div 
      style={{
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <Fragment>
        <Container 
          onSubmit={handleSubmit}
          // component="div"
          style={{
            backgroundColor: 'black',
            height: '100vh',
            width: '100vw',
            margin: '0rem'
          }}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            className={classes.topLayout}>
            <Grid item md={11} xs={11}>
              <Paper
                className={classes.paperLayout}
                style={{
                  // backgroundColor: '#dcdfe3',
                  color: 'red'
                }}>
                <Grid container>
                  <Grid item md={12} xs={12}>
                    <div className={classes.logo}>
                      <div className={classes.border}>REGISTER</div>
                    </div>
                  </Grid>
                  <Grid item md={12} xs={12}>
                    <StepperForm />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Fragment>
    </div>
  )
}
