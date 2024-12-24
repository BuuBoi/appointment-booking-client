import { AlignHorizontalCenterRounded } from "@mui/icons-material";
import { Button } from "flowbite-react";
import {
  AlignCenterHorizontal,
  AlignHorizontalDistributeCenter,
  Calendar,
  Plus,
} from "lucide-react";
import React from "react";

export default function PanelHeader() {
  return (
    <div className="py-2 px-6 border-b border-gray-300 flex items-center justify-between bg-blue-300 w-full">
      <div className="flex items-center gap-1">
        <Calendar size={24} />
        <span>Appoinments</span>
        <span className="bg-white w-6 h-6 rounded-full flex items-center">
          11
        </span>
      </div>
      <div className="flex ">
        <Button>
          <AlignHorizontalDistributeCenter /> Display
        </Button>
        <Button>
            <Plus/>
            New Appointments
        </Button>
      </div>
    </div>
  );
}
