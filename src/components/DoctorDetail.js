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
              Service Detail
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
              <div>Service Detail Component</div>
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
