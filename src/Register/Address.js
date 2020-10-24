import React, { Fragment } from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import { MenuItem } from '@material-ui/core'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'

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
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Account({ formProps: { register, errors }, data }) {
  const classes = useStyles()
  const { phone, birth, age, gender } = data[0]

  return (
    <Fragment>
      <div className={classes.root}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={1}>
          <Grid item md={12} xs={12}>
            <TextField
              id="phone"
              label="Phone"
              name="phone"
              className={classes.textField}
              margin="normal"
              variant="outlined"
              inputRef={register}
              error={!!errors.phone}
              defaultValue={phone}
            />
            {errors.phone && (
              <p className={classes.errorMessage}>{errors.phone.message}</p>
            )}
          </Grid>
          <Grid item md={12} xs={12}>
            <TextField
              id="birth"
              label="Birth Day"
              name="birth"
              className={classes.textField}
              margin="normal"
              variant="outlined"
              inputRef={register}
              error={!!errors.birth}
              defaultValue={birth}
            />
            {errors.birth && (
              <p className={classes.errorMessage}>{errors.birth.message}</p>
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
              id="age"
              label="Age"
              name="age"
              className={classes.textField}
              margin="normal"
              variant="outlined"
              inputRef={register}
              error={!!errors.age}
              defaultValue={age}
            />
            {errors.age && (
              <p className={classes.errorMessage}>{errors.age.message}</p>
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
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Gender
              </InputLabel>
              <Select
                // native
                id='gender'
                label="Gender"
                name="gender"
                inputRef={register}
                error={!!errors.gender}
                >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"Male"}>Male</MenuItem>
                <MenuItem value={"Female"}>Female</MenuItem>
              </Select>
            </FormControl>
            {errors.gender && (
              <p className={classes.errorMessage}>{errors.gender.message}</p>
            )}
          </Grid>
        </Grid>
      </div>
    </Fragment>
  )
}