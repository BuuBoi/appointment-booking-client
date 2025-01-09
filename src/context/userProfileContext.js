import React, { createContext } from "react";
import { getProfile } from "../services/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


//tao context
const UserConext = createContext();

//custom hook
export const useUserProfile = () => {
  const context = React.useContext(UserConext);
  if (!context) {
    throw new Error("useUserProfile must be used within a UserProfileProvider");
  }
  return context;
};
//tao provider
export const UserProfileProvider = ({ children , requireAuth = true}) => {
  const [userProfile, setUserProfile] = React.useState(null);
  const navigate = useNavigate();
  const fetchProfile = async (shouldRedirect = requireAuth) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        if (shouldRedirect) {
        navigate("/login");}
        return;
      }
      const respone = await getProfile();

      setUserProfile(respone.data);
      console.log(respone.data);
    } catch (error) {
      console.error("Error fetching profile:", error);
      // Handle error - có thể token hết hạn
      localStorage.removeItem("token");
      if (shouldRedirect) {
      navigate("/login");}
    }
  };
  // Thêm useEffect để gọi fetchProfile khi mount
  useEffect(() => {
    fetchProfile();
  }, [navigate]);

  const value = {
    userProfile,
    setUserProfile,
    fetchProfile,
  };

  return <UserConext.Provider value={value}>{children}</UserConext.Provider>;
};
