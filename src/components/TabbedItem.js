"use client";
import React from "react";
import { Tabs } from "flowbite-react"; // Đảm bảo đúng thư viện
import { HiUserCircle } from "react-icons/hi";
import { Stethoscope, Microscope, Activity, Syringe } from "lucide-react";
import ServiceList from "./Services/ServiceList";
import LinkCards from "./Doctors/LinkCards";

export default function TabbedItem() {
  const Service = [
    { title: "Teleheath", image: "/doctor.jpg", slug: "telehealth" },
    { title: "Video Prescription", image: "/doctor.jpg", slug: "telehealth" },
    { title: "Mental health", image: "/doctor.jpg", slug: "telehealth" },
    { title: "ED Consult", image: "/doctor.jpg", slug: "telehealth" },
    { title: "Urgent care", image: "/doctor.jpg", slug: "telehealth" },
    { title: "Urgent care", image: "/doctor.jpg", slug: "telehealth" },
    { title: "Urgent care", image: "/doctor.jpg", slug: "telehealth" },
  ];
  const tabs = [
    {
      title: "Popular Services",
      content: "Nội dung dịch vụ phổ biến",
      icon: Stethoscope, // Định dạng icon đúng
      component: <ServiceList services={Service} />,
    },
    {
      title: "Doctors",
      content: "Danh sách bác sĩ",
      icon: Microscope,
      component: <LinkCards className="bg-black" />,
    },
    {
      title: "Specialists",
      content: "Các chuyên gia",
      icon: Activity,
      component: <LinkCards className="bg-blue-700" />,
    },
    {
      title: "Symptoms",
      content: "Các triệu chứng",
      icon: Syringe,
      component: <LinkCards className="bg-purple-700" />,
    },
  ];

  return (
    <div className="overflow-x-auto">
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
