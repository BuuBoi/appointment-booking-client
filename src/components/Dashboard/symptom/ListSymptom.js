import React from 'react'
import SymptomCard from './SymptomCard';
import { useState, useEffect } from "react";
import { getAllSymptom } from "../../../services/symptom";


export default function ListSymptom() {
    const [symptoms, setSymptoms] = useState([]);
    useEffect(() => {
        getAllSymptom()
          .then((data) => {
            console.log("Data Response: ", data);
            setSymptoms(data);
          })
          .catch((error) => {
            console.error("Error fetching Symptom: ", error);
          });
      }, []);
      const count = symptoms.length;

    return (
        <div className="min-h-screen bg-gray-100  w-full">
          <div className="w-full h-full bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-4 bg-white border-b border-gray-100">
              <h2 className="text-xl font-semibold text-gray-800">Total Symptom</h2>
              <p className="text-sm text-gray-500">{`${count} Symptom `}</p>
            </div>
            
            <div className="h-[500px] overflow-y-auto custom-scrollbar">
              {symptoms.map((symptom, index) => (
                <SymptomCard
                  key={index}
                  symptom={symptom}
                />
              ))}
            </div>
          </div>

        </div>
      );
}