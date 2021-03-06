import React, {useContext,useState,useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Information from './Information'
import Account from './Account'
import Address from './Address'
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {StoreContext} from '../Context/store'
import auth from '../components/firebase'
import RegisterAPI from '../services/RegisterApi'

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

const informationSchema = yup.object().shape({
  firstName: yup.string().required('This field is required.'),
  lastName: yup.string().required('This field is required.'),
  name: yup.string().required('This field is required.'),
});

const accountSchema = yup.object().shape({
  username: yup.string().required('This field is required.'),
  email : yup.string().email('Invalid email.').required('This field is required.'),
  password: yup.string().required('This field is required.').min(3, 'Please Enter less then 3 letters'),
  confirmPassword: yup.string().required('This field is required.').min(3, 'This field at least 3 characters.').oneOf([yup.ref('password'), null], 'Password not match.')
});

const addressSchema = yup.object().shape({
  phone: yup.number().required('This field is required phone number.'),
  birth: yup.string().required('This field is required'),
  age: yup.number().required('This field is required age'),
  gender: yup.string().required('This field is required to select'),
});


  
function getSteps  () {
  return ['Step 1', 'Step 2','Step 3','Step 4']
}

export default function StepperForm(callback) {
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
  const { information, account, address} = useContext(StoreContext)
  const informationForm = useForm({
    validationSchema: informationSchema
  })

  const accountForm = useForm({
    validationSchema: accountSchema
  })

  const addressForm = useForm({
    validationSchema: addressSchema
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
    information[1]({})
    account[1]({})
    address[1]({})
    setActiveStep(0)
  }

  const onSubmit = data => {
    console.log(data)
    if (activeStep === 0) {
      information[1](data)
    } else if (activeStep === 1) {
      account[1](data)
    } else if (activeStep === 2) {
      address[1](data)
    }
    handleNext()
  }

  function getStepContent (stepIndex) {

    switch (stepIndex) {
      case 0:
        return <Information formProps={informationForm} data={information} />
      case 1:
        return <Account formProps={accountForm} data={account} />
      case 2:
        return <Address formProps={addressForm} data={address}/>
        case 3:
          return "Success"
      default:
        return 'Unknown stepIndex';
    }
  }

  return (
    <div className={classes.root}>
      <form
        onSubmit={
          handleSubmit,
          activeStep === 0
            ? informationForm.handleSubmit(onSubmit)
            : activeStep === 1
            ? accountForm.handleSubmit(onSubmit)
            : addressForm.handleSubmit(onSubmit)
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
               Completed press reset and back to Home page
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