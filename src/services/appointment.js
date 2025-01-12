import axiosConfig from "../axiosConfig"
export const createAppointment = async (data) => {
    try {
      const response = await axiosConfig({
        method: "POST",
        url: "/api/appointments",
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

  export const getAppointmentByDoctorId = async (id) => {
    try {
      const response = await axiosConfig({
        method: "GET",
        url: `/api/appointments/doctor/${id}`,
      });
      if (response.status === 200) {
        return response.data;
      }
      throw new Error(response.data?.message || "Get profile failed");
    } catch (error) {
      throw new Error("Get profile failed");
    }
  };

  export const getAppointmentById = async (id) => {
    try {
      const response = await axiosConfig({
        method: "GET",
        url: `/api/appointments/${id}`,
      });
      if (response.status === 200) {
        return response.data;
      }
      throw new Error(response.data?.message || "Get profile failed");
    } catch (error) {
      throw new Error("Get profile failed");
    }
  };

  export const updateAppointment = async (id, data) => {
    try {
      const response = await axiosConfig({
        method: "PUT",
        url: `/api/appointments/${id}`,
        data: data,
      });
      if (response.status === 200) {
        return response.data;
      }
      throw new Error(response.data?.message || "Update profile failed");
    } catch (error) {
      throw new Error("Update profile failed");
    }
  }

  export const getAppointmentByPatient= async (patientId) => {
    try {
      const response = await axiosConfig({
        method: "GET",
        url: `/api/appointments/patient/${patientId}`,
      });
      if (response.status === 200) {
        return response.data;
      }
      throw new Error(response.data?.message || "Get profile failed");
    } catch (error) {
      throw new Error("Get profile failed");
    }
  };

  export const getAllAppointment= async () => {
    try {
      const response = await axiosConfig({
        method: "GET",
        url: `/api/appointments`,
      });
      if (response.status === 200) {
        return response.data;
      }
      throw new Error(response.data?.message || "Get profile failed");
    } catch (error) {
      throw new Error("Get profile failed");
    }
  };

 export const getAppointmentByDoctorIdAndPatientId = async (doctorId, patientId) => {
    try {
      const response = await axiosConfig({
        method: "GET",
        url: `/api/appointments/doctor/${doctorId}/patient/${patientId}`,
      });
      if (response.status === 200) {
        return response.data;
      }
      throw new Error(response.data?.message || "Get profile failed");
    } catch (error) {
      throw new Error("Get profile failed");
    }
  }
 

  