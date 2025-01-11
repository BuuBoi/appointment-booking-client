import React from "react";
import { Building2, Map, Stethoscope } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const DoctorCard = ({ doctor }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/doctors/${doctor.id}`);
  };
  const address = doctor.address;
  const formatAddress = address
    ? `${address.ward}-${address.district}-${address.province}`
    : "Địa chỉ chưa cập nhật";
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex gap-4">
        <img
          src={doctor.profilePicture || "https://via.placeholder.com/150"}
          alt={doctor.fullName}
          className="w-32 h-32 rounded-lg object-cover"
        />
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">
            {doctor.fullName}
          </h3>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Map className="w-5 h-5 text-gray-500" />
              <span>{formatAddress}</span>
            </div>

            <div className="flex items-center gap-2">
              <Stethoscope className="w-5 h-5 text-gray-500" />
              <span>
                {typeof doctor.specialization === "object"
                  ? doctor.specialization?.title || "Chưa cập nhật chuyên môn"
                  : doctor.specialization || "Chưa cập nhật chuyên môn"}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5 text-gray-500" />
              <span>{doctor.hospitalName}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end justify-between">
          <div className="text-gray-800">
            {doctor.yearsOfExperience} năm kinh nghiệm
          </div>
          <button
            onClick={handleClick}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Đăng ký khám
          </button>
        </div>
      </div>
    </div>
  );
};
