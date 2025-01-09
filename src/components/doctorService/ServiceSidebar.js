import React from "react";
import { Link } from "react-router-dom";
import { Stethoscope } from "lucide-react";

export const ServiceSidebar = ({ services, currentSlug, type }) => {
  console.log(services);
  return (
    <div className="bg-white shadow border border-gray-200 p-6 rounded-lg">
      <h2 className="text-lg font-semibold flex items-center gap-2">
        <Stethoscope className="w-5 h-5 text-blue-600" />
        {type === "service" ? "Dịch vụ khác" : "Chuyên khoa khoa khác"}
      </h2>
      <div className="mt-4 flex flex-col gap-2 max-h-[calc(100vh-200px)] overflow-y-auto">
        {services.map((service) => (
          <Link
            key={service.id}
            to={
              type === "service"
                ? `/services/${service.slug}`
                : `/specials/${service.slug}`
            }
            className={`py-2 px-3 rounded-md transition-colors ${
              currentSlug === service.slug
                ? "bg-blue-50 text-blue-600 font-medium"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            {service.title}
          </Link>
        ))}
      </div>
    </div>
  );
};
