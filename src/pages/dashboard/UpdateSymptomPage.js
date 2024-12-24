import React from "react";
import { useLocation } from "react-router-dom";
import SymptomForm from "../../components/Dashboard/symptom/SymptomForm";

export default function UpdateSymptomPage() {
  const location = useLocation();
  const { Symptom } = location.state || {};

  if (!Symptom) {
    return <p>No Symptom data available</p>;
  }

  return <SymptomForm initialData={Symptom} />;
}
