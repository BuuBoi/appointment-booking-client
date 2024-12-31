import React from 'react'
import { createContext } from 'react'
import { useState, useContext } from 'react'

//context => global state management
//steps to create context
//1. create context
//2. define shape of the data
//3. define the initial data

//truckingNumber, doctorProfileID


const OnboardingContext = createContext();

const initial = {
    truckingNumber: "",
    doctorProfileID: "",
    setTruckingNumber: () => {},
    setDoctorProfileID: () => {}

}

export default function OnboardingContextProvider({children}) {
    const [truckingNumber, setTruckingNumber] = useState("");
    const [doctorProfileID, setDoctorProfileID] = useState("");
    const value = {
        truckingNumber,
        doctorProfileID,
        setTruckingNumber,
        setDoctorProfileID
    }
    // const updateDoctorProfileID = (id) => { //viet code nay doi voi ham can tham so
    //     setDoctorProfileID(prev => ({
    //         ...prev,
    //         doctorProfileID: id
    //     }))
    // }

  return <OnboardingContext.Provider value={value}>{children}</OnboardingContext.Provider>;
}

export const useOnboardingContext = () => {
    return useContext(OnboardingContext)
}
