import React, { Fragment ,useState,useEffect} from 'react'
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

export default function Information({ formProps: { register, errors }, data,callback }) {
  const classes = useStyles()
  const { firstName, lastName, name } = data[0]
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
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={1}>
          <Grid container direction="row" spacing={1}>
            <Grid item md={12} xs={12}>
              <Grid item md={12} xs={12}>
                <TextField
                autoFocus
                  id="name"
                  label="Name"
                  name="name"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                  inputRef={register}
                  error={!!errors.name}
                  defaultValue={values.name}
                  // value={values.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <p className={classes.errorMessage}>{errors.name.message}</p>
                )}
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={12} xs={12}>
            <TextField
              id="firstName"
              label="Firstname"
              name="firstName"
              className={classes.textField}
              margin="normal"
              variant="outlined"
              inputRef={register}
              error={!!errors.firstName}
              defaultValue={values.first_name}
              // value={values.first_name}
            onChange={handleChange}
            />
            {errors.firstName && (
              <p className={classes.errorMessage}>{errors.firstName.message}</p>
            )}
          </Grid>
          <Grid item md={12} xs={12}>
            <TextField
              id="lastName"
              label="Lastname"
              name="lastName"
              className={classes.textField}
              margin="normal"
              variant="outlined"
              inputRef={register}
              error={!!errors.lastName}
              defaultValue={values.last_name}
              // value={values.last_name}
            onChange={handleChange}
            />
            {errors.lastName && (
              <p className={classes.errorMessage}>{errors.lastName.message}</p>
            )}
          </Grid>
        </Grid>
      </div>
    </Fragment>
  )
}
