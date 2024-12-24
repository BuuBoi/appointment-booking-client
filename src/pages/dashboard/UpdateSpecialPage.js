import React from "react";
import { useLocation } from "react-router-dom";
import SpecialForm from "../../components/Dashboard/special/SpecialForm";

export default function UpdateSpecialPage() {
  const location = useLocation();
  const { special } = location.state || {};

  if (!special) {
    return <p>No special data available</p>;
  }

  return <SpecialForm initialData={special} />;
}
