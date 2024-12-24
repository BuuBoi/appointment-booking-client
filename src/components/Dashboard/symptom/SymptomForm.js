import React, { useState } from "react";
import { Upload } from "lucide-react";
import generateSlug from "./../../../utils/generateSlug";
import { createSymptom, updateSymptom } from "../../../services/symptom";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SymptomForm({ initialData = null }) {
  const [title, setTitle] = useState("");
  const [uploading, setUploading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title || "");
    }
  }, [initialData]);


  const handleSubmit = async (event) => {
    event.preventDefault();
    setUploading(true);

    const slug = generateSlug(title);
    const data = { ...initialData, title, slug };
    try {
      console.log("Payload: ", data);
      if(!initialData){
        // Update Symptom
        if(!title){
          toast.error("Title is required");
          return;
        }
        const response = await createSymptom(data);
        if (response) {
          toast.success("Symptom created successfully");
          setTitle("");
          navigate("/dashboard/admin/symptoms");
          window.location.reload();
        }
        console.log("Response: ", response);
      }
      else{
        if(!title){
          toast.error("Title is required");
          return;
        }
        const response = await updateSymptom(initialData.id, data);
        if (response) {
          toast.success("Symptom created successfully");
          setTitle("");
          navigate("/dashboard/admin/symptoms");
          window.location.reload();
        }
        console.log("Response: ", response);
      }
    } catch (error) {
      console.error("Error creating Symptom:", error);
    } finally {
      setUploading(false);
    }
  };
  return (
    <div className="max-w-full mx-auto p-6 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-8">{initialData? "Update Symptom": "Create Symptom"}</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
             Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter Symptom title"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
           {uploading ? "Uploading..." : initialData ? "Update Symptom" : "Create Symptom"}
        </button>
      </form>
    </div>
  );
}
export default SymptomForm;
