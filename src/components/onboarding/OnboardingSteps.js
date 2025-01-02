import React from "react";
import { Link, useLocation } from "react-router-dom";
import BioDataForm from "./BioDataForm";
import ContactInfo from "./ContactInfo";
import ProfessionInfo from "./ProfessionInfo";
import ProfileInfo from "./ProfileInfo";
import PracticeInfo from "./PraticeInfo";
import { useOnboardingContext } from "../../context/context";
//https://bolt.new/~/sb1-z95zeap5

export default function OnboardingSteps({ id, user }) {
  const location = useLocation();
  const queryParam = new URLSearchParams(location.search);
  const page = queryParam.get("page") ?? "bio-data";
  // const {truckingNumber, doctorProfileID} = useOnboardingContext()
  const {truckingNumber,setTruckingNumber, doctorProfileID, setDoctorProfileID} = useOnboardingContext();
  const steps = [
    {
      title: "Bio Data",
      page: "bio-data",
      component: <BioDataForm page={page} id={id} nextPage= "contact-information" formId = {doctorProfileID}/>,
    },
    // {
    //   title: "Profile Information",
    //   page: "profile-information",
    //   component: <ProfileInfo page={page} id={id} nextPage = "contact-information" formId = {doctorProfileID}/>,
    // },
    {
      title: "Contact Information",
      page: "contact-information",
      component: <ContactInfo page={page} id={id} nextPage = "professional-information" formId = {doctorProfileID} />,
    },
    {
      title: "Professional Information",
      page: "professional-information",
      component: <ProfessionInfo page={page} id={id}  nextPage ="practice-information" formId = {doctorProfileID}/>,
    },
    {
      title: "Practice Information",
      page: "practice-information",
      component: <PracticeInfo page={page} id={id} formId = {doctorProfileID} />,
    },
  ];
  const currentStep = steps.find((step) => step.page === page);
  return (
    <div className="grid grid-cols-12 mx-auto rounded-lg shadow-lg overflow-hidden border border-slate-200 min-h-screen">
      <div className="col-span-3 bg-slate-300">
        {steps.map((step, index) => {
          return (
            <Link
              key={index}
              to={`/onboarding/${id}?page=${step.page}`}
              className={
                step.page === page
                  ? "block text-xs uppercase p-3 bg-teal-800 text-slate-100 shadow-inner"
                  : "block text-xs uppercase p-3 bg-slate-200 text-black shadow-inner"
              }
            >
              {step.title}
            </Link>
          );
        })}
      </div>
      <div className="col-span-9 p-4">
        {truckingNumber&&  <p className="border-b border-gray-200 text-teal-400">Use this Trucking Number:( <span className="font-bold">{truckingNumber}</span> )to Resume Application or check Status</p>}
        {currentStep.component}
      </div>
    </div>
  );
}
