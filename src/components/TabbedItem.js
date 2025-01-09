"use client";
import React from "react";
import { Tabs } from "flowbite-react"; // Đảm bảo đúng thư viện
import { HiUserCircle } from "react-icons/hi";
import { Stethoscope, Microscope, Activity, Syringe } from "lucide-react";
import ServiceList from "./Services/ServiceList";
import LinkCards from "./Doctors/LinkCards";

export default function TabbedItem({services, specialties}) {

  const tabs = [
    {
      title: "Popular Services",
      content: "Nội dung dịch vụ phổ biến",
      icon: Stethoscope, // Định dạng icon đúng
      component: <ServiceList services={services} />,
    },
    {
      title: "Specialists",
      content: "Các chuyên gia",
      icon: Activity,
      component: <LinkCards className="text-black font-medium bg-slate-200 items-center py-1" specialties={specialties}/>,
    },
  ];
  console.log("Specialties", specialties);  
  return (
    <div className="">
      <Tabs aria-label="Default tabs" style={{ variant: "underline" }}>
        {tabs.map((tab, index) => (
          <Tabs.Item
            key={index}
            title={tab.title}
            icon={tab.icon} // Đảm bảo truyền React element
          >
            {tab.component}
          </Tabs.Item>
        ))}
      </Tabs>
    </div>
  );
}
