import React from 'react'
import SpecialCard from './SpecialCard';
import { useState, useEffect } from "react";
import { getAllSpecial } from "../../../services/special";


export default function ListSpecial() {
    const [specials, setSpecials] = useState([]);
    useEffect(() => {
        getAllSpecial()
          .then((data) => {
            console.log("Data Response: ", data);
            setSpecials(data);
          })
          .catch((error) => {
            console.error("Error fetching special: ", error);
          });
      }, []);
      const count = specials.length;

    return (
        <div className="min-h-screen bg-gray-100  w-full">
          <div className="w-full h-full bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-4 bg-white border-b border-gray-100">
              <h2 className="text-xl font-semibold text-gray-800">Total Special</h2>
              <p className="text-sm text-gray-500">{`${count} Special `}</p>
            </div>
            
            <div className="h-[500px] overflow-y-auto custom-scrollbar">
              {specials.map((special, index) => (
                <SpecialCard
                  key={index}
                  special={special}
                />
              ))}
            </div>
          </div>

        </div>
      );
}