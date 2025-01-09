import React, { useEffect, useState, useCallback } from "react";
import { StatsGrid } from "./Stats/StatsGrid";
import { TransactionList } from "./Transactions/TransactionList";
import { RecentSales } from "./Recent/RecentSales";
import { useUserProfile } from "../../context/userProfileContext";
import * as State from "./../../services/stats";
import { getAllSpecial } from "../../services/special";
import { getAllService } from "../../services/service";
import { getAllDoctors } from "../../services/doctorProfile";
import { getAllAppointment } from "../../services/appointment";
import { set } from "date-fns";

export const Dashboard = () => {

  const [stats, setStats] = useState({
    services: 0,
    specials: 0,
    doctors: 0,
    appointments: 0,
  });
  const [data, setData] = useState({
    services: [],
    specials: [],
    doctors: [],
    appointments: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchStats = useCallback(async () => {
    try {
      const [specials, services, doctors, appointments] = await Promise.all([
        getAllSpecial(),
        getAllService(),
        getAllDoctors(),
        getAllAppointment(),
      ]);

      // Lưu toàn bộ mảng dữ liệu vào state `data`
      setData({
        services,
        specials,
        doctors: doctors.data, // Trích xuất data từ response
        appointments,
      });

      // Cập nhật số lượng vào `stats`
      setStats({
        services: services.length,
        specials: specials.length,
        doctors: doctors.data.length,
        appointments: appointments.length,
      });

      setLoading(false);
    } catch (error) {
      setError("Error fetching stats");
      console.error("Error fetching stats:", error);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchStats();
  }, [fetchStats]);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <div className="min-h-screen p-10 w-full">
      <p className="font-bold text-blue-500 text-xl">Wellcom, Admin</p>
      <div className=" mx-auto space-y-6 py-5">
        <StatsGrid stats={stats} />
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TransactionList doctors={data.doctors} />
          <RecentSales />
        </div> */}
      </div>
    </div>
  );
};
