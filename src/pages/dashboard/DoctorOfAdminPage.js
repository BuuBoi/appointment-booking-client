import React, { useEffect } from "react";
import { useUserProfile } from "../../context/userProfileContext";
import { getAllPatients } from "../../services/patient";
import PanelHeader from "../../components/Dashboard/appointment/PanelHeader";
import PatientList from "../../components/Dashboard/patient/PatientList";
import { Outlet } from "react-router-dom";
import toast from "react-hot-toast";
import { getAllDoctors, getAllDoctorsSort } from "../../services/doctorProfile";
import { TransactionList } from "../../components/Dashboard/Transactions/TransactionList";
import DoctorList from "../../components/Dashboard/doctor/DoctorList";

export default function DoctorOfAdminPage() {
  const { userProfile } = useUserProfile();
  console.log(userProfile);
 const [doctors, setDoctors] = React.useState([]);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getAllDoctors();
        setDoctors(res.data);
      } catch (error) {
        toast.error("Error fetching patients");
        console.error("Error fetching patients:", error);
      }
    };
    fetchData();
  }, []);
  console.log(doctors);
  return (
    <div>
      
      <div className="grid grid-cols-3">
        <div className="col-span-1">
        <PanelHeader appointments={doctors.length} title="Doctors" />
          <DoctorList doctors={doctors} />
        </div>
        <div className="col-span-2 w-full h-full bg-white rounded-xl shadow-lg overflow-hidden">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
