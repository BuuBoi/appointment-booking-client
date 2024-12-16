import React, { useState } from "react";
import { Settings } from "lucide-react";

// interface SettingsTabProps {
//   label: string;
//   isActive?: boolean;
//   onClick: () => void;
// }

const SettingsTab = ({ id, label, isActive, onClick }) => (
  <button
    id={id}
    onClick={onClick}
    className={`px-4 py-2 text-sm font-medium transition-colors ${
      isActive
        ? "text-gray-900 border-b-2 border-gray-900"
        : "text-gray-500 hover:text-gray-700"
    }`}
  >
    {label}
  </button>
);

const SettingsLayout = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    { id: 1, label: "General" },
    { id: 2, label: "Security" },
    { id: 3, label: "Integrations" },
    { id: 4, label: "Support" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-full mx-auto px-4 py-8">
        <div className="flex items-center gap-2 mb-6">
          <Settings className="w-6 h-6" />
          <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        </div>

        <div className="flex border-b border-gray-200 mb-8">
          {tabs.map((tab) => (
            <SettingsTab
              key={tab.id}
              id={tab.id}
              label={tab.label}
              isActive={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
            />
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          {activeTab === 1 && <div>General Settings</div>}
          {activeTab === 2 && <div>Security Settings</div>}
          {activeTab === 3 && <div>Integrations Settings</div>}
          {activeTab === 4 && <div>Support Settings</div>}
        </div>
      </div>
    </div>
  );
};

export default SettingsLayout;
