import React from "react";
import DoctorDetail from "../components/DoctorDetail";
import { useParams } from "react-router-dom";
import { getDoctorById } from "../services/doctorProfile";
import { useEffect, useState } from "react";

export default function DoctorPage() {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getDoctorById(id);
        setDoctor(response);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);
  console.log("Doctor profile: ",doctor);
  const address = doctor?.address;
  const formatAddress = address
    ? `${address.details}-${address.ward}-${address.district}-${address.province}`
    : "Địa chỉ chưa cập nhật";

  return (
    <>
      {doctor ? (
        <div className="bg-gray-200 min-h-screen">
          <div className="max-w-4xl border border-gray-300 mx-auto shadow-lg rounded-md bg-white">
            <div className=" py-6 px-6">
              <div className="flex items-center justify-between">
                <div className="">
                  <div className="flex flex-col ">
                    <h2 className="font-bold text-blue-900 text-2xl">
                      {doctor.fullName?.toUpperCase()}
                    </h2>
                    <p className="text-sm text-gray-500">{formatAddress}</p>
                    <p className="text-sm text-gray-500">Video</p>
                  </div>
                </div>
                <img
                  src={doctor.profilePicture}
                  alt="doctor"
                  width={240}
                  height={210}
                  className="w-32 h-32 rounded-lg object-cover"
                />
              </div>
            </div>
            <div>
              <DoctorDetail doctor= {doctor} />
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-screen flex items-center justify-center">
          <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tighter first:mt-0">No Doctor Details Found</h2>
        </div>
      )}
    </>
  );
}
