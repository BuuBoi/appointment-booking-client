import React from "react";
import TabButton from "./TabButton";

// interface TabBarProps {
//   activeTab: TabType;
//   onTabChange: (tab: TabType) => void;
// }
// export type TabType = 'all' | 'active' | 'draft' | 'archived';

const TabBar = ({ activeTab, onTabChange }) => {
  //   const tabs: { type: TabType; label: string }[] = [
  const tabs = [
    { type: "all", label: "All" },
    { type: "active", label: "Active" },
    { type: "draft", label: "Draft" },
    { type: "archived", label: "Archived" },
  ];

  return (
    <div className="border-b border-gray-200">
      <nav className="-mb-px flex space-x-8">
        {tabs.map(({ type, label }) => (
          <TabButton
            key={type}
            type={type}
            label={label}
            active={activeTab === type}
            onClick={onTabChange}
          />
        ))}
      </nav>
    </div>
  );
};

export default TabBar;
