import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { StoreContext } from '../Context/store'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  backButton: {
    marginRight: theme.spacing(1)
  },
  nextButton: {
    backgroundColor: 'red'
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  buttonLayout: {
    marginLeft: '7rem',
    padding: '0 1rem 0 15rem',
    [theme.breakpoints.down('xs')]: {
      marginLeft: '0'
    }
  }
}))

const stepOneSchema = yup.object().shape({
  name: yup.string().required('This field is required.'),
  description: yup.string().required('This field is required.')
})

const stepTwoSchema = yup.object().shape({
  total: yup.string().required('This field is required.'),
  date: yup.string().required('This field is required.')
})

const stepThreeSchema = yup.object().shape({
  game: yup.string().required('This field is required.')
})

function getSteps() {
  return ['Step 1', 'Step 2', 'Step 3', 'Step 4']
}

export default function StepperForm() {
  const classes = useStyles()
  const { stepOne, stepTwo, stepThree } = useContext(StoreContext)
  const StepOneForm = useForm({
    validationSchema: stepOneSchema
  })

  const StepTwoForm = useForm({
    validationSchema: stepTwoSchema
  })

  const StepThreeForm = useForm({
    validationSchema: stepThreeSchema
  })

  const [activeStep, setActiveStep] = React.useState(0)
  const steps = getSteps()

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  const handleReset = () => {
    stepOne[1]({})
    stepTwo[1]({})
    stepThree[1]({})
    setActiveStep(0)
  }

  const onSubmit = data => {
    console.log(data)
    if (activeStep === 0) {
      stepOne[1](data)
    } else if (activeStep === 1) {
      stepTwo[1](data)
    } else if (activeStep === 2) {
      stepThree[1](data)
    }
    handleNext()
  }

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <StepOne formProps={StepOneForm} data={stepOne} />
      case 1:
        return <StepTwo formProps={StepTwoForm} data={stepTwo} />
      case 2:
        return <StepThree formProps={StepThreeForm} data={stepThree} />
      case 3:
        return 'Success'
      default:
        return 'Unknown stepIndex'
    }
  }

  return (
    <div className={classes.root}>
      <form
        onSubmit={
          activeStep === 0
            ? StepOneForm.handleSubmit(onSubmit)
            : activeStep === 1
            ? StepTwoForm.handleSubmit(onSubmit)
            : activeStep === 2
            ? StepThreeForm.handleSubmit(onSubmit)
            : activeStep === 3
        }>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div className={classes.buttonLayout}>
              <Typography className={classes.instructions}>
                All steps completed
              </Typography>
              <Button variant="contained" color="primary" onClick={handleReset}>
                Reset
              </Button>
            </div>
          ) : (
            <div>
              <div className={classes.instructions}>
                {getStepContent(activeStep)}
              </div>
              <div className={classes.buttonLayout}>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.backButton}
                  variant="outlined">
                  Back
                </Button>
                <Button
                  variant="contained"
                  className={classes.nextButton}
                  color="primary"
                  type="submit">
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  )
}
