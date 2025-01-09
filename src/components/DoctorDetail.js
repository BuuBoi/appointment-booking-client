import React from "react";
import { useState } from "react";
import Available from "./Available";
import BookingForm from "./BookingForm";
import { createAppointment } from "../services/appointment";

export default function DoctorDetail({ doctor }) {
  const [isAcitve, setIsActive] = useState("available");
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState();
  const [selectedTime, setSelectedTime] = useState();
  const [userId, setUserId] = useState();

  const onClickBooking = (date, time, id) => {
    console.log("Booking", date, time);
    setSelectedDate(date);
    setSelectedTime(time);
    setUserId(id);
    setStep(2);
  };

  const handleSubmit = async (formData) => {
    const dataAppointment = {
      ...formData,
      userId: userId,
      doctorId: doctor.id,
      fee: doctor.price,
      appointmentDate: selectedDate,
      appointmentTime: selectedTime,
      appointmentCreatedDate: new Date(),
    };
    console.log("Form submitted:", dataAppointment);
    // Handle form submission here
    try {
      const response = await createAppointment(dataAppointment);
      console.log("Appointment created", response);
      return response;
    } catch (error) {
      console.log("Error creating appointment", error);
    }
  };

  const address = doctor.address;
  const formatAddress = address
    ? `${address.ward}-${address.district}-${address.province}`
    : "Địa chỉ chưa cập nhật";

  return (
    <>
      {step === 1 ? (
        <div className="">
          <div className="flex text-white py-2 items-center gap-2 justify-around ">
            <button
              onClick={() => setIsActive("detail")}
              className={
                isAcitve === "detail"
                  ? "uppercase tracking-widest bg-blue-700 w-1/2  py-2 "
                  : "uppercase tracking-widest bg-blue-50 w-1/2  py-2 text-gray-800"
              }
            >
              Doctor Detail
            </button>
            <button
              onClick={() => setIsActive("available")}
              className={
                isAcitve === "available"
                  ? "uppercase tracking-widest bg-blue-700 w-1/2  py-2 "
                  : "uppercase tracking-widest bg-blue-50 w-1/2 text-gray-800 py-2"
              }
            >
              Available
            </button>
          </div>
          <div className="py-4 px-5 text-center">
            {isAcitve === "available" ? (
              <Available doctor={doctor} onClickBooking={onClickBooking} />
            ) : (
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
            )}
          </div>
        </div>
      ) : (
        <div className="p-8">
          <BookingForm onPrevious={() => setStep(1)} onSubmit={handleSubmit} />
        </div>
      )}
    </>
  );
}
