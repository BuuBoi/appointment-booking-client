import React from "react";

import FrontendLayout from "./layout/FrontendLayout";
import Home from "./pages/front/Home";
import DoctorPage from "./pages/DoctorPage";
import BackendLayout from "./layout/BackendLayout";
import DashboarPage from "./pages/back/DashboarPage";

import LoginPage from "./pages/front/LoginPage";
import RegisterContainer from "./containers/RegisterContainer";
import DoctorLanding from "./pages/front/DoctorLanding";
import SettingPage from "./pages/back/SettingPage";
import ProductPage from "./pages/back/ProductPage";
import EditProduct from "./pages/back/EditProductPage";
import { Outlet } from "react-router-dom";
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
    path: "/contact",
    main: () => <h1>Contact</h1>, // Home component
  },
  {
    path: "/join/doctor",
    main: () => (
      <FrontendLayout>
        <DoctorLanding />
      </FrontendLayout>
    ), // Home component
  },
  {
    path: "/dashboard",
    main: () => <BackendLayout />,
    routeChild: [
      { path: "", main: () => <DashboarPage /> },
      { path: "settings", main: () => <SettingPage /> },
      {
        path: "products",
        main: () => (
          <div className="min-h-screen p-10 w-full">
            <div className=" mx-auto space-y-6">
              <ProductPage />
              {/* <Outlet/> */}
            </div>
          </div>
        )
      },
      { path: "products/update", main: () => <EditProduct /> }
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
