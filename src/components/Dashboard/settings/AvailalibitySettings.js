import React, { useState, useEffect } from "react";
import DayScheduleDisplay from "./DayScheduleDisplay";
import TabDayOfWeek from "./TabDayOfWeek";
import { updateWeeklyAvailable } from "../../../services/weeklyAvailable";
import { useUserProfile } from "../../../context/userProfileContext";
import toast from "react-hot-toast";
import axios from "axios";

const AvailalibitySettings = () => {
  const defaultweeklyData = {
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: [],
  };
  const [activeDay, setActiveDay] = useState("monday");
  const [loading, setLoading] = useState(true);
  const [isUpdated, setIsUpdated] = useState(false);
  const [weeklyData, setWeeklyData] = useState(defaultweeklyData);
  const { userProfile } = useUserProfile();

  const doctorId = userProfile?.id; // get LocalStorage
  console.log(userProfile);
  useEffect(() => {
    const fetchWeeklySchedule = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:8080/DoctorCare/api/weekly-available/grouped`,
          {
            params: { doctorId },
          }
        );
        setWeeklyData(response.data.data); // Cập nhật dữ liệu lịch khám
      } catch (error) {
        console.error("Error fetching schedule:", error);
      } finally {
        setLoading(false); // Dừng trạng thái loading sau khi hoàn thành
      }
    };

    fetchWeeklySchedule();
  }, [doctorId]); // Đặt `doctorId` trong dependency array để theo dõi sự thay đổi
  const handleUpdateAPI = async () => {
      try{
        const response = await updateWeeklyAvailable(doctorId,weeklyData);
        if(response){
          setIsUpdated(false);
          toast.success("Cập nhật thành công");
        }
      }catch(error){
        toast.error("Cập nhật thất bại");
      }
  };
  //   // Gọi API cập nhật lịch khám
  //   try {
  //     const response = await fetch(
  //       `http://localhost:8080/DoctorCare/api/weekly-available/update?doctorId=${doctorId}`,
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(weeklyData),
  //       }
  //     );

  //     if (response.ok) {
  //       setIsUpdated(false); // Đặt lại trạng thái sau khi cập nhật thành công
  //       alert("Cập nhật thành công!");
  //     } else {
  //       alert("Cập nhật thất bại.");
  //     }
  //   } catch (error) {
  //     console.error("Error updating schedule:", error);
  //   }
  // };

  const getDaySchedule = (day) => {
    if (!weeklyData) return [];
    console.log(weeklyData[day]);
    return weeklyData[day] || [];
  };
  // Hàm xử lý cập nhật slots cho một ngày
  const handleUpdateSlots = (day, newSlots) => {
    setWeeklyData((prev) => ({
      ...prev,
      [day]: newSlots,
    }));
    setIsUpdated(true); // Đánh dấu là có sự thay đổi
  };

  //if (loading) return <div>Loading...</div>;

  return (
    <div>
      <TabDayOfWeek activeDay={activeDay} onDayChange={setActiveDay} />
      <DayScheduleDisplay
        slots={getDaySchedule(activeDay)}
        day={activeDay}
        onUpdateSlots={handleUpdateSlots}
      />
      {isUpdated && (
        <button
          onClick={handleUpdateAPI}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Cập nhật
        </button>
      )}
    </div>
  );
};
export default AvailalibitySettings;
