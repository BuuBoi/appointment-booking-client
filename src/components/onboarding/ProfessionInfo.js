import React from "react";
import TextInput from "../ui/TextInput";
import DatePickerInput from "../ui/DatePickerInput";
import dayjs from "dayjs";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { Upload } from "lucide-react";
import uploadImage from "../../utils/uploadImage";
import { updateDoctor } from "../../services/doctorProfile";
import { useNavigate } from "react-router-dom";
import { useDoctorForm } from "../../context/DoctorFormContext";

export default function ProfessionInfo({ page, id, nextPage, formId, basePath }) {
  const { doctorData, updateDoctorData } = useDoctorForm();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    yearGraduation: doctorData?.yearGraduation ? dayjs(new Date(doctorData.yearGraduation)) : dayjs(),
    medicalSchool: doctorData?.medicalSchool || "",
    specialPrimary: doctorData?.specialPrimary || "",
  });

  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
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
    // let imageUrl = initialData?.imageUrl || null;
    // if (image) {
    //   imageUrl = await uploadImage(image);
    //   console.log("Image URL: ", imageUrl);
    // }
    let formErrors = {};

    if (!formData.medicalSchool.trim()) {
      formErrors.medicalSchool = "Full name is required";
    }

    if (!formData.yearGraduation) {
      formErrors.yearGraduation = "Date of Birth is required";
    }

    if (!formData.specialPrimary.trim()) {
      formErrors.specialPrimary = "Medical license is required";
    }
    // Nếu có lỗi, hiển thị thông báo và không gửi form
    if (Object.keys(formErrors).length > 0) {
      toast.error("Please fill in all required fields");
      return;
    }
    const data = {
      ...formData,
      imageUrl: previewUrl,
      page: page,
      yearGraduation: formData.yearGraduation.format("YYYY-MM-DD"),
      id: id,
    };

    console.log("Data Profession before Response: ", data); // Log dữ liệu
        const res = await updateDoctor(formId, data);
        if (res) {
          toast.success("Profession Information saved successfully");
          updateDoctorData(res);
          console.log("Data ContactInfo affter Response: ", res); // Log dữ liệu
          navigate(`${basePath}/${id}?page=${nextPage}`);
        }else{
          toast.error("Profile Information not saved");
        }
  };

  return (
    <div className="col-span-full sm:col-span-9 py-4 px-5 bg-white">
      <h1 className="text-2xl font-semibold text-gray-800">Professional Information</h1>

      <div>
        <form
          className="grid grid-cols-2 gap-4 py-4 px-4 mx-auto"
          onSubmit={handleSubmit}
        >
          <TextInput
            name="medical School"
            placeholder="Enter your school"
            value={formData.medicalSchool}
            onChange={(e) => handleChange("medicalSchool", e.target.value)}
            className="col-span-full sm:col-span-1 py-4 px-5"
          />
          <div className="col-span-full sm:col-span-1 py-4 px-5">
            <h2 className="text-sm font-semibold text-gray-800 mb-2 uppercase">
            graduation day
            </h2>
            <DatePickerInput
              date={formData.yearGraduation}
              setDate={(date) => handleChange("yearGraduation", date)}
              className="max-w-full"
            />
          </div>

          <TextInput
            name="specialPrimary"
            placeholder="Enter your primary specialPrimaryity"
            value={formData.specialPrimary}
            onChange={(e) => handleChange("specialPrimary", e.target.value)}
            className="col-span-full sm:col-span-1 py-4 px-5"
          />
        </form>
        <div className="col-span-full sm:col-span-2 py-4 px-5">
          <label className="block text-sm font-medium text-gray-700 mb-1 uppercase">
          Update graduation certificate
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
