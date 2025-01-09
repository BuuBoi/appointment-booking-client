import React, { useState } from "react";
import { Upload } from "lucide-react";
import generateSlug from "./../../../utils/generateSlug";
import { createService, updateService } from "../../../services/service";
import uploadImage from "../../../utils/uploadImage";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";



function ServiceForm({ initialData = null }) {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [uploading, setUploading] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    if (initialData) {
      setTitle(initialData?.title || "");
      setPreviewUrl(initialData?.imageUrl || null);
      setImageUrl(initialData?.imageUrl || null);
    }
  }, [initialData]);

  const handleImageChange = async (event) => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        setUploading(true);
        // Create a local preview
        const localPreview = URL.createObjectURL(file);
        setPreviewUrl(localPreview);
  
        // Upload to Cloudinary
        const uploadedUrl = await uploadImage(file);
        setImageUrl(uploadedUrl);
      
        // Clean up local preview
        setPreviewUrl(uploadedUrl);
        URL.revokeObjectURL(localPreview);
      } catch (error) {
        toast.error("Failed to upload image");
        console.error("Upload error:", error);
      } finally {
        setUploading(false);
      }
    }
  };
console.log("imageUrl: ", imageUrl);
console.log("previewUrl: ", previewUrl);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setUploading(true);
    const slug = generateSlug(title);
    const data = { ...initialData, title, imageUrl, slug };
    console.log("Data: ", data);
    try {
      console.log("Payload: ", data);
      if(!initialData){
        // create service
        if(!title){
          toast.error("Title is required");
          return;
        }
        const response = await createService(data);
        if (response) {
          toast.success("Service created successfully");
          setTitle("");
          setImageUrl(null);
          setPreviewUrl(null);
          // navigate("/dashboard/admin/services");
          // window.location.reload();
        }
        console.log("Response: ", response);
      }
      else{
        if(!title){
          toast.error("Title is required");
          return;
        }
        const response = await updateService(initialData.id, data);
       
        if (response) {
          toast.success("Service created successfully");
          setTitle("");
          setImageUrl(null);
          setPreviewUrl(null);
          // navigate("/dashboard/admin/services");
          // window.location.reload();
        }
        console.log("Response: ", response);
      }
    } catch (error) {
      console.error("Error creating service:", error);
    } finally {
      setUploading(false);
    }
  };
  return (
    <div className="max-w-full mx-auto p-6 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-8">{initialData? "Update Service": "Create Service"}</h1>

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
            placeholder="Enter Service title"
          />
        </div>

        <div>
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
        <div className="flex mr-10 items-between">
          <button className="bg-blue-500 px-3 items-center rounded-sm text-xl mr-3">
            Save
          </button>
          <button className="bg-black text-white items-center rounded-sm text-xl">
            Cancel
          </button>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
           {uploading ? "Uploading..." : initialData ? "Update Service" : "Create Service"}
        </button>
      </form>
    </div>
  );
}
export default ServiceForm;
