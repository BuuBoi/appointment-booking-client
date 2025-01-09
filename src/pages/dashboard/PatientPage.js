import React, { useEffect } from "react";
import PanelHeader from "./../../components/Dashboard/appointment/PanelHeader";
import ListPanel from "./../../components/Dashboard/appointment/ListPanel";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useUserProfile } from "../../context/userProfileContext";
import { getAppointmentByDoctorId } from "./../../services/appointment";
import PatientList from "../../components/Dashboard/patient/PatientList";
import { getMyPatient } from "../../services/doctorProfile";
import toast from "react-hot-toast";

export default function PatientPage() {
  const { userProfile } = useUserProfile();
  const doctorId = userProfile?.id;
  const [patinents, setPatients] = React.useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getMyPatient(doctorId);
        setPatients(res);
        // const uniquePatients = appointments
        //   .filter((appointment) => appointment.status === "ACCEPTED")
        //   .map((appointment) => {
        //     return {
        //       id: appointment.userId,
        //       name: appointment.fullName,
        //       email: appointment.email,
        //       phone: appointment.phone,
        //       address: appointment.address,
        //       gender: appointment.gender,
        //       dob: appointment.dob,
        //       occupation: appointment.occupation,
        //     };
        //   })
        //   .reduce((acc, current) => {
        //     const isDuplicate = acc.some(
        //       (patient) =>
        //         patient.id === current.id &&
        //         patient.email === current.email &&
        //         patient.name === current.name
        //     );
        //     if (!isDuplicate) {
        //       acc.push(current);
        //     }
        //     return acc;
        //   }, []);
        // setPatients(uniquePatients);
      } catch (error) {
        toast.error("Error fetching patients");
        console.error("Error fetching patients:", error);
      }
    };
    fetchData();
  }, [doctorId]);
  console.log(patinents);
  return (
      <div>
          <PanelHeader appointments={patinents.length} title = "Patients"/>
          <div className='grid grid-cols-5'>
              <div className='col-span-2'>
                  <PatientList patients={patinents}/>
              </div>
              <div className='col-span-3 w-full h-full bg-white rounded-xl shadow-lg overflow-hidden'>
              <Outlet />
              </div>
          </div>
      </div>
    )
}
