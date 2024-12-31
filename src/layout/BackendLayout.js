import Navbar from "../components/Dashboard/NavBar";
import React from "react";
import Sidebar from "../components/Dashboard/SideBar";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getProfile } from "../services/auth";
import { useEffect } from "react";
import { UserProfileProvider } from "../context/userProfileContext";

const BackendLayout = () => {
  // const navigate = useNavigate();
  // const [userProfile, setUserProfile] = React.useState(null);
  // useEffect(() => {
  //   const fetchProfile = async () => {
  //     try {
  //       const token = localStorage.getItem("token");
  //       if (!token) {
  //         navigate("/login");
  //         return;
  //       }
  //       const respone = await getProfile();
  //       setUserProfile(respone.data);
  //       console.log(respone.data);
  //     } catch (error) {
  //       console.error('Error fetching profile:', error);
  //       // Handle error - có thể token hết hạn
  //       localStorage.removeItem('token');
  //       navigate('/login');
  //     }
  //   };

  //   fetchProfile();
  // }, []);

  // if (!userProfile) {
  //   return <div>Loading...</div>;
  // }

  return (
    <UserProfileProvider>
      <div>
      <Navbar  />
      <div className="flex">
        <Sidebar/>
        <Outlet/>
      </div>
    </div>
    {/* <div>
      <Navbar userProfile={userProfile} />
      <div className="flex">
        <Sidebar useRole={userProfile.role}/>
        <Outlet context={userProfile}/>
      </div>
    </div> */}
    </UserProfileProvider>
  );
};

export default BackendLayout;
