import React, { Component } from "react";
import Hero from "../../components/Hero";
import MegaMenu from "../../components/MegaMenu";
import TabbedSection from "../../components/TabbedSection";
import DoctorList from "../../components/DoctorList";
class Home extends Component {
  // getDoctors = async () => {
  //   try {
  //     const response = await getAllDoctors();
  //     console.log(response);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };
  // telehealthDoctors = response.filter((doctor) => doctor.isTelehealth);
  // inPersonDoctors = response.filter((doctor) => doctor.isInPerson);
  render() {
    return (
      <div>
        {/* Hero Section */}

        <Hero />
        <TabbedSection />
        <DoctorList />
        <DoctorList title="Home Doctor Visit" isInPerson={true} />
      </div>
    );
  }
}
export default Home;
