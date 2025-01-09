import React from "react";
import NavbarV from "../components/NavbarV";
import MegaMenu from "../components/MegaMenu";
import Footer from "../components/Footer";
import NavbarFront from "../components/NavbarFront";
import { UserProfileProvider } from "../context/userProfileContext";

const FrontendLayout = ({ children }) => {
  return (
    <div className="">
    {/* <NavbarV /> */}

      <UserProfileProvider requireAuth={false}>
        <NavbarFront />
        </UserProfileProvider>

      {/* <MegaMenu/> */}
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default FrontendLayout;
