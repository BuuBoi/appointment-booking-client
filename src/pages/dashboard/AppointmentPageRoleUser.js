import React, { useEffect } from "react";
import { useUserProfile } from "../../context/userProfileContext";
import { getAppointmentByUserId } from "./../../services/appointment";
import PanelHeader from "./../../components/Dashboard/appointment/PanelHeader";
import ListPanel from "./../../components/Dashboard/appointment/ListPanel";
import { Outlet } from "react-router-dom";
export default function AppointmentPageRoleUser() {
  const { userProfile } = useUserProfile();
  const userId = userProfile?.id;
  console.log("userId", userId);
  const [appointments, setAppointments] = React.useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAppointmentByUserId(userId);
        console.log("response", response);
        setAppointments(response);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };
    fetchData();
  }, [userId]);
  return (
    <div>
      <PanelHeader appointments={appointments.length} />
      <div className="grid grid-cols-5">
        <div className="col-span-2">
          <ListPanel appointments={appointments} />
        </div>
        <div className="col-span-3 w-full h-full bg-white rounded-xl shadow-lg overflow-hidden">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
