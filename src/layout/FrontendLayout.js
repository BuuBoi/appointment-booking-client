import React from "react";
import NavbarV from "../components/NavbarV";
import MegaMenu from "../components/MegaMenu";
import Footer from "../components/Footer";

const FrontendLayout = ({ children }) => {
  return (
    <div className="">
      <NavbarV />
      {/* <MegaMenu/> */}
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default FrontendLayout;
