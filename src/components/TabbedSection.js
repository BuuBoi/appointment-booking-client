import React, { useState } from 'react';
import TabbedItem from './TabbedItem';
import { getAllService } from '../services/service';
import { getAllSpecial } from '../services/special';
import { useEffect } from 'react';

const TabbedSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [services, setServices] = useState([]);
  const [specialties, setSpecialties] = useState([]);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  useEffect(() => {
    // Fetch services when component mounts
    const fetchServices = async () => {
      try {
        const [services, specialties] = await Promise.all([
                  getAllService(),
                  getAllSpecial(),
                ]);
        setServices(services || []);
        setSpecialties(specialties || []);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };
    fetchServices();
  }, []);

  return (
    <div className="container mx-auto px-16 bg-gray-50">
      <header className="py-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Top-rated online doctors & specialists available now.
        </h1>
        <p className="text-gray-600 pd-6">
          Choose from thousands of providers at everyday affordable prices.
          Book online today.
        </p>
      </header>
      {/**  TABS */}
      <div className="mx-auto max-w-6xl">
        <TabbedItem services = {services} specialties={specialties}/>
      </div>
    </div>
  );
};

export default TabbedSection;