import React from "react";

import FrontendLayout from "./layout/FrontendLayout";
import Home from "./pages/front/Home";
import DoctorPage from "./pages/DoctorPage";
import BackendLayout from "./layout/BackendLayout";
import DashboarPage from "./pages/dashboard/DashboarPage";

import LoginPage from "./pages/front/LoginPage";
import RegisterContainer from "./containers/RegisterContainer";
import DoctorLanding from "./pages/front/DoctorLanding";
import SettingPage from "./pages/dashboard/SettingPage";
import ProductPage from "./pages/dashboard/ProductPage";
import EditProduct from "./pages/dashboard/EditProductPage";
import { Outlet } from "react-router-dom";
import OnboardingPage from "./pages/front/OnboardingPage";
import AppointmentPage from "./pages/dashboard/AppointmentPage";
import ServicePage from "./pages/dashboard/ServicePage";

import CreateServicePage from "./pages/dashboard/CreateServicePage";
import UpdateServicePage from "./pages/dashboard/UpdateServicePage";
import SpecialForm from "./components/Dashboard/special/SpecialForm";
import SpecialPage from "./pages/dashboard/SpecialPage";
import CreateSpecialPage from "./pages/dashboard/CreateSpecialPage";
import UpdateSpecialPage from "./pages/dashboard/UpdateSpecialPage";
import SymptomPage from "./pages/dashboard/SymptomPage";
import CreateSymptomPage from "./pages/dashboard/CreateSymptomPage";
import UpdateSymptomPage from "./pages/dashboard/UpdateSymptomPage";

import ViewAppointmentPage from "./pages/dashboard/ViewAppointmentPage";
import PatientPage from "./pages/dashboard/PatientPage";
import ServiceDoctorPage from "./pages/front/ServiceDoctorPage";
import SpecialDoctorpage from "./pages/front/SpecialDoctorPage";

import { UserProfileProvider } from "./context/userProfileContext";
import { DoctorFormProvider } from "./context/DoctorFormContext";
import DoctorOfAdminPage from "./pages/dashboard/DoctorOfAdminPage";
import PatientOfAdminPage from "./pages/dashboard/PatientOfAdminPage";
import ViewDoctorOfAdmin from "./pages/dashboard/ViewDoctorOfAdmin";
  import AppointmentPageRoleUser from "./pages/dashboard/AppointmentPageRoleUser";
import ViewPatientForDoctorRole from "./pages/dashboard/ViewPatientForDoctorRole";
import ViewPatientForAdminRole from "./pages/dashboard/ViewPatientForAdminRole";

