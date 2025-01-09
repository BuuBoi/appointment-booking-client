import React from "react";
import TextInput from "../ui/TextInput";
import DatePickerInput from "../ui/DatePickerInput";
import dayjs from "dayjs";
import TextareaInput from "../ui/TextAreaInput";
import RadioGroup from "../ui/RadioGroup";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { Upload } from "lucide-react";
import uploadImage from "../../utils/uploadImage";
import { generateTruckingNumber } from "../../utils/generateTruckingNumber";
import { createDoctor, updateDoctor } from "../../services/doctorProfile";
import { useNavigate } from "react-router-dom";
import { useDoctorForm } from "../../context/DoctorFormContext";

export default function BioDataForm({ page, id, nextPage, basePath }) {
  const { doctorData, updateDoctorData } = useDoctorForm();
  const navigate = useNavigate();
  
  console.log("BioFormContext: ", doctorData);
  const [formData, setFormData] = useState({
    dob: doctorData?.dateOfBirth ? dayjs(new Date(doctorData.dateOfBirth)) : dayjs(),
    fullName: doctorData?.fullName||"",
    gender: doctorData?.gender||"",
    medicalLicense: doctorData?.medicalLicense||"",
    medicalLicenseExpiry: doctorData?.medicalLicenseExpiry ? dayjs(new Date(doctorData.medicalLicenseExpiry)) : dayjs(),
    bio: doctorData?.bio||"",
    yearsOfExperience: doctorData?.yearsOfExperience||"",
  });


  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(doctorData?.profilePicture||"");
  const [uploading, setUploading] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleImageChange = async (event) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
      setUploading(true);
      // const url = URL.createObjectURL(file);
      const url = await uploadImage(file);
      if(url){setUploading(false)}
      setPreviewUrl(url);
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    let formErrors = {};

    if (!formData.fullName.trim()) {
      formErrors.fullName = "Full name is required";
    }

    if (!formData.dob) {
      formErrors.dob = "Date of Birth is required";
    }

    if (!formData.medicalLicense.trim()) {
      formErrors.medicalLicense = "Medical license is required";
    }

    if (!formData.medicalLicenseExpiry) {
      formErrors.medicalLicenseExpiry =
        "Medical license expiry date is required";
    }

    if (!formData.gender) {
      formErrors.gender = "Gender is required";
    }

    if (!formData.bio.trim()) {
      formErrors.bio = "Biography is required";
    }

    // Nếu có lỗi, hiển thị thông báo và không gửi form
    if (Object.keys(formErrors).length > 0) {
      toast.error("Please fill in all required fields");
      return;
    }
    const data = {
      ...formData,
      profilePicture: previewUrl,
      yearsOfExperience: parseInt(formData.yearsOfExperience),
      page: page,
      dob: formData.dob.format("YYYY-MM-DD"),
      medicalLicenseExpiry: formData.medicalLicenseExpiry.format("YYYY-MM-DD"),
      id: id,
      truckingNumber: generateTruckingNumber(), // Tạo mã số  
    };
    try{
      const response = await updateDoctor(id, data);
      toast.success("Doctor profile created successfully");
      updateDoctorData(response);
      navigate(`${basePath}/${id}?page=${nextPage}`);
      console.log("Response: ", response);
    }
    catch(error){
      console.log("Error: ", error);
      toast.error("Error creating doctor profile");
    }
  };

  return (
    <div className="col-span-full sm:col-span-9 py-4 px-5 bg-white">
      <h1 className="text-2xl font-semibold text-gray-800">Bio Data</h1>

      <div>
        <form
          className="grid grid-cols-2 gap-4 py-4 px-4 mx-auto"
          onSubmit={handleSubmit}
        >
          <TextInput
            name="fullname"
            placeholder="Enter your first name"
            value={formData.fullName}
            onChange={(e) => handleChange("fullName", e.target.value)}
            className="col-span-full sm:col-span-1 py-4 px-5"
          />
          <div className="col-span-full sm:col-span-1 py-4 px-5">
            <h2 className="text-sm font-semibold text-gray-800 mb-2">
              Date of Birth
            </h2>
            <DatePickerInput
              date={formData.dob}
              setDate={(date) => handleChange("dob", date)}
              className="max-w-full"
            />
          </div>

          <TextInput
            name="medical License"
            placeholder="Enter your medical license"
            value={formData.medicalLicense}
            onChange={(e) => handleChange("medicalLicense", e.target.value)}
            className="col-span-full sm:col-span-1 py-4 px-5"
          />
          <div className="col-span-full sm:col-span-1 py-4 px-5">
            <h2 className="text-sm font-semibold text-gray-800 mb-2">
              Medical License Expiry
            </h2>
            <DatePickerInput
              date={formData.medicalLicenseExpiry}
              setDate={(date) => handleChange("medicalLicenseExpiry", date)}
              className="max-w-full"
            />
          </div>

          <div className="col-span-full sm:col-span-1 py-4 px-5">
            <h2 className="text-sm font-semibold text-gray-800 mb-2 uppercase">
              Gender
            </h2>
            <RadioGroup
              gender={formData.gender}
              setGender={(value) => handleChange("gender", value)}
              name="gender"
            />
          </div>
          <TextInput
            name="years of experience"
            placeholder="Enter your years of experience"
            value={formData.yearsOfExperience}
            onChange={(e) => handleChange("yearsOfExperience", e.target.value)}
            className="col-span-full sm:col-span-1 py-4 px-5"
          />
          <TextareaInput
            name="bio"
            placeholder="Enter your Biography"
            value={formData.bio}
            onChange={(e) => handleChange("bio", e.target.value)}
            className="col-span-full sm:col-span-2   py-4 px-5"
            label="Enter your Biography"
          />
        </form>
        <div className="col-span-full sm:col-span-2 py-4 px-5">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Professional Profile Image
          </label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-2 text-center">
              {previewUrl ? (
                <img
                  src={previewUrl}
                  alt="Preview"
                  className="mx-auto h-32 w-32 object-cover rounded-md"
                />
              ) : (
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
              )}
              <div className="flex text-sm text-gray-600">
                <label
                  htmlFor="image-upload"
                  className="relative cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                >
                  <span>Choose File</span>
                  <input
                    id="image-upload"
                    type="file"
                    className="sr-only"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </label>
              </div>
              <p className="text-xs text-gray-500">Image (1MB)</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center mt-4 items-center ">
        <button
          type="submit"
          onClick={(e) => handleSubmit(e)}
          className="flex items-center w-80 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save and Continue
        </button>
      </div>
    </div>
  );
}
