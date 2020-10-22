import React, { useState, createContext } from "react";

export const StoreContext = createContext({})

export const StoreContextProvider = ({ children }) => {
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
  const store = {
    information: [information, setInformation],
    account: [account, setAccount],
    address: [address, setAddress]
  }
  console.log(store)
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