const myRoutes = [
  {
    path: "/",
    main: () => (
      <FrontendLayout>
        <Home />
      </FrontendLayout>
    ),
  },
  {
    path: "/services/:slug",
    main: () => (
      <FrontendLayout>
        <ServiceDoctorPage />
      </FrontendLayout>
    ),
  },
  {
    path: "/specials/:slug",
    main: () => (
      <FrontendLayout>
        <SpecialDoctorpage />
      </FrontendLayout>
    ),
  },
  {
    path: "/doctors/:id",
    main: () => (
      <FrontendLayout>
        <DoctorPage />
      </FrontendLayout>
    ),
  },
  {
    path: "/about",
    main: () => <h1>About</h1>, // Home component
  },
  {
    path: "/onboarding/:id",
    main: () => (
      <FrontendLayout>
        <DoctorFormProvider>
          <OnboardingPage />
        </DoctorFormProvider>{" "}
      </FrontendLayout>
    ),
  },
  {
    path: "/join/doctor",
    main: () => (
      <FrontendLayout>
        <DoctorLanding />
      </FrontendLayout>
    ), // Home component
  },

  //dash for doctor
  {
    path: "/dashboard/doctor",
    main: () => (
      <UserProfileProvider>
        <DoctorFormProvider>
          <BackendLayout />
        </DoctorFormProvider>
      </UserProfileProvider>
    ),
    routeChild: [
      { path: "", main: () => <DashboarPage /> },
      {
        path: "onboarding/:id",
        main: () => <OnboardingPage />,
      },
      { path: "settings", main: () => <SettingPage /> },
      { path: "inboxs", main: () => <h1>Inboxs Page</h1> },
      {
        path: "appointment",
        main: () => (
          <div className="min-h-screen p-5 w-full">
            <div className=" mx-auto space-y-6">
              <AppointmentPage />
            </div>
          </div>
        ),
        routeChild: [
          {
            path: "view/:id",
            main: () => <ViewAppointmentPage />,
          },
        ],
      },
      {
        path: "patients",
        main: () => (
          <div className="min-h-screen p-5 w-full">
            <div className=" mx-auto space-y-6">
              <PatientPage />
            </div>
          </div>
        ),
        routeChild: [
          {
            path: "view/:id",
            main: () => (
              <div>
                <ViewPatientForDoctorRole />
              </div>
            ),
          },
        ],
      },
    ],
  },

  //dash for admin
  {
    path: "/dashboard/admin",
    main: () => (
      <UserProfileProvider>
        <DoctorFormProvider>
        <BackendLayout />
        </DoctorFormProvider>
      </UserProfileProvider>
    ),
    routeChild: [
      { path: "", main: () => <DashboarPage /> }, // phai chia them dashboard cho tung role

      { path: "settings", main: () => <SettingPage /> },
      { path: "patients", main: () => <div className="min-h-screen p-5 w-full">
        <div className=" mx-auto space-y-6">
          <PatientOfAdminPage />
        </div>
      </div>,
       routeChild: [
        {
          path: "view/:id",
          main: () => (
            <ViewPatientForAdminRole />
          ),
        },
      ]},
      
      { path: "doctors", main: () => <div className="min-h-screen p-5 w-full">
        <div className=" mx-auto space-y-6">
          <DoctorOfAdminPage />
        </div>
      </div>,
       routeChild: [
        {
          path: "view/:id",
          main: () => (
            <div>
              <ViewDoctorOfAdmin />
            </div>
          ),
        },
      ], },
      {
        path: "services",
        main: () => (
          <div className="min-h-screen p-5 w-full">
            <div className=" mx-auto space-y-6">
              <ServicePage />
            </div>
          </div>
        ),
        routeChild: [
          {
            path: "new",
            main: () => <CreateServicePage />,
          },
          {
            path: "view/:slug",
            main: () => <UpdateServicePage />,
          },
        ],
      },
      {
        path: "specials",
        main: () => (
          <div className="min-h-screen p-5 w-full">
            <div className=" mx-auto space-y-6">
              <SpecialPage />
            </div>
          </div>
        ),
        routeChild: [
          {
            path: "new",
            main: () => <CreateSpecialPage />,
          },
          {
            path: "view/:slug",
            main: () => <UpdateSpecialPage />,
          },
        ],
      },

      // {
      //   path: "appointment",
      //   main: () => (
      //     <div className="min-h-screen p-5 w-full">
      //       <div className=" mx-auto space-y-6">
      //         <AppointmentPage />
      //       </div>
      //     </div>
      //   ),
      //   routeChild: [
      //     {
      //       path: "view/:id",
      //       main: () => <ViewPatientForAdminRole />,
      //     },
      //   ],
      // },
    ],
  },
  //dash for user
  {
    path: "/dashboard/user",
    main: () => <UserProfileProvider><DoctorFormProvider><BackendLayout /></DoctorFormProvider></UserProfileProvider>,
    routeChild: [
      { path: "", main: () => <DashboarPage /> },
      // { path: "settings", main: () => <SettingPage /> },
      {
        path: "appointment",
        main: () => (
          <div className="min-h-screen p-5 w-full">
            <div className=" mx-auto space-y-6">
              <AppointmentPageRoleUser />
            </div>
          </div>
        ),
        routeChild: [
          {
            path: "view/:id",
            main: () => <div className="h-50 w-50 bg-blue-500">View</div>,
          },
        ],
      },
    ],
  },

  {
    path: "/login",
    main: () => (
      <FrontendLayout>
        <LoginPage />{" "}
      </FrontendLayout>
    ),
  },

  {
    path: "/register",
    main: () => <FrontendLayout> <RegisterContainer /> </FrontendLayout>,
  },
];
export default myRoutes;
