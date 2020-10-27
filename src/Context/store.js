import React, { useState, createContext,useEffect } from "react";
import auth from '../components/firebase'

export const StoreContext = createContext({})

export const StoreContextProvider = ({ children }) => {
const [session,setSession] = useState({
          isLoggedIn: false,
          currentUser: "",
          errorMessage: null
})
useEffect(() => {
    const handleAuth = auth.onAuthStateChanged(user => {
      if (user) {
        setSession({
          isLoggedIn: true,
          currentUser: user,
          errorMessage: null
        });
      }
    });

    return () => {
      handleAuth();
    };
  }, []);



  const [information, setInformation] = useState({
    firstName: undefined,
    lastName: undefined,
    name: undefined
  })


  const [account, setAccount] = useState({
    username: undefined,
    email: undefined,
    password: undefined,
    confirmPassword: undefined
  })


  const [address, setAddress] = useState({
    phone: undefined,
    birth: undefined,
    age: undefined,
    gender: undefined
  })

  const [stepOne,setStepOne] = useState({
    name: undefined,
    description: undefined
  })

  const [stepTwo,setStepTwo] = useState({
    total: undefined,
    date: undefined
  })

  const store = {
    information: [information, setInformation],
    account: [account, setAccount],
    address: [address, setAddress],
    stepOne: [stepOne, setStepOne],
    stepTwo: [stepTwo, setStepTwo],
    session: [session,setSession]
  }
  console.log(store)


  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

