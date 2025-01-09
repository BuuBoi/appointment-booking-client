import React from "react";
import TextInput from "../ui/TextInput";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { updateDoctor } from "../../services/doctorProfile";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import  { useDoctorForm } from "../../context/DoctorFormContext";

export default function PracticeInfo({ page, id, nextPage, formId, basePath }) {
  const { doctorData, updateDoctorData } = useDoctorForm();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    hospitalName: doctorData?.hospitalName || "",
    hospitalAddress: doctorData?.hospitalAddress || "",
    hospitalContactNumber: doctorData?.hospitalContactNumber || "",
    hospitalEmailAddress: doctorData?.hospitalEmailAddress || "",
    hospitalWebsite: doctorData?.hospitalWebsite || "",
  });
  const [isCompleted, setIsCompleted] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formErrors = {};

    if (!formData.hospitalName.trim()) {
      formErrors.hospitalName = "Full name is required";
    }

    if (!formData.hospitalAddress) {
      formErrors.hospitalAddress = "Phone number is required";
    }
    if (!formData.hospitalContactNumber) {
      formErrors.hospitalContactNumber = "Phone number is required";
    }
    if (!formData.hospitalEmailAddress) {
      formErrors.hospitalEmailAddress = "Phone number is required";
    }
    if (!formData.hospitalWebsite) {
      formErrors.hospitalWebsite = "Phone number is required";
    }

    // Nếu có lỗi, hiển thị thông báo và không gửi form
    if (Object.keys(formErrors).length > 0) {
      toast.error("Please fill in all required fields");
      return;
    }
    const data = {
      ...formData,
      page: page,
      id: id,
    };

    console.log("Data ContactInfo before Response: ", data); // Log dữ liệu
        const res = await updateDoctor(formId, data);
        if (res) {
          toast.success("Pratice Information saved successfully");
          updateDoctorData(res);
          setIsCompleted(true);
          console.log("Data Practice affter Response: ", res); // Log dữ liệu
        }else{
          toast.error("Profile Information not saved");
        }
  };

  return (
    <div className="col-span-full sm:col-span-9 py-4 px-5 bg-white">
      <h1 className="text-2xl font-semibold text-gray-800">
        Hospital Information
      </h1>

      <div>
        <form
          className="grid grid-cols-2 gap-4 py-4 px-4 mx-auto"
          onSubmit={handleSubmit}
        >
          <TextInput
            name="hospital Name"
            placeholder="Enter your hospital name"
            value={formData.hospitalName}
            onChange={(e) => handleChange("hospitalName", e.target.value)}
            className="col-span-full sm:col-span-1 py-4 px-5"
          />
          <TextInput
            name="hospital Address"
            placeholder="Enter your hospital address"
            value={formData.hospitalAddress}
            onChange={(e) => handleChange("hospitalAddress", e.target.value)}
            className="col-span-full sm:col-span-1 py-4 px-5"
          />
          <TextInput
            name="hospital Contact Number"
            placeholder="Enter your hospital contact number"
            value={formData.hospitalContactNumber}
            onChange={(e) =>
              handleChange("hospitalContactNumber", e.target.value)
            }
            className="col-span-full sm:col-span-1 py-4 px-5"
          />
          <TextInput
            name="hospital Email Address"
            placeholder="Enter your hospital email address"
            value={formData.hospitalEmailAddress}
            onChange={(e) =>
              handleChange("hospitalEmailAddress", e.target.value)
            }
            className="col-span-full sm:col-span-1 py-4 px-5"
          />
          <TextInput
            name="hospital Website"
            placeholder="Enter your hospital website"
            value={formData.hospitalWebsite}
            onChange={(e) => handleChange("hospitalWebsite", e.target.value)}
            className="col-span-full sm:col-span-1 py-4 px-5"
          />
        </form>
      </div>

      <div className="flex justify-center mt-4 items-center ">
        {!isCompleted ? (<button
          type="submit"
          onClick={(e) => handleSubmit(e)}
          className="flex items-center w-80 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save and Continue
        </button>):(<Link to="/login" className="flex items-center w-80 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Complete
        </Link>)}
      </div>
    </div>
  );
}
