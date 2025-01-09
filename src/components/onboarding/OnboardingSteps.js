import React from "react";
import { Link, useLocation } from "react-router-dom";
import BioDataForm from "./BioDataForm";
import ContactInfo from "./ContactInfo";
import ProfessionInfo from "./ProfessionInfo";
import ProfileInfo from "./ProfileInfo";
import PracticeInfo from "./PraticeInfo";
import { IdentificationIcon } from "@heroicons/react/24/outline";

//https://bolt.new/~/sb1-z95zeap5

export default function OnboardingSteps({ id, user, basePath="/onboarding" }) {
  const location = useLocation();
  const queryParam = new URLSearchParams(location.search);
  const page = queryParam.get("page") ?? "bio-data";
  // const {truckingNumber, doctorProfileID} = useOnboardingContext()
  
  const steps = [
    {
      title: "Bio Data",
      page: "bio-data",
      component: <BioDataForm page={page} id={id} nextPage= "contact-information" formId = {id} basePath={basePath}/>,
    },
    {
      title: "Contact Information",
      page: "contact-information",
      component: <ContactInfo page={page} id={id} nextPage = "professional-information" formId = {id} basePath={basePath} />,
    },
    {
      title: "Professional Information",
      page: "professional-information",
      component: <ProfessionInfo page={page} id={id}  nextPage ="practice-information" formId = {id} basePath={basePath}/>,
    },
    {
      title: "Practice Information",
      page: "practice-information",
      component: <PracticeInfo page={page} id={id} formId = {id} basePath={basePath}/>,
    },
  ];
  const currentStep = steps.find((step) => step.page === page);
  return (
    <div className="grid grid-cols-12 mx-auto rounded-lg shadow-lg overflow-hidden border border-slate-200 min-h-screen">
      <div className="col-span-3 bg-slate-300">
        {steps.map((step, index) => {
          const isCurrentPath = location.pathname.startsWith("/dashboard/doctor");

            // If we're in the dashboard path, don't make the steps clickable
          if (isCurrentPath) {
            return (
              <Link
                key={index}
                to={`${basePath}/${id}?page=${step.page}`}
                className={
                  step.page === page
                    ? "block text-xs uppercase p-3 bg-teal-800 text-slate-100 shadow-inner"
                    : "block text-xs uppercase p-3 bg-slate-200 text-black shadow-inner"
                }
              >
                {step.title}
              </Link>
            );
          }

          // Otherwise, keep the original Link behavior
          return (
            <Link
              key={index}
              to={`${basePath}/${id}?page=${step.page}`}
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
        {currentStep.component}
      </div>
    </div>
  );
}
