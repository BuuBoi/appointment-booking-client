import React from "react";
import { ChevronDown, SquareChevronDown } from "lucide-react";
import { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import { getAllService, getDoctorProfileWithService, updateDoctorProfileWithService } from "../../../services/service";
import { getAllSpecial, getDoctorProfileWithSpecialization, updateDoctorProfileWithSpecialization } from "../../../services/special";
import { getAllSymptom } from "../../../services/symptom";
import { useEffect } from "react";
import { updateService } from "../../../services/service";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useUserProfile } from "../../../context/userProfileContext";


export default function ServiceFormProps() {
  const { userProfile } = useUserProfile();
  const doctorId = userProfile?.id;
  const navigate = useNavigate();
  const [servicesOption, setServicesOption] = useState([]);
  const [specialtyOption, setSpecialtyOption] = useState([]);


  const [selectedServiceId, setSelectedServiceId] = useState();
  const [selectedSpecialtyId, setSelectedSpecialtyId] = useState();

  console.log(selectedServiceId);
  console.log(selectedSpecialtyId);

  // Fetch data using useEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [services, specialties, selectedService,selectedSpecialtyId] = await Promise.all([
          getAllService(),
          getAllSpecial(),
          getDoctorProfileWithService(doctorId),
          getDoctorProfileWithSpecialization(doctorId),
          //getAllSymptom(),
        ]);
        setServicesOption(services);
        setSpecialtyOption(specialties);
        setSelectedServiceId(selectedService?.id);
        setSelectedSpecialtyId(selectedSpecialtyId?.id);
        //setSymptomsOption(symptoms);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);





  const  handleUpdateService = async () => {
    //call api
    const serviceId = selectedServiceId;
    console.log("Doctor ID: ", doctorId);
    console.log("Service ID: ", serviceId);
    try {
      
      const response = await updateDoctorProfileWithService(doctorId, serviceId);
      if (response) {
        toast.success("Service updated successfully");
        // setSelectedServiceId("");
        // navigate("/dashboard/admin/services");
        // window.location.reload();
      }
      console.log("Response: ", response);
    } catch (error) {
      toast.error("Error updating service");
      console.error("Error updating service:", error);
  }
};
  const handleUpdateSpecial = async () => {
    //call api
    const specialId = selectedSpecialtyId;
    console.log("Doctor ID: ", doctorId);
    console.log("Service ID: ", specialId);
    try {
      
      const response = await updateDoctorProfileWithSpecialization(doctorId, specialId);
      if (response) {
        toast.success("Special updated successfully");
        // setSelectedServiceId("");
        // navigate("/dashboard/admin/services");
        // window.location.reload();
      }
      console.log("Response: ", response);
    } catch (error) {
      toast.error("Error updating Special");
      console.error("Error updating service:", error);
  }
  }

  return (
    <div  className="max-w-full p-6 space-y-6">
      <div className="space-y-4">
        <div className="border p-4 rounded-md">
          {/* <label className="block text-xl font-medium text-gray-700 mb-1">
            Select Service
          </label> */}
          <div className="flex items-center justify-between">
            <h2 className="block text-xl font-medium text-gray-700 mb-1">
              Choose your Service you want to offer
            </h2>
            <button onClick={handleUpdateService} className="flex items-center space-x-2 px-2 py-1 bg-black text-white rounded-md">
              Update Service
            </button>
          </div>
          <div className="relative mt-5">
            <div className="grid grid-cols-4 gap-2">
              {servicesOption.map((service) => (
                <div
                  key={service.id}
                  className={service.id === selectedServiceId ? 
                    "flex flex-col border-2 bg-slate-300 items-center justify-center space-x-2 p-2 border-blue-600 rounded-md cursor-pointer":
                    "flex flex-col border items-center justify-center space-x-2 p-2 border-gray-300 rounded-md cursor-pointer"} 
                  onClick={() => setSelectedServiceId(service.id)}
                >
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-14 h-14 rounded-sm"
                    width={100}
                    height={100}
                  />
                  <p>{service.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border p-4 rounded-md">
          <div className="flex items-center justify-between">
            <h2 className="block text-xl font-medium text-gray-700 mb-1">
              Choose your Special you want to offer
            </h2>
            <button onClick = {handleUpdateSpecial} className="flex items-center space-x-2 px-2 py-1 bg-black text-white rounded-md">
              Update Special
            </button>
          </div>
          <div className="relative mt-5">
            <div className="grid grid-cols-4 gap-2">
              {specialtyOption.map((service) => (
                <div
                  key={service.id}
                  className={service.id === selectedSpecialtyId ? 
                    "flex flex-col border items-center justify-center space-x-2 p-2 border-blue-600 rounded-md cursor-pointer":
                    "flex flex-col border items-center justify-center space-x-2 p-2 border-gray-300 rounded-md cursor-pointer"} 
                  onClick={() => setSelectedSpecialtyId(service.id)}
                >
                  <p>{service.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border p-4 rounded-md">
          <div className="flex items-center justify-between">
            <h2 className="block text-xl font-medium text-gray-700 mb-1">
              Choose your Symptoms you want to offer
            </h2>
            <button className="flex items-center space-x-2 px-2 py-1 bg-black text-white rounded-md">
              Save
            </button>
          </div>
          <div className="relative mt-5">
            {/* <MultiSelect
            options={symptomsOption.map(symptom => ({ label: symptom.title, value: symptom.id }))}
            value={selectedSymptomsId}
            onChange={setSelectedSymptomsId}
            labelledBy="Select"
          /> */}
            {/* <div className="grid grid-cols-4 gap-2">
              {symptomsOption.map((service) => (
                <div
                  key={service.id}
                  className={selectedSymptomsId.includes(service.id) ? 
                    "flex flex-col border items-center justify-center space-x-2 p-2 border-blue-600 rounded-md cursor-pointer":
                    "flex flex-col border items-center justify-center space-x-2 p-2 border-gray-300 rounded-md cursor-pointer"} 
                  onClick={() => setSelectedSymptomsId(service.id)}
                >
                  <p>{service.title}</p>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>

    </div>
  );
}
