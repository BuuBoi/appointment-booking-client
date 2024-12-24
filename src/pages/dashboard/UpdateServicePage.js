import React from "react";
import { useLocation } from "react-router-dom";
import ServiceForm from "../../components/Dashboard/service/ServiceForm";

export default function UpdateServicePage() {
  const location = useLocation();
  const { service } = location.state || {};

  if (!service) {
    return <p>No service data available</p>;
  }

  return <ServiceForm initialData={service} />;
}
