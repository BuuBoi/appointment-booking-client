import React, { useEffect, useState } from "react";
import { getDoctorByAppointment } from "../../services/doctorProfile";
import { useParams } from "react-router-dom";

export default function ViewAppointmentForUser() {
  const { id } = useParams();
  const [doctor, setDoctor] = useState({});
  useEffect(() => {
    const fetchDoctor = async () => {
      const response = await getDoctorByAppointment(id);
      setDoctor(response);
    };
    fetchDoctor();
  }, [id]);

  const address = doctor?.address;
  const formatAddress = address
    ? `${address.ward}-${address.district}-${address.province}`
    : "Địa chỉ chưa cập nhật";

  return (
    <div>
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
    </div>
  );
}
