import {
  Badge,
  BarChart,
  Folder,
  Grid2X2,
  Home,
  icons,
  Plus,
  Settings,
  CalendarCheck,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import React from "react";
import LogoutButton from "./LogoutButton";

const Sidebar = () => {
  // // Fetch categories data from your API or other source
  // const [categories, setCategories] = React.useState([]);

  // React.useEffect(() => {
  //   const fetchCategories = async () => {
  //     try {
  //       const response = await fetch('/api/categories');
  //       const data = await response.json();
  //       setCategories(data);
  //     } catch (error) {
  //       console.error('Error fetching categories:', error);
  //     }
  //   };
  //   fetchCategories();
  // }, []);

  const location = useLocation();
  console.log(location.pathname);
  const tabs = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icons: Home,
    },
    {
      name: "Settings",
      path: "/dashboard/settings",
      icons: Settings,
    },
    {
      name: "Products",
      path: "/dashboard/products", 
      icons: CalendarCheck,
    },
    {
      name: "Schedule",
      path: "/dashboard/schedule", 
      icons: CalendarCheck,
    },
    
  ];

  return (
    <div className="hidden xl:flex xl:w-64 xl:flex-col border-r border-gray-300">
      <div className="flex flex-col pt-5 overflow-y-auto">
        <div className="flex flex-col justify-between flex-1 h-full px-4">
          <div className="space-y-4">
            <div>
              <p className="px-4 text-xs font-semibold tracking-widest text-gray-400 uppercase">
                Analytics
              </p>
              <nav className="flex-1 mt-4 space-y-1">
                {tabs.map((tab) => (
                  <Link
                    key={tab.name}
                    to={tab.path}
                    className={`flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 rounded-lg group ${
                      location.pathname === tab.path
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
      </div>
    </div>
  );
};

export default Sidebar;
