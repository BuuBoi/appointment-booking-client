import React from "react";
import PanelHeader from "../../components/Dashboard/appointment/PanelHeader";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAppointmentByDoctorId } from "../../services/appointment";
import AppointmentCard from "../../components/Dashboard/appointment/AppointmentCard";
import { getDoctorById, updateDoctorActive } from "../../services/doctorProfile";
import DoctorStatusDialog from "../../components/ui/DoctorStatusDialog";

export default function ViewDoctorOfAdmin() {
  const [appointments, setAppointments] = useState([]);
  const [doctor, setDoctor] = useState({});
  const [activeTab, setActiveTab] = useState("appointment");
  const [isStatusDialogOpen, setIsStatusDialogOpen] = useState(false);
  const param = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAppointmentByDoctorId(param.id);
        const doctor = await getDoctorById(param.id);
        setAppointments(response);
        setDoctor(doctor);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };
    fetchData();
  }, [param]);
  console.log(doctor);

  const handleStatusUpdate = async (newStatus) => {
    console.log(newStatus);
    try {
      // Call your API here with the doctor ID and new status
      // await updateDoctorStatus(doctor.id, newStatus);
      await updateDoctorActive(doctor.id, newStatus);
      setDoctor(prev => ({ ...prev, active: newStatus }));
      window.location.reload();
    } catch (error) {
      console.error("Error updating doctor status:", error);
    }
  };

  const address = doctor.address;
  const formatAddress = address
    ? `${address.ward}-${address.district}-${address.province}`
    : "Địa chỉ chưa cập nhật";
  return (
    <div className="w-full h-full bg-white rounded-xl  overflow-hidden">
      <div className="flex items-center justify-between border-b-2 ml-4 mr-4 ">
        <div>
          <h2 className="scrollbar-m-20 border-b pb-2 text-2xl font-semibold tracking-tighter first:mt-0 ">
            {doctor.fullName}
          </h2>
          <h2 className="border-b pb-3 mb-3">
            {doctor.emailAddress} | {doctor.phone}
          </h2>
        </div>
        <div>
          <button
          onClick={() => setIsStatusDialogOpen(true)}
            className={` px-1 rounded-md ${
              doctor.active === true ? "bg-green-500" : "bg-red-500"   
            }`}
          >
            {doctor.active === true ? "Active" : "Unactive"}
          </button>
          <DoctorStatusDialog
            isOpen={isStatusDialogOpen}
            onClose={() => setIsStatusDialogOpen(false)}
            onSubmit={handleStatusUpdate}
            currentStatus={doctor.active}
          />
          <h2 className="scrollbar-m-20 border-b pb-2 text-2xl font-normal tracking-tighter first:mt-0 ">
            Appointments({appointments.length})
          </h2>
        </div>
      </div>
      <div className="min-h-screen">
        <div className="w-full h-full border p-2 rounded-lg ">
          {/* Tabs List */}
          <div className="grid w-full grid-cols-2 border-b">
            <button
              onClick={() => setActiveTab("appointment")}
              className={`py-2 px-4 text-center font-medium ${
                activeTab === "account"
                  ? "border-b-2 border-blue-500 text-blue-500"
                  : "text-gray-500"
              }`}
            >
              Appointments
            </button>
            <button
              onClick={() => setActiveTab("Doctor Details")}
              className={`py-2 px-4 text-center font-medium ${
                activeTab === "doctor details"
                  ? "border-b-2 border-blue-500 text-blue-500"
                  : "text-gray-500"
              }`}
            >
              Doctor Details
            </button>
          </div>

          {/* Tabs Content */}
          {activeTab === "appointment" && (
            <div className=" h-full overflow-y-auto custom-scrollbar mt-5 grid grid-cols-2 gap-2">
              {appointments.map((appointment, index) => (
                <div key={index}>
                  <AppointmentCard appointment={appointment} isActive={false} />
                </div>
              ))}
            </div>
          )}

          {activeTab === "Doctor Details" && (
            <div className="mt-4 ml-4">
              <div className="border-b pb-2 mb-2 mt-5">
                <h2 className="text-sm font-medium uppercase tracking-widest border-b pb-1 mb-2  ">
                  Bio Data
                </h2>
                <div className=" grid grid-cols-2 gap-4">
                  <div className="flex items-center ">
                    <span className="mr-3 ">Name: </span>
                    <span>{doctor.fullName}</span>
                  </div>
                  <div className="flex items-center ">
                    <span className="mr-3 ">Date of birth: </span>
                    <span>{doctor.dateOfBirth}</span>
                  </div>
                  <div className="flex items-center ">
                    <span className="mr-3 ">Gender: </span>
                    <span>{doctor.gender}</span>
                  </div>
                  <div className="flex items-center ">
                    <span className="mr-3 ">Address: </span>
                    <span>{formatAddress}</span>
                  </div>
                </div>
              </div>
              <div className="border-b pb-2 mb-2 mt-5">
                <h2 className="text-sm uppercase tracking-widest border-b pb-1 mb-2 font-medium ">
                  practice Data
                </h2>
                <div className=" grid grid-cols-2 gap-4">
                  <div className="flex items-center ">
                    <span className="mr-3 ">Name: </span>
                    <span>{doctor.hospitalName}</span>
                  </div>
                  <div className="flex items-center ">
                    <span className="mr-3 ">Email: </span>
                    <span>{doctor.hospitalEmailAddress}</span>
                  </div>
                  <div className="flex items-center ">
                    <span className="mr-3 ">Address: </span>
                    <span>{doctor.hospitalAddress}</span>
                  </div>
                  <div className="flex items-center ">
                    <span className="mr-3 ">Primary specialization: </span>
                    <span>{doctor.specialPrimary}</span>
                  </div>
                </div>
              </div>
              <div className="border-b pb-2 mb-2 mt-5">
                <h2 className="text-sm uppercase tracking-widest border-b pb-1 mb-2 font-medium ">
                professional Data
                </h2>
                <div className=" grid grid-cols-2 gap-4">
                  <div className="flex items-center ">
                    <span className="mr-3 ">years of experience: </span>
                    <span>{doctor.yearsOfExperience} years</span>
                  </div>
                  <div className="flex items-center ">
                    <span className="mr-3 ">School: </span>
                    <span>{doctor.medicalSchool}</span>
                  </div>
                  <div className="flex items-center ">
                    <span className="mr-3 ">Graduation: </span>
                    <span>{doctor.yearGraduation}</span>
                  </div>
                  <div className="flex items-center ">
                    <span className="mr-3 ">Medical certificate: </span>
                    <span>{doctor.medicalLicense}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
