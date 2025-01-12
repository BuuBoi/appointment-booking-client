import React, {useEffect} from "react";
import { useUserProfile } from "../../context/userProfileContext";
import { getAllPatients } from "../../services/patient";
import PanelHeader from "../../components/Dashboard/appointment/PanelHeader"; 
import PatientList from "../../components/Dashboard/patient/PatientList";
import { Outlet } from "react-router-dom";
import toast from "react-hot-toast";


export default function PatientOfAdminPage() {
  const { userProfile } = useUserProfile();
  console.log(userProfile);
  const role = userProfile?.role;
  console.log(role);
  const [patinents, setPatients] = React.useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getAllPatients();
        setPatients(res.data);
      } catch (error) {
        toast.error("Error fetching patients");
        console.error("Error fetching patients:", error);
      }
    };
    fetchData();
  }, []);
  console.log(patinents);
  // if (userProfile.role !== "ADMIN") {
  //   return <div>Access Denied</div>;
  // }
  return (
   (userProfile.role === "ADMIN") ?  <div>
   <PanelHeader appointments={patinents.length} title="Patients" />
   <div className="grid grid-cols-5">
     <div className="col-span-2">
       <PatientList patients={patinents} />
     </div>
     <div className="col-span-3 w-full h-full bg-white rounded-xl shadow-lg overflow-hidden">
       <Outlet />
     </div>
   </div>
 </div> : <div>Access Denied</div>
  );
}
