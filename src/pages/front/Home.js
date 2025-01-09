import React, { useEffect, useState,useRef} from "react";
import Hero from "../../components/Hero";
import MegaMenu from "../../components/MegaMenu";
import TabbedSection from "../../components/TabbedSection";
import { getAllDoctors } from "../../services/doctorProfile";
import DoctorList from "../../components/DoctorList";
function Home() {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllDoctors();
        setDoctors(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);


  return (
    <div>
      {/* Hero Section */}

      <Hero />
      <TabbedSection />
      <DoctorList  title="Home Doctor Visit" isInPerson={true} doctors={doctors}/>
      {/* <DoctorList doctors={doctors}/> */}
      
    </div>
  );
}
export default Home;
