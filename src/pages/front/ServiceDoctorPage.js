import { da } from "date-fns/locale/da";
import React, { useState, useEffect } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import {getDoctorByServiceSlug} from "../../services/doctorProfile";
import { DoctorList } from "../../components/doctorService/DoctorList";
import { getAllService } from "../../services/service";
import  {ServiceSidebar}  from "../../components/doctorService/ServiceSidebar";

export default function ServiceDoctorpage() {
  const [doctors, setDoctors] = useState([]);
  const [services, setServices] = useState([]);
  const { slug } = useParams();
  const title = slug.split("-").join(" ");
  const [searchParams] = useSearchParams();
  const page = searchParams.get("type");
  console.log("Render ServiceDoctorPage");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [doctorsData, servicesData] = await Promise.all([
          getDoctorByServiceSlug(slug),
          getAllService(),
        ]);

        if (doctorsData) {
          setDoctors(doctorsData);
        }
        if (servicesData) {
          setServices(servicesData);
        }
      } catch (error) {
        console.log(error, "Loi load data trong ServiceDoctorpage");
      }
    };
    fetchData();
    
  }, [slug]);
  console.log(doctors);
  return (
    <div className="container py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-6 lg:gap-10">
        <div className="col-span-3 shadow border border-gray-200 p-6 rounded-sm">
          <div className="col-span-12 lg:col-span-3">
            <ServiceSidebar services={services} currentSlug={slug} type="service" setIsSearching={() => console.log("Searching")} setCurrentPage={() => console.log("Current Page")} setFilters={() => console.log("Filters")} setTotalPages={() => console.log("Total Pages")} />
              
          </div>
        </div>
        <div className="col-span-9">
          <DoctorList doctors={doctors} />
        </div>
      </div>
    </div>
  );
}
