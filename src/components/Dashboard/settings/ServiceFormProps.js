import React from "react";
import { useState } from "react";
import {
  getAllService,
  getDoctorProfileWithService,
  updateDoctorProfileWithService,
} from "../../../services/service";
import {
  getAllSpecial,
  getDoctorProfileWithSpecialization,
  updateDoctorProfileWithSpecialization,
} from "../../../services/special";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useUserProfile } from "../../../context/userProfileContext";
import { PriceSlider } from "../../ui/PriceSlider";
import { updateDoctor } from "../../../services/doctorProfile";

export default function ServiceFormProps() {
  const { userProfile } = useUserProfile();
  const doctorId = userProfile?.id;
  const navigate = useNavigate();
  const [servicesOption, setServicesOption] = useState([]);
  const [specialtyOption, setSpecialtyOption] = useState([]);

  const [selectedServiceId, setSelectedServiceId] = useState();
  const [selectedSpecialtyId, setSelectedSpecialtyId] = useState();

  // Fetch data using useEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [services, specialties, selectedService, selectedSpecialtyId] =
          await Promise.all([
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

  const handleUpdateService = async () => {
    //call api
    const serviceId = selectedServiceId;
    try {
      const response = await updateDoctorProfileWithService(
        doctorId,
        serviceId
      );
      if (response) {
        toast.success("Service updated successfully");
        // setSelectedServiceId("");
        // navigate("/dashboard/admin/services");
        // window.location.reload();
      }
    } catch (error) {
      toast.error("Error updating service");
      console.error("Error updating service:", error);
    }
  };
  const handleUpdateSpecial = async () => {
    //call api
    const specialId = selectedSpecialtyId;
    try {
      const response = await updateDoctorProfileWithSpecialization(
        doctorId,
        specialId
      );
      if (response) {
        toast.success("Special updated successfully");
        // setSelectedServiceId("");
        // navigate("/dashboard/admin/services");
        // window.location.reload();
      }
    } catch (error) {
      toast.error("Error updating Special");
      console.error("Error updating service:", error);
    }
  };

  const [price, setPrice] = useState("300000");

  const handleUpdatePrice = async () => {
    try {
      const data = {
        price: price,
      };
      const response = await updateDoctor(doctorId, data);
      if (response) {
        toast.success("Price updated successfully");
      }
    } catch (error) {
      toast.error("Error updating Price");
      console.error("Error updating Price:", error);
    }
  };
  return (
    <div className="max-w-full p-6 space-y-6">
      <div className="space-y-4">
        {/* <div class="sm:col-span-4">
          <label for="username" class="block text-sm/6 font-medium text-gray-900">Price</label>
          <div class="mt-2">
            <div class="max-w-96 flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
              <div class="shrink-0 select-none text-base text-gray-500 sm:text-sm/6">VND</div>
              <input type="text" name="username" id="username" 
              className="block flex-1 border-0 bg-transparent py-1.5 pl-1 max-w-80 grow  pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6" 
              placeholder="100000"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              />
              <button
              onClick={handleUpdateService}
              className="flex items-center space-x-2 px-2 py-1 bg-black text-white rounded-md"
            >
              Update Price
            </button>
            </div>
          </div>
        </div>
         */}
        <div className=" bg-gray-50 flex items-center justify-center p-4">
          <div className="w-full max-w-md space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Select Price
                </label>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <PriceSlider
                    value={price}
                    onChange={setPrice}
                    min={100000}
                    max={3000000}
                    step={50000}
                  />
                </div>
              </div>

              <button
                onClick={handleUpdatePrice}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                Update Price
              </button>
            </div>
          </div>
        </div>
        <div className="border p-4 rounded-md">
          <div className="flex items-center justify-between">
            <h2 className="block text-xl font-medium text-gray-700 mb-1">
              Service
            </h2>
            <button
              onClick={handleUpdateService}
              className="flex items-center space-x-2 px-2 py-1 bg-black text-white rounded-md"
            >
              Update Service
            </button>
          </div>
          <div className="relative mt-5">
            <div className="grid grid-cols-4 gap-2">
              {servicesOption.map((service) => (
                <div
                  key={service.id}
                  className={
                    service.id === selectedServiceId
                      ? "flex flex-col border-2 bg-slate-300 items-center justify-center space-x-2 p-2 border-blue-600 rounded-md cursor-pointer"
                      : "flex flex-col border items-center justify-center space-x-2 p-2 border-gray-300 rounded-md cursor-pointer"
                  }
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
              Special
            </h2>
            <button
              onClick={handleUpdateSpecial}
              className="flex items-center space-x-2 px-2 py-1 bg-black text-white rounded-md"
            >
              Update Special
            </button>
          </div>
          <div className="relative mt-5">
            <div className="grid grid-cols-4 gap-2">
              {specialtyOption.map((service) => (
                <div
                  key={service.id}
                  className={
                    service.id === selectedSpecialtyId
                      ? "flex flex-col border items-center justify-center space-x-2 p-2 border-blue-600 bg-slate-300 rounded-md cursor-pointer"
                      : "flex flex-col border items-center justify-center space-x-2 p-2 border-gray-300 rounded-md cursor-pointer"
                  }
                  onClick={() => setSelectedSpecialtyId(service.id)}
                >
                  <p>{service.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
