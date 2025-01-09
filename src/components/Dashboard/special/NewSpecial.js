import { Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";



export default function NewSpecial() {
    const navigate = useNavigate();
  return (
    <div className="border rounded-lg p-4 shadow-sm text-center bg-white">
      {/* Icon */}
      <div className="flex justify-center mb-2 text-gray-600">
        <Calendar size={32} />
      </div>

      {/* Thông tin tổng quát */}
      {/* <p className="text-lg font-medium">
        You have 6 service.
      </p> */}
      {/* <p className="text-sm text-gray-600">
        {newPatients} New Patients, {followUps} Follow Ups, {annualPhysicals} Annual Physicals
      </p> */}

      {/* Nút tạo cuộc hẹn mới */}
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition"
        onClick={() => navigate("/dashboard/admin/specials/new")}
      >
        + New Special
      </button>
    </div>
  );
}
