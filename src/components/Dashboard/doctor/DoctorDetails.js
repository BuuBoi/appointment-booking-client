import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AppointmentDetails from "../../components/Dashboard/appointment/AppointmentDetails";
import { getAppointmentByPatient } from "../../../services/appointment";
import AppointmentCard from "../appointment/AppointmentCard";
import { getMyPatient } from "../../../services/doctorProfile";
import { set } from "date-fns";

export default function DoctorDetails() {
  const [doctors, setDoctors] = useState({});
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMyPatient();
        setDoctors(response);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };
    fetchData();
  }, [param]);
  console.log(doctors);
  return (
    <div className="w-full h-full bg-white rounded-xl shadow-lg overflow-hidden">
    <div className="h-[500px] overflow-y-auto custom-scrollbar mt-5">
      {doctors.map((patient, index) => (
        <div key={index}>
          <AppointmentCard
          appointment={patient}
          isActive= {true}
        />
        </div>
      ))}
    </div>
  </div>
  );
}
