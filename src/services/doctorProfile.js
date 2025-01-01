import axiosConfig from "./../axiosConfig";
export const createDoctor = async (data) => {
  try {
    const response = await axiosConfig({
      method: "POST",
      url: "/api/doctors",
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

export const updateDoctor = async (id, data) => {
  try {
    const response = await axiosConfig({
      method: "PUT",
      url: `/api/doctors/${id}`,
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


export const getAllDoctors = async () => {
  try {
    const response = await axiosConfig({
      method: "GET",
      url: `/api/doctors`,
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