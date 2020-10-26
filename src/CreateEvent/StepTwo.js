import React, { Fragment } from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

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

export default function Account({ formProps : { register, errors }, data }) {
  const classes = useStyles()
  const { email, description, username, password, confirmPassword } = data[0]

  return (
    <Fragment>
      <div className={classes.root}>
        <Grid item md={12} xs={12}>
          <TextField
            id="username"
            label="Total"
            name="username"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            inputRef={register}
            error={!!errors.username}
            defaultValue={username}
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
              id="description"
              label="Description"
              name="description"
              className={classes.textField}
              margin="normal"
              variant="outlined"
              inputRef={register}
              error={( errors.description === undefined ? false : true )}
              defaultValue={description}
              helperText={errors.description && String(errors.description.message)}
            />
            {errors.description && (
              <p className={classes.errorMessage}>{errors.description.message}</p>
            )}
          </Grid>
      </Grid>
      </div>
    </Fragment>
  )
}
