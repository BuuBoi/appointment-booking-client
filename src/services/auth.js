import axiosConfig from "../axiosConfig";

export const apiRegister = async (data) => {
  console.log(data); // data: {email, password} hoac co the truyen email, password truc tiep
  try {
    const response = await axiosConfig({
      method: "POST",
      url: "/api/register",
      data: data,
    });
    
    if (response.status === 200) {
      return response.data;
    }
    throw new Error(response.data?.message || "Registration failed");
  } catch (error) {
    if (error.response) {
      //Yêu cầu đã được thực hiện và máy chủ phản hồi bằng mã trạng thái
      //nằm ngoài phạm vi 2xx
      throw new Error(error.response.data?.message || "Registration failed");
    } else if (error.request) {
      // Yêu cầu đã được thực hiện nhưng không nhận được phản hồi
      throw new Error("No response from server");
    } else {
      // Có điều gì đó đã xảy ra khi thiết lập yêu cầu gây ra Lỗi
      throw new Error("Error setting up the request");
    }
  }
};

export const apiLogin = async (data) => {
  try {
    const response = await axiosConfig({
      method: "POST",
      url: "/api/auth/token",
      data: data,
    });
    if (response.status === 200) {
      localStorage.setItem('token', response.data.data.token);
      return response.data;
    }
    throw new Error(response.data?.message || "Login failed");
  } catch (error) {
    throw new Error("Login failed");
  }
};

export const getProfile = async () => {
  try {
    const response = await axiosConfig({
      method: "GET",
      url: "/api/users/my-profile",
    });
    if (response.status === 200) {
      return response.data;
    }
    throw new Error(response.data?.message || "Get profile failed");
  } catch (error) {
    throw new Error("Get profile failed");
  }
}
