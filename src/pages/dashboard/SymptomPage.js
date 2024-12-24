
import React from "react";
import PanelHeader from "../../components/Dashboard/symptom/PanelHeader";
import ListSymptom from "../../components/Dashboard/symptom/ListSymptom";
import { Outlet, useLocation } from "react-router-dom";
import NewSymptom from "../../components/Dashboard/symptom/NewSymptom";
export default function SymptomPage() {

    const location = useLocation();
        // Kiểm tra nếu không phải nested route thì hiển thị NewService
        const isBasePath = location.pathname === "/dashboard/admin/symptoms";
      return (
        <div>
          <PanelHeader />
          <div className="grid grid-cols-2">
            <div>
              <ListSymptom />
            </div>
            {/* */}
            <div>{isBasePath ? <NewSymptom /> : <Outlet />}</div>
          </div>
        </div>
      );
}
