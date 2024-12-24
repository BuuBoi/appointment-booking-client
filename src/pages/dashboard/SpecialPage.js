
import React from "react";
import PanelHeader from "../../components/Dashboard/special/PanelHeader";
import ListSpecial from "../../components/Dashboard/special/ListSpecial";
import { Outlet, useLocation } from "react-router-dom";
import NewSpecial from "../../components/Dashboard/special/NewSpecial";
export default function SpecialPage() {

    const location = useLocation();
        // Kiểm tra nếu không phải nested route thì hiển thị NewService
        const isBasePath = location.pathname === "/dashboard/admin/specials";
      return (
        <div>
          <PanelHeader />
          <div className="grid grid-cols-2">
            <div>
              <ListSpecial />
            </div>
            {/* */}
            <div>{isBasePath ? <NewSpecial /> : <Outlet />}</div>
          </div>
        </div>
      );
}
