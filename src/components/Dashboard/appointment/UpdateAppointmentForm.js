import React, {useState, useEffect} from "react";
import { Loader, CheckCheck, X } from "lucide-react";
import SelectForm from "../../ui/SelectForm";
import PlatformRadio from "../../ui/RadioPlatForm";
import TextInput from "../../ui/TextInput";
import { updateAppointment } from "../../../services/appointment";
import toast from "react-hot-toast";

export default function UpdateAppointmentForm({appointment}) {
  const [loading, setLoading] =useState(false);
  const [meetingLink, setMeetingLink] =useState(appointment.meetingLink);
  const [selectedPlatform, setSelectedPlatform] = useState(appointment.status);

  useEffect(() => {
    setMeetingLink(appointment.meetingLink);
    setSelectedPlatform(appointment.status);
  }, [appointment]); // Cập nhật khi props thay đổi

  const platforms = [
    {
      id: 'PENDING',
      name: 'PENDING',
      icon: <Loader className="w-5 h-5 text-red-500" />,
    },
    {
      id: 'ACCEPTED',
      name: 'ACCEPTED',
      icon: <CheckCheck lassName="w-5 h-5 text-blue-400" />,
    },
    {
      id: 'REJECTED',
      name: 'REJECTED',
      icon: <X  lassName="w-5 h-5 text-blue-400" />,
    },
  ];
  console.log(selectedPlatform);
  console.log(meetingLink);
const handleUpdateAppointment = async () => {
  try {
    setLoading(true);
    const data = {
      ...appointment,
      meetingLink,
      status: selectedPlatform,
    };
    await updateAppointment(appointment.id, data);
    setLoading(false);
    toast.success("Appointment updated successfully");
  } catch (error) {
    console.error("Error updating appointment:", error);
    setLoading(false);
    toast.error("Error updating appointment");
  }
}

  return (
    <div className="border shadow rounded-md p-4 mt-2">
      <div className="sm:col-span-4">
        <div className="flex items-center justify-between border-b">
          <h2 className="scroll-m-20 text-base font-semibold tracking-tight py-2 ">
            Update Appointment
          </h2>
          <button
            onClick={handleUpdateAppointment}
            className=" px-4 
        py-2 
        bg-blue-600 
        text-white 
        rounded-md
        font-semibold
        disabled:opacity-50
        disabled:cursor-not-allowed
        hover:bg-blue-700
        transition-colors"
          >
            {loading ? "Saving please wait..." : "Save"}
          </button>
        </div>
        <div className="flex gap-4 w-full border-b py-2">
            <TextInput className="w-full" name="Meeting Link" type="text" value={meetingLink} placeholder="Enter link..." onChange={(e)=>setMeetingLink(e.target.value)}></TextInput>
          </div>
        </div>
        <div className="w-full bg-gray-100 rounded-xl shadow-lg p-2 space-y-2">
          <h2 className="scroll-m-20 text-base font-semibold tracking-tight py-2 ">
          Accept or Reject
          </h2>
          <PlatformRadio
            value={selectedPlatform}
            onChange={setSelectedPlatform}
            platforms={platforms}
          />
          {selectedPlatform && (
            <p className="text-sm text-gray-600 mt-2">
              Selected platform: {selectedPlatform}
            </p>
          )}
        </div>
      </div>
  );
}
