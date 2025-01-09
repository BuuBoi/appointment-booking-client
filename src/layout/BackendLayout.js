import Navbar from "../components/Dashboard/NavBar";
import React, {useEffect} from "react";
import Sidebar from "../components/Dashboard/SideBar";
import { Outlet, useLocation } from "react-router-dom";
import { UserProfileProvider } from "../context/userProfileContext";
import { useUserProfile } from "../context/userProfileContext";
import { useDoctorForm } from "../context/DoctorFormContext";

const BackendLayout = () => {
  const {userProfile} = useUserProfile();
  console.log(userProfile);
  const location = useLocation();
  const { updateDoctorData } = useDoctorForm();
  useEffect(() => {
    // Nếu đang ở route onboarding thì set data vào context
    if (location.pathname.includes('/onboarding')) {
      updateDoctorData(userProfile);
    }
  }, [location.pathname]);

  return (
    
      <div>
      <Navbar  />
      <div className="flex">
        <Sidebar/>
        <Outlet/>
      </div>
    </div>

    
  );
};

export default BackendLayout;
