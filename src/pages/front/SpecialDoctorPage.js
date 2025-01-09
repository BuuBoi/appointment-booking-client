
import React, { useState, useEffect } from "react";
import {useParams, useSearchParams,useNavigate } from "react-router-dom";
import {getDoctorBySpecialSlug} from "../../services/doctorProfile";
import { DoctorList } from "../../components/doctorService/DoctorList";
import { getAllSpecial } from "../../services/special";
import  {ServiceSidebar}  from "../../components/doctorService/ServiceSidebar";
import {DoctorSearchBar} from "../../components/doctorService/DoctorSearchBar";
import { getAllService } from "../../services/service";
import { se } from "date-fns/locale/se";
import { is } from "date-fns/locale/is";

const provinces = [
  { id: 1, name: "Hà Nội" },
  { id: 2, name: "Hồ Chí Minh" },
  { id: 3, name: "Hải Phòng" },
  { id: 4, name: "Đà Nẵng" },
  { id: 5, name: "Hà Giang" },
  { id: 6, name: "Cao Bằng" },
  { id: 7, name: "Bắc Kạn" },
  { id: 8, name: "Tuyên Quang" },
  { id: 9, name: "Lào Cai" },
  { id: 10, name: "Điện Biên" },
  { id: 11, name: "Lai Châu" },
  { id: 12, name: "Sơn La" },
  { id: 13, name: "Yên Bái" },
  { id: 14, name: "Hòa Bình" },
  { id: 15, name: "Thái Nguyên" },
  { id: 16, name: "Lạng Sơn" },
  { id: 17, name: "Quảng Ninh" },
  { id: 18, name: "Bắc Giang" },
  { id: 19, name: "Phú Thọ" },
  { id: 20, name: "Vĩnh Phúc" },
  { id: 21, name: "Bắc Ninh" },
  { id: 22, name: "Hải Dương" },
  { id: 23, name: "Hưng Yên" },
  { id: 24, name: "Thái Bình" },
  { id: 25, name: "Hà Nam" },
  { id: 26, name: "Nam Định" },
  { id: 27, name: "Ninh Bình" },
  { id: 28, name: "Thanh Hóa" },
  { id: 29, name: "Nghệ An" },
  { id: 30, name: "Hà Tĩnh" },
  { id: 31, name: "Quảng Bình" },
  { id: 32, name: "Quảng Trị" },
  { id: 33, name: "Thừa Thiên Huế" },
  { id: 34, name: "Quảng Nam" },
  { id: 35, name: "Quảng Ngãi" },
  { id: 36, name: "Bình Định" },
  { id: 37, name: "Phú Yên" },
  { id: 38, name: "Khánh Hòa" },
  { id: 39, name: "Ninh Thuận" },
  { id: 40, name: "Bình Thuận" },
  { id: 41, name: "Kon Tum" },
  { id: 42, name: "Gia Lai" },
  { id: 43, name: "Đắk Lắk" },
  { id: 44, name: "Đắk Nông" },
  { id: 45, name: "Lâm Đồng" },
  { id: 46, name: "Bình Phước" },
  { id: 47, name: "Tây Ninh" },
  { id: 48, name: "Bình Dương" },
  { id: 49, name: "Đồng Nai" },
  { id: 50, name: "Bà Rịa - Vũng Tàu" },
  { id: 51, name: "Long An" },
  { id: 52, name: "Tiền Giang" },
  { id: 53, name: "Bến Tre" },
  { id: 54, name: "Trà Vinh" },
  { id: 55, name: "Vĩnh Long" },
  { id: 56, name: "Đồng Tháp" },
  { id: 57, name: "An Giang" },
  { id: 58, name: "Kiên Giang" },
  { id: 59, name: "Cần Thơ" },
  { id: 60, name: "Hậu Giang" },
  { id: 61, name: "Sóc Trăng" },
  { id: 62, name: "Bạc Liêu" },
  { id: 63, name: "Cà Mau" }
];

export default function SpecialDoctorpage() {
  const navigate = useNavigate();
  const [doctors, setDoctors] = useState([]);
  const [specials, setSpecials] = useState([]);
  const [services, setServices] = useState([]);
  var { slug } = useParams();
  const title = slug.split("-").join(" ");
  const [searchParams] = useSearchParams();
  const page = searchParams.get("type");
  const [Loading, setLoading] = useState(false);
  const [isSearching, setIsSearching] = useState(false);



  const handleSearch = (filters)=> {
    console.log(filters);
    setIsSearching(true);
    //fetch data
    setDoctors([  {
      id: "a14bbc12-dc27-4698-bf5c-12e1d54ef639",
      fullName: "Bac Si Khong Nam Fake",
      profilePicture: null,
      address: {
          province: "Da Nang",
          district: "Lien Chieu",
          ward: "Hoa Khanh Nam",
          details: "33 h2/16 Nam Cao"
      },
      yearsOfExperience: 5,
      specialization: "Tai Mui Hong",
      hospitalName: "Da Khoa Da Nang"
  },]);
    setIsSearching(false);
    if (!filters.specializationName?.trim()) {
      return navigate(`/specials/all-doctors`);
    }
    navigate(`/specials/${filters.specializationName}`);
  }

  useEffect(() => {
    const fetchData = async () => {
      if(isSearching){
        try {
          const [ specialData, servicesData] = await Promise.all([
            getAllSpecial(),
            getAllService()
          ]);
  
          if (specialData) {
            setSpecials(specialData);
          }
          if (servicesData) {
            setServices(servicesData);
          }
        } catch (error) {
          console.log(error, "Loi load data trong ServiceDoctorpage");
        }
      }else{
        try {
          const [doctorsData, specialData, servicesData] = await Promise.all([
            getDoctorBySpecialSlug(slug),
            getAllSpecial(),
            getAllService()
          ]);
  
          if (doctorsData) {
            setDoctors(doctorsData);
          }
          if (specialData) {
            setSpecials(specialData);
          }
          if (servicesData) {
            setServices(servicesData);
          }
        } catch (error) {
          console.log(error, "Loi load data trong ServiceDoctorpage");
        }
      }

    };
    fetchData();
  }, []);
  console.log(specials);
  return (
    <div className="container py-8">
      <div className="mb-8 max-w-7xl mx-auto">
        <DoctorSearchBar
          onSearch={handleSearch}
          specializations={specials}
          services={services} // Add your services data here
          provinces={provinces} // Add your provinces data here

        />
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-6 lg:gap-10">
        <div className="col-span-3 shadow border border-gray-200 p-6 rounded-sm">
          <div className="col-span-12 lg:col-span-3">
            <ServiceSidebar services={specials} currentSlug={slug} type="special" />
          </div>
        </div>
        <div className="col-span-9">
          <DoctorList doctors={doctors} />
        </div>
      </div>
    </div>
  );
}
