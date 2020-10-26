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
  
  const { game } = data[0]

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
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Gender
              </InputLabel>
              <Select
                // native
                id='game'
                label="None"
                name="game"
                inputRef={register}
                error={!!errors.game}
                >
                
                <MenuItem value={"League of Legends"}>League of Legends</MenuItem>
                <MenuItem value={"Rainbow six Sige"}>Rainbow six Sige</MenuItem>
                <MenuItem value={"DOTA"}>DOTA</MenuItem>
                <MenuItem value={"PUBG"}>PUBG</MenuItem>
                <MenuItem value={"Overwatch"}>Overwatch</MenuItem>
                <MenuItem value={"Death by Daylight"}>Death by Daylight</MenuItem>
              </Select>
            </FormControl>
            {errors.game && (
              <p className={classes.errorMessage}>{errors.game.message}</p>
            )}
          </Grid>
        </Grid>
      </div>
    </Fragment>
  )
}