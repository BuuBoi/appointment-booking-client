
import { Button } from "flowbite-react";
import {
  ListOrdered,
  Plus,
} from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";


export default function PanelHeader() {
    const navigate = useNavigate();
  return (
    <div className="py-2 px-6 border-b border-gray-300 flex items-center justify-between bg-blue-300 w-full">
      <div className="flex items-center gap-1">
        <ListOrdered size={24} />
        <span>Special</span>
      </div>
      <div className="flex ">
        <Button onClick={() => navigate("/dashboard/admin/specials/new")}>
            <Plus/>
            New Special
        </Button>
      </div>
    </div>
  );
}
