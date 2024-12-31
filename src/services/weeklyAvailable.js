import axiosConfig from "../axiosConfig";

export const updateWeeklyAvailable = async (doctorId, data) => {
    try {
        const response = await axiosConfig({
        method: "POST",
        url: `/api/weekly-available/update?doctorId=${doctorId}`,
        data: data,
        });
    
        if (response.status === 200) {
        return response.data;
        }
        throw new Error(response.data?.message || "Update failed");
    } catch (error) {
        if (error.response) {
        throw new Error(error.response.data?.message || "Update failed");
        } else if (error.request) {
        throw new Error("No response from server");
        } else {
        throw new Error("Error setting up the request");
        }
    }
}