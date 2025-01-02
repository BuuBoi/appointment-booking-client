import React, {useMemo} from "react";
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
  doctors = {doctors},
}) {

  // Hàm lấy tên ngày hiện tại
  const getDayName = () => {
    const daysOfWeek = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ];
    const today = new Date();
    return daysOfWeek[today.getDay()];
  };

    // Sắp xếp doctors với những bác sĩ có lịch hôm nay lên đầu
  // const sortedDoctors = useMemo(() => { ko hop ly nua, chi can filter la du 
  //   const today = getDayName(); 
  //   return [...doctors].sort((a, b) => {
  //     const aHasTimestamp = a.weeklyAvailables && a.weeklyAvailables[today]?.length > 0;
  //     const bHasTimestamp = b.weeklyAvailables && b.weeklyAvailables[today]?.length > 0;
  //     if (aHasTimestamp && !bHasTimestamp) return -1;
  //     if (!aHasTimestamp && bHasTimestamp) return 1;
  //     return 0;
  //   });
  // }, [doctors]); 
  // Lọc ra các bác sĩ có lịch khám trong ngày
  const availableDoctors = useMemo(() => {
    const today = getDayName();
    return doctors.filter(doctor => 
      doctor.weeklyAvailables && doctor.weeklyAvailables[today]?.length > 0
    );
  }, [doctors]);
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
          {availableDoctors.map((doctor, index) => (
            <SwiperSlide key ={index}>
              <DoctorCard key={index} isInPerson={isInPerson} doctor = {doctor}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
