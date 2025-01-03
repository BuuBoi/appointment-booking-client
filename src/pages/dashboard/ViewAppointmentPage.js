import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAppointmentById } from "../../services/appointment";
import AppointmentDetails from "../../components/Dashboard/appointment/AppointmentDetails";

export default function ViewAppointmentPage() {
  const [appointment, setAppointment] = useState({});
  const param = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAppointmentById(param.id);
        setAppointment(response);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };
    fetchData();
  }, [param]);
  console.log(appointment);
  return (
    <div>
        <AppointmentDetails appointment={appointment}/>
    </div>
  );
}
