import React, { useEffect } from "react";
import { Dashboard } from "../../components/Dashboard/DashBoard";
import * as State from './../../services/stats';
import { useState } from "react";
import { useUserProfile } from "../../context/userProfileContext";


export default function DashboarPage() {
  const {userProfile} = useUserProfile();
  const role = userProfile?.role;
  const [stats, setStats] = useState({});
   useEffect(() => {
    const fetchStats = async () => {
      const stats = await State.getStats();
      setStats(stats);
    };
    fetchStats();
  }, []);
  console.log(stats);
  if(!stats) {
    return <h1>Loading...</h1>;
  }
  if(role == "ADMIN") {
    return <Dashboard stats = {stats}/>;
  }
  else if(role == "DOCTOR") {
    return <h1>Doctor Dashboard</h1>;
  }
  else {
    return <h1>PATIENT DashBoard</h1>;
  }
}
