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
import OnboardingContextProvider from "./context/context";
const myRoutes = [
  {
    path: "/",
    main: () => (
      <FrontendLayout>
        <Home />
      </FrontendLayout>
    ), // Home component
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
        <OnboardingContextProvider>
          <OnboardingPage />
        </OnboardingContextProvider>
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
    main: () => <BackendLayout />,
    routeChild: [
      { path: "", main: () => <DashboarPage /> },
      { path: "settings", main: () => <SettingPage /> },
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
            main: () => <div className="h-50 w-50 bg-blue-500">View</div>,
          },
        ],
      },
      {
        path: "products",
        main: () => (
          <div className="min-h-screen p-10 w-full">
            <div className=" mx-auto space-y-6">
              <ProductPage />
              {/* <Outlet/> */}
            </div>
          </div>
        ),
      },
      { path: "products/update", main: () => <EditProduct /> },
    ],
  },

  //dash for admin
  {
    path: "/dashboard/admin",
    main: () => <BackendLayout />,
    routeChild: [
      { path: "", main: () => <DashboarPage /> }, // phai chia them dashboard cho tung role

      { path: "settings", main: () => <SettingPage /> },

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
          }
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
          }
        ],
      },
      {
        path: "symptoms",
        main: () => (
          <div className="min-h-screen p-5 w-full">
            <div className=" mx-auto space-y-6">
              <SymptomPage />
            </div>
          </div>
        ),
        routeChild: [
          {
            path: "new",
            main: () => <CreateSymptomPage />,
          },
          {
            path: "view/:slug",
            main: () => <UpdateSymptomPage />,
          }
        ],
      },

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
            main: () => <div className="h-50 w-50 bg-blue-500">View</div>,
          },
        ],
      },
      {
        path: "products",
        main: () => (
          <div className="min-h-screen p-10 w-full">
            <div className=" mx-auto space-y-6">
              <ProductPage />
              {/* <Outlet/> */}
            </div>
          </div>
        ),
      },
      { path: "products/update", main: () => <EditProduct /> },
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
    main: () => <RegisterContainer />,
  },
];
export default myRoutes;
