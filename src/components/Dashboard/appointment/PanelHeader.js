import { AlignHorizontalCenterRounded } from "@mui/icons-material";
import { Button } from "flowbite-react";
import {
  AlignCenterHorizontal,
  AlignHorizontalDistributeCenter,
  Calendar,
  Plus,
} from "lucide-react";
import React from "react";

export default function PanelHeader({ appointments, title ="Appointments" }) {
  return (
    <div className="py-2 px-6 border-b border-gray-300 flex items-center justify-between bg-blue-300 w-full">
      <div className="flex items-center gap-1">
        <Calendar size={24} />
        <span className="font-bold">{title}</span>
        <span className="bg-white w-6 h-6 rounded-full text-center font-semibold">
          {appointments}
        </span>
      </div>
      <div className="flex ">
        {/* <Button>
          <AlignHorizontalDistributeCenter /> Display
        </Button>
        <Button>
            <Plus/>
            New Appointments
        </Button> */}
      </div>
    </div>
  );
}
