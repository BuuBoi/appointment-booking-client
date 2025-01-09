import React, { createContext, useContext, useEffect, useState } from "react";


const DoctorFormContext = createContext();

export const DoctorFormProvider = ({ children }) => {
    const [doctorData, setDoctorData] = useState({});

    // Hàm cập nhật dữ liệu
    const updateDoctorData = (newData) => {
      setDoctorData((prevData) => ({
        ...prevData,
        ...newData,
      }));
    };

    console.log("DoctorFormContext: ", doctorData);
  
    return (
      <DoctorFormContext.Provider
        value={{ doctorData, updateDoctorData }}
      >
        {children}
      </DoctorFormContext.Provider>
    );
  };

  // Hook để sử dụng Context
export const useDoctorForm = () => {
    return useContext(DoctorFormContext);
  };