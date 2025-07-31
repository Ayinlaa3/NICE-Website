//src/components/ui/TabSwitcher.jsx
import { useState } from "react";

const TabSwitcher = ({ tabs = [], initialTab = 0, children }) => {
  const [activeTab, setActiveTab] = useState(initialTab);

  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-2 justify-start border-b border-gray-200 mb-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 font-semibold rounded-t-md text-sm md:text-base transition duration-200 hover:bg-gray-100 focus:outline-none ${
              activeTab === index
                ? "border-b-2 border-green-700 text-green-700"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div>{children[activeTab]}</div>
    </div>
  );
};

export default TabSwitcher;