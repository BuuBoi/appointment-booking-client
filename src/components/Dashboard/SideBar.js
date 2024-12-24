import { Home, Settings, CalendarCheck, UserCog, Power } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import React from "react";
import { Button } from "flowbite-react";

const Sidebar = ({ useRole }) => {
  const location = useLocation();
  const sideBarConfig = {
    doctor: [
      {
        name: "Dashboard",
        path: "/dashboard/doctor",
        icons: Home,
      },
      {
        name: "Appointment",
        path: "/dashboard/doctor/appointment",
        icons: Settings,
      },
      {
        name: "Settings",
        path: "/dashboard/doctor/settings",
        icons: Settings,
      },
      {
        name: "Products",
        path: "/dashboard/doctor/products",
        icons: CalendarCheck,
      },
      {
        name: "Patients",
        path: "/dashboard/doctor/patients",
        icons: CalendarCheck,
      },
    ],
    admin: [
      {
        name: "Dashboard",
        path: "/dashboard/admin",
        icons: Home,
      },
      {
        name: "Services",
        path: "/dashboard/admin/services",
        icons: Settings,
      },
      {
        name: "Specials",
        path: "/dashboard/admin/specials",
        icons: Settings,
      },
      {
        name: "Symptoms",
        path: "/dashboard/admin/symptoms",
        icons: Settings,
      },
      {
        name: "Appointment",
        path: "/dashboard/admin/appointment",
        icons: Settings,
      },
      {
        name: "Doctors",
        path: "/dashboard/admin/doctors",
        icons: UserCog,
      },
      {
        name: "Patients",
        path: "/dashboard/admin/patients",
        icons: UserCog,
      },
      {
        name: "Settings",
        path: "/dashboard/admin/settings",
        icons: Settings,
      },
    ],
  };
  const tabs = sideBarConfig[useRole];
  const isActivePath = (tabPath) => {
    // Check if the path is either an exact match or a nested route
    return location.pathname.startsWith(`${tabPath}`);
  };

  return (
    <div className="hidden xl:flex xl:w-64 xl:flex-col border-r border-gray-300">
      <div className="flex flex-col pt-5 overflow-y-auto">
        <div className="flex flex-col justify-between flex-1 h-full px-4">
          <div className="px-4">
            <p className="px-4 text-xs font-semibold tracking-widest text-gray-400 uppercase">
              Analytics
            </p>
            <nav className="flex-1 mt-4 space-y-1">
              {tabs.map((tab) => (
                <Link
                  key={tab.name}
                  to={tab.path}
                  className={`flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 rounded-lg group ${
                    isActivePath(tab.path)
                      ? "text-white bg-gray-900 hover:bg-gray-800"
                      : "text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  <tab.icons className="flex-shrink-0 w-5 h-5 mr-4" />
                  {tab.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
        
      </div>
      <div className="mt-auto p-4 ">
          <Button size="sm" className="w-full">
            <Power className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
    </div>
  );
};

export default Sidebar;
