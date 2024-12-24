import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import TextInput from "../ui/TextInput";
import { Loader } from "lucide-react";
import DatePickerInput from "../ui/DatePickerInput";
import dayjs from "dayjs";

export default function OnboardingForm() {
  const location = useLocation();
  const { id } = useParams();
  const userData = location.state; // Lấy dữ liệu đã truyền qua
  const query = new URLSearchParams(useLocation().search);
  const page = query.get("page");

  console.log("User Data:", userData); // {email, id, role}
  // const page = params.get("page") ?? 5;
  // console.log(page);

  const [date, setDate] = React.useState(dayjs());
  console.log(date);
  const steps = [
    { title: "Bio Data", page: "bio-data" },
    { title: "Contact Information", page: "contact-information" },
    { title: "Professional Information", page: "professional-information" },
    { title: "Education Information", page: "education-information" },
    { title: "Practice Information", page: "practice-information" },
    { title: "Additional Information", page: "additional-information" },
    { title: "Availability", page: "availability" },
  ];
  return (
    <div className="mx-auto rounded-lg shadow-inner bg-blue-500 overflow-hidden border border-slate-200 min-h-screen">
      <div className="grid grid-cols-12 min-h-screen py-10 px-20 mx-auto">
        {/* Sidebar - Chiếm 3 cột */}
        <div className="col-span-full sm:col-span-3 divide-y-2 divide-gray-200 bg-gray-50">
          {steps.map((step, index) => (
            <Link
              key={index}
              to={`/onboarding/${id}?page=${step.page}`}
              className={
                step.page === page
                  ? "block text-xs uppercase py-3 px-4 bg-teal-800 text-slate-100 shadow-inner mt-1 font-semibold"
                  : "block text-xs uppercase py-3 px-4 bg-gray-200 text-black shadow-inner mt-1 font-semibold"
              }
            >
              {step.title}
            </Link>
          ))}
        </div>

        {/* Main Content - Chiếm 9 cột */}
        <div className="col-span-full sm:col-span-9 py-4 px-5 bg-white">
          <h1 className="text-2xl font-semibold text-gray-800">Bio Data</h1>

          <div>
            <form className="grid grid-cols-2 gap-4 py-4 px-4 mx-auto">
              <TextInput
                name="First Name"
                placeholder="Enter your first name"
                page={page}
                className="col-span-full sm:col-span-1 py-4 px-5"
              />
              <TextInput
                name="First Name"
                placeholder="Enter your first name"
                page={page}
                className="col-span-full sm:col-span-1 py-4 px-5"
              />
              <DatePickerInput date = {date} setDate= {setDate}/>
              <TextInput
                name="First Name"
                placeholder="Enter your first name"
                page={page}
                className="col-span-full sm:col-span-1 py-4 px-5"
              />
              <TextInput
                name="First Name"
                placeholder="Enter your first name"
                page={page}
                className="col-span-full sm:col-span-1 py-4 px-5"
              />
              <TextInput
                name="First Name"
                placeholder="Enter your first name"
                page={page}
                className="col-span-full sm:col-span-1 py-4 px-5"
              />
              <TextInput
                name="First Name"
                placeholder="Enter your first name"
                page={page}
                className="col-span-full sm:col-span-1 py-4 px-5"
              />
              <TextInput
                name="First Name"
                placeholder="Enter your first name"
                page={page}
                className="col-span-full sm:col-span-1 py-4 px-5"
              />
            </form>
          </div>
          <div className="flex justify-center mt-4 items-center ">
            <button
              type="submit"
              onClick={()=>alert("Create account")}
              className="flex items-center w-80 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save and Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
