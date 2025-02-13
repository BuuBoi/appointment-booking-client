import axiosConfig from './../axiosConfig';

export const createSymptom = async (data) => {
    try {
      const response = await axiosConfig({
        method: "POST",
        url: "/api/specials",
        data: data,
      });
      
      if (response.status === 201) {
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
  
  export const getAllSymptom = async() => {
    try{
        const response = await axiosConfig({
            method: "GET",
            url: "/api/specials",
          });
          if (response.status === 200) {
            return response.data;
          }else{
            throw new Error(response.data?.message || "failed");
          }
    }
    catch(error){
        if (error.response) {
            //Yêu cầu đã được thực hiện và máy chủ phản hồi bằng mã trạng thái
            //nằm ngoài phạm vi 2xx
            throw new Error(error.response.data?.message || "Registration failed");
          } else if (error.request) {
            // Yêu cầu đã được thực hiện nhưng không nhận được phản hồi
            throw new Error("No response from server");
          } else {
            // Có điều gì đó đã xảy ra khi thiết lập yêu c
            throw new Error("Error setting up the request");
          }
  }};

  export const updateSymptom = async (id, data) => {
    try {
      const response = await axiosConfig({
        method: "PUT",
        url: `/api/specials/${id}`,
        data: data,
      });
      
      if (response.status === 200) {
        return response.data;
      }
      throw new Error(response.data?.message || "Update failed");
    } catch (error) {
      if (error.response) {
        //Yêu cầu đã được thực hiện và máy chủ phản hồi bằng mã trạng thái
        //nằm ngoài phạm vi 2xx
        throw new Error(error.response.data?.message || "Update failed");
      } else if (error.request) {
        // Yêu cầu đã được thực hiện nhưng không nhận được phản hồi
        throw new Error("No response from server");
      } else {
        // Có điều gì đó đã xảy ra khi thiết lập
      }}};