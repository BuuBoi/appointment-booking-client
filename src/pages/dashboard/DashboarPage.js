import React, { useEffect } from "react";
import { Dashboard } from "../../components/Dashboard/DashBoard";
import * as State from './../../services/stats';
import { useState } from "react";
import { useUserProfile } from "../../context/userProfileContext";
import DashBoardDoctor from "../../components/Dashboard/DashBoardDoctor";


export default function DashboarPage() {
  const {userProfile} = useUserProfile();
  const role = userProfile?.role;
  
  if(role == "ADMIN") {
    return <Dashboard />;
  }
  else if(role == "DOCTOR") {
    return <DashBoardDoctor/>;
  }
  else {
    return <h1>PATIENT DashBoard</h1>;
  }
}
