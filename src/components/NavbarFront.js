import React,{useEffect} from "react";
import { useNavigate , Link} from "react-router-dom";
import { Avatar, Dropdown } from "flowbite-react";
import { useUserProfile } from "./../context/userProfileContext";
import { Microscope } from "lucide-react";

const NavbarFront = () => {
  const { userProfile, fetchProfile } = useUserProfile();
  const navigate = useNavigate();
  const handlerLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };
  const handlerDashboard =()=>{
    if(userProfile.role === "ADMIN"){
      navigate("/dashboard/admin");
  }
  if(userProfile.role === "DOCTOR"){
      navigate("/dashboard/doctor");
  }
  if(userProfile.role === "PATIENT"){
      navigate("/dashboard/patient");
}}
  useEffect(() => {
    fetchProfile(false); // Không redirect nếu không fetch được dữ liệu
  }, []);
  return (
    <div className="relative">
      <nav className="bg-slate-250 border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3 ">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse text-blue-600"
          >
            {/* <img
              src="/FamilyDoctorLogo.png"
              className="h-10 rounded-sm  mix-blend-multiply"
              alt="Flowbite Logo"
            /> */}
            <Microscope className="h-10 w-10"/>
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            FamilyDoc
            </span>
          </Link>

          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-user"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* Dropdow user */}
          <div className="absolute top-3 right-4">
            {!userProfile ? (
              <Link
                to="/login"
                className="px-2 block w-full text-center text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg py-2"
              >
                Log in
              </Link>
            ) : (
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
                <Dropdown.Item onClick={handlerDashboard}>Dashboard</Dropdown.Item>
                <Dropdown.Item onClick={handlerLogout}>Sign out</Dropdown.Item>
              </Dropdown>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarFront;
