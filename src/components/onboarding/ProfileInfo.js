import React from "react";
import TextInput from "../ui/TextInput";
import { toast } from "react-hot-toast";
import { useState } from "react";

export default function ProfileInfo({ page, id, nextPage }) {
  const [formData, setFormData] = useState({
    emailAddress: "",
    phone: "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formErrors = {};

    if (!formData.emailAddress.trim()) {
      formErrors.emailAddress = "Full name is required";
    }

    if (!formData.phone) {
      formErrors.phone = "Phone number is required";
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

    console.log("Data: ", data); // Log dữ liệu
  };

  return (
    <div className="col-span-full sm:col-span-9 py-4 px-5 bg-white">
      <h1 className="text-2xl font-semibold text-gray-800">
        Profile Information
      </h1>

      <div>
        <form
          className="grid grid-cols-2 gap-4 py-4 px-4 mx-auto"
          onSubmit={handleSubmit}
        >
          <TextInput
            name="email Address"
            placeholder="Enter your email address"
            value={formData.emailAddress}
            onChange={(e) => handleChange("emailAddress", e.target.value)}
            className="col-span-full sm:col-span-1 py-4 px-5"
          />
          <TextInput
            name="Phone Number"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            className="col-span-full sm:col-span-1 py-4 px-5"
          />
          <TextInput
            name="City"    
            placeholder="Enter your City"
            value={formData.city}
            onChange={(e) => handleChange("city", e.target.value)}
            className="col-span-full sm:col-span-1 py-4 px-5"
          />
          <TextInput
            name="District"
            placeholder="Enter your district"
            value={formData.district}
            onChange={(e) => handleChange("district", e.target.value)}
            className="col-span-full sm:col-span-1 py-4 px-5"
          />
          <TextInput
            name="ward"
            placeholder="Enter your ward"
            value={formData.ward}
            onChange={(e) => handleChange("ward", e.target.value)}
            className="col-span-full sm:col-span-1 py-4 px-5"
          />
          <TextInput
            name="street"
            placeholder="Enter your street"
            value={formData.street}
            onChange={(e) => handleChange("street", e.target.value)}
            className="col-span-full sm:col-span-1 py-4 px-5"
          />
        </form>
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
