import React, { Fragment,useState,useEffect, } from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import RegisterAPI from '../services/RegisterApi'

const useStyles = makeStyles(theme => ({
  root: {
    margin: '-1rem 0 2rem 0',
    padding: '0 7rem',
    [theme.breakpoints.down('xs')]: {
      padding: '0'
    },
    [theme.breakpoints.down('md')]: {
      padding: '0'
    },
    marginTop: 'auto'
  },
  textField: {
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      width: '100%'
    }
  },
  errorMessage: {
    color: 'red',
    fontSize: '0.9rem',
    marginTop: '0.2rem'
  }
}))

export default function Account({ formProps : { register, errors }, data ,callback}) {
  const classes = useStyles()
  const { email, username, password, confirmPassword } = data[0]

  
  const [values, setValues] = useState({
    name:'',
    user_name:'',
    password:'',
    first_name:'',
    last_name:'',
    email:'',
    phone_number:'',
    age:'',
    birth_day:'',
    status:''

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
  return (
    <Fragment>
      <div className={classes.root}>
        <Grid item md={12} xs={12}>
          <TextField
            id="username"
            label="Username"
            name="username"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            inputRef={register}
            error={!!errors.username}
            defaultValue={values.user_name}
            // value={values.user_name}
            onChange={handleChange}
          />
          {errors.username && (
            <p className={classes.errorMessage}>{errors.username.message}</p>
          )}
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={1}>
          <Grid item md={12} xs={12}>
            <TextField
              id="email"
              label="Email"
              name="email"
              className={classes.textField}
              margin="normal"
              variant="outlined"
              inputRef={register}
              error={( errors.email === undefined ? false : true )}
              defaultValue={values.email}
              helperText={errors.email && String(errors.email.message)}
              // value={values.email}
            onChange={handleChange}
            />
            {errors.email && (
              <p className={classes.errorMessage}>{errors.email.message}</p>
            )}
          </Grid>
          <Grid item md={12} xs={12}>
            <TextField
              id="password"
              label="Password"
              name="password"
              className={classes.textField}
              margin="normal"
              variant="outlined"
              type="password"
              inputRef={register}
              error={!!errors.password}
              defaultValue={values.password}
              // value={values.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p className={classes.errorMessage}>{errors.password.message}</p>
            )}
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={1}>
          <Grid item md={12} xs={12}>
            <TextField
              id="confirm-password"
              label="Confirm Password"
              name="confirmPassword"
              className={classes.textField}
              margin="normal"
              variant="outlined"
              type="password"
              inputRef={register}
              error={!!errors.confirmPassword}
              defaultValue={confirmPassword}
            />
            {errors.confirmPassword && (
              <p className={classes.errorMessage}>
                {errors.confirmPassword.message}
              </p>
            )}
          </Grid>
        </Grid>
      </div>
    </Fragment>
  )
}
