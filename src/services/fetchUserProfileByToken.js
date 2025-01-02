import { getProfile } from "./auth";
export const fetchProfile = async ( navigate) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }
      const respone = await getProfile();
      return respone.data;
    } catch (error) {
      console.error("Error fetching profile:", error);
      // Handle error - có thể token hết hạn
      localStorage.removeItem("token");
      navigate("/login");
    }
  };