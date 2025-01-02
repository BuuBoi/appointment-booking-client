import React, { useState } from "react";
import TextInput from "./ui/TextInput";
import DatePickerInput from "./ui/DatePickerInput";
import { Upload } from "lucide-react";
import uploadFile from "../utils/uploadFile";
import toast from "react-hot-toast";
import { fetchProfile } from "../services/fetchUserProfileByToken";
import { useNavigate } from "react-router-dom";

export default function BookingForm({ onPrevious, onSubmit }) {
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "male",
    phone: "",
    email: "",
    dob: null,
    address: "",
    reason: "",
    occupation: "",
    medicalDocument: null,
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const validateForm = () => {
    const errors = {};
    if (!formData.fullName.trim()) {
      errors.fullName = "Full name is required";
    }
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    }
    if (!formData.dob) {
      errors.dob = "Date of Birth is required";
    }
    if (!formData.address.trim()) {
      errors.address = "Address is required";
    }
    if (!formData.occupation.trim()) {
      errors.occupation = "Occupation is required";
    }
    if (!formData.reason.trim()) {
      errors.reason = "Reason for visit is required";
    }
    if (!formData.gender) {
      errors.gender = "gender is required";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      try {
        const pdfUrl = await uploadFile(file);
        setFormData((prev) => ({ ...prev, medicalDocument: pdfUrl }));
        console.log("PDF uploaded successfully:", pdfUrl);
      } catch (error) {
        console.error("Upload failed:", error);
      }
    } else {
      alert("Please select a PDF file");
    }
  };

  const handleDateChange = (date) => {
    setFormData((prev) => ({
      ...prev,
      dob: date,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error("Please fill in all required fields");
      return;
    }
    try {
      setLoadingSubmit(true);
      const data = await fetchProfile(navigate);
      if (!data) return;
      const dataSubmit = {
        ...formData,
        dob: formData.dob?.format("YYYY-MM-DD"),
        userId: data?.id,
      };
      const res = await onSubmit(dataSubmit);
      if(res){
          navigate("/dashboard/user")
      }
    } catch (error) {
      setLoadingSubmit(false)
      console.error("Error Submit form: ", error);
      toast.error("Booking Error!!!")
    }finally{
      setLoadingSubmit(false)
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Booking Information
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-700">
              Personal Information
            </h3>

            <TextInput
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleInputChange}
              error={errors.fullName}
            />

            <div className="space-y-4 px-3">
              <label className="text-sm font-semibold uppercase text-gray-700">
                Gender
              </label>
              <div className="flex gap-4">
                <label className="flex items-center border rounded-lg p-2">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={formData.gender === "male"}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  Male
                </label>
                <label className="flex items-center border rounded-lg p-2">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={formData.gender === "female"}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  Female
                </label>
              </div>
            </div>

            <TextInput
              name="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleInputChange}
              error={errors.phone}
            />

            <TextInput
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              error={errors.email}
            />

            <div className="space-y-2 px-3">
              <label className="text-sm font-semibold uppercase text-gray-700">
                Date of Birth
              </label>
              <DatePickerInput date={formData.dob} setDate={handleDateChange} />
            </div>
          </div>

          {/* Additional Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-700">
              Additional Information
            </h3>

            <TextInput
              name="address"
              placeholder="Enter your address"
              value={formData.address}
              onChange={handleInputChange}
              error={errors.address}
            />

            <TextInput
              name="occupation"
              placeholder="Enter your occupation"
              value={formData.occupation}
              onChange={handleInputChange}
              error={errors.occupation}
            />

            <div className="space-y-2">
              <label className="text-sm font-semibold uppercase text-gray-700">
                Reason for Visit
              </label>
              <textarea
                name="reason"
                value={formData.reason}
                onChange={handleInputChange}
                className="w-full border rounded-lg py-2 px-3 text-gray-800 focus:ring focus:ring-blue-300 outline-none h-32"
                placeholder="Please describe your reason for visit"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold uppercase text-gray-700">
                Medical Documents (Optional)
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                <input
                  type="file"
                  id="medicalDocument"
                  className="hidden"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                />
                <label htmlFor="medicalDocument" className="cursor-pointer">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <p className="mt-2 text-sm text-gray-500">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-xs text-gray-500">
                    PDF, DOC, DOCX, JPG, JPEG, PNG
                  </p>
                </label>
                {formData.medicalDocument && (
                  <p className="mt-2 text-sm text-gray-600">
                    <a
                      href={formData.medicalDocument}
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      View Uploaded File
                    </a>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between pt-6">
          <button
            type="button"
            onClick={onPrevious}
            className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            Previous
          </button>
          {loadingSubmit ? (<button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Submit Booking...
          </button>):(
            <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Submit Booking
          </button>
          )}
        </div>
      </form>
    </div>
  );
}
