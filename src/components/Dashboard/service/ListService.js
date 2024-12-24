import React from 'react'
import ServiceCard from './ServicerCard';
import { useState, useEffect } from "react";
import { getAllService } from "../../../services/service";


export default function ListService() {
    const [services, setServices] = useState([]);
    useEffect(() => {
        getAllService()
          .then((data) => {
            console.log("Data Response: ", data);
            setServices(data);
          })
          .catch((error) => {
            console.error("Error fetching services: ", error);
          });
      }, []);
      const count = services.length;

    return (
        <div className="min-h-screen bg-gray-100  w-full">
          <div className="w-full h-full bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-4 bg-white border-b border-gray-100">
              <h2 className="text-xl font-semibold text-gray-800">Total Service</h2>
              <p className="text-sm text-gray-500">{`${count} Service `}</p>
            </div>
            
            <div className="h-[500px] overflow-y-auto custom-scrollbar">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  service={service}
                />
              ))}
            </div>
          </div>

        </div>
      );
}