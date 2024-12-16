import React from "react";
import SectionHeading from "./SectionHeading";
import { Link } from "react-router-dom";
import ToggleButton from "./ToggleButton";
import DoctorCard from "./DoctorCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "./swiper-custom.css";

export default function DoctorList({
  title = "Telehealth visit",
  isInPerson = false,
}) {
  // const doctorList = doctors.map(doctor => {<DoctorCard doctor={doctor} />})
  const doctors = [
    { name: "Joinh Doe",id: 1 },
    { name: "Joinh Doe",id: 2 },
    { name: "Joinh Doe",id: 3 },
    { name: "Joinh Doe",id: 4 },
    { name: "Joinh Doe",id: 5 },
    { name: "Joinh Doe",id: 6 },
  ];

  return (
    <div className="mt-14 pt-8 container mx-auto px-16 bg-gray-50">
      <SectionHeading title={title} />
      <div className="flex justify-between items-center w-full ">
        <ToggleButton />
        <Link
          to="#"
          className="text-blue-600 dark:text-blue-400 font-bold text-[16px] border-2 border-blue-600 dark:border-blue-400 px-4 py-2 rounded-lg"
        >
          See All
        </Link>
      </div>
      <div className="py-6 ml-8">
        <Swiper
          slidesPerView={4} // Số thẻ hiển thị trên màn hình
          spaceBetween={0} // Khoảng cách giữa các thẻ
          //  pagination={{ clickable: true }} // Dấu chấm chỉ mục
          navigation={true} // Nút điều hướng
          modules={[ Navigation]}
          className="mySwiper"
        >
          {doctors.map((doctor, index) => (
            <SwiperSlide key ={index}>
              <DoctorCard key={index} isInPerson={isInPerson} doctor = {doctor}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
