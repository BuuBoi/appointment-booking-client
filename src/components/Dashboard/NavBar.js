import React from "react";
import { Avatar, Dropdown } from "flowbite-react";
import { AlignJustify, Bell, Mail, Microscope, Search } from "lucide-react";
import { useUserProfile } from "../../context/userProfileContext";
import { Link } from "react-router-dom";

//Nhung component trong folder Dashboard nay se duoc su dung trong DashboardPage va layout cua Dashboard
export default function NavBar() {
  const { userProfile } = useUserProfile();
  console.log(userProfile);
  const handlerLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="px-4 mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center -m-2 xl:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-lg hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
            >
              <AlignJustify className="w-6 h-6" />
            </button>
          </div>

          <div className="flex ml-6 xl:ml-0">
            <Link to="/" className="flex items-center justify-center text-blue-500 py-3">
              <Microscope className="h-10 w-10" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                FamilyDoc
              </span>
            </Link>
            {/* <div className="flex items-center flex-shrink-0">
              <img
                className="block w-auto h-16 lg:hidden"
                src={`${userProfile?.profilePicture}` || "medical-logo.jpg"}
                alt=""
              />
              <img
                className="hidden w-auto h-16 lg:block"
                src={`${userProfile?.profilePicture}` || "medical-logo.jpg"}
                alt=""
              />
            </div> */}
          </div>

          <div className="flex-1 hidden max-w-xs ml-40 mr-auto lg:block">
            <label htmlFor="" className="sr-only">
              {" "}
              Search{" "}
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="w-5 h-5 text-gray-400" />
              </div>

              <input
                type="search"
                name=""
                id=""
                className="block w-full py-2 pl-10 border border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                placeholder="Type to search"
              />
            </div>
          </div>

          <div className="flex items-center justify-end ml-auto space-x-6">
            <div>
              <h3 className="text-sm font-medium text-gray-900">
                {" "}
                {userProfile?.email}
              </h3>
            </div>
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar
                  alt="User settings"
                  img={
                    `${userProfile?.profilePicture}` ||
                    "https://utfs.io/f/8b034fb4-1f45-425a-8c57-a7a68835311f-2558r.png"
                  }
                  rounded
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">{userProfile?.fullName}</span>
                <span className="block truncate text-sm font-medium">
                  {userProfile?.email}
                </span>
              </Dropdown.Header>
              <Dropdown.Item onClick={handlerLogout}>Sign out</Dropdown.Item>
            </Dropdown>
          </div>
        </div>
      </div>
    </header>
  );
}
