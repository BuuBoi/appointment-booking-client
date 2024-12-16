import  Navbar  from "../components/Dashboard/NavBar";
import React from "react";
import Sidebar from "../components/Dashboard/SideBar";
import { Outlet } from "react-router-dom";

//Nhung component trong folder nay la layout cua nhung trang tuong tu nhu Server component cua nextjs(Backend)
const BackendLayout = () => {
    return (
        <div>
            <Navbar/>
            <div className="flex">
                <Sidebar/>
                <Outlet/>
            </div>
        </div>
    );
};

export default BackendLayout;