import React from "react";
import DoctorDetail from "../components/DoctorDetail";
export default function DoctorPage() {
  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="max-w-4xl border border-gray-300 mx-auto shadow-lg rounded-md bg-white">
        <div className=" py-6 px-6">
          <div className="flex items-center justify-between">
            <div className="">
              <div className="flex flex-col ">
                <h2 className="font-bold text-blue-900 text-2xl">Nguyen Van A</h2>
                <p className= "text-sm text-gray-500">3 nam cao Da Nang</p>
              </div>
              <p>InPerson doctor visit</p>
              <p>jadjsdsjksajlkdjsakd</p>
            </div>
            <img src="/doctor.jpg"
              alt="doctor"
              width={230}
              height={230}
              className="w-32 h-32 rounded-full object-cover"
            />
          </div>
        </div>
        <div>
            <DoctorDetail />
        </div>
      </div>
      <div className="fixed w-[896px] left-1/2 -translate-x-1/2 bottom-0  shadow-2xl py-6 px-6 rounded-md flex justify-between  border bg-slate-300">
        <div className="text-blue-950 font-bold px-5">
            <p>$56</p>
            <p>Tue, mar 12 - 8:00 AM</p>
        </div>
        <div>
            <button className="bg-blue-700 py-2 px-6 rounded-lg hover:shadow-lg">Book</button>
        </div>
      </div>
    </div>
  );
}
