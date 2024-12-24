import React from "react";
import PanelHeader from "../../components/Dashboard/service/PanelHeader";
import ListService from "../../components/Dashboard/service/ListService";
import { Outlet, useLocation } from "react-router-dom";
import NewService from "../../components/Dashboard/service/NewService";

export default function ServicePage() {
    const location = useLocation();
    // Kiểm tra nếu không phải nested route thì hiển thị NewService
    const isBasePath = location.pathname === "/dashboard/admin/services";
  return (
    <div>
      <PanelHeader />
      <div className="grid grid-cols-2">
        <div>
          <ListService />
        </div>
        {/* */}
        <div>{isBasePath ? <NewService /> : <Outlet />}</div>
      </div>
    </div>
  );
}
