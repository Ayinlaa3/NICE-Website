// src/pages/Publications.jsx

import TabSwitcher from "../components/ui/TabSwitcher";
import PublicationCard from "../components/ui/PublicationCard";
import journals from "../../public/data/journals.json";
import newsletters from "../../public/data/newsletters.json";

const Publications = () => {
  return (
    <div className="px-4 py-10 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Publications</h1>
      <TabSwitcher tabs={["Journals", "Newsletters"]}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {journals.map((item, index) => (
            <PublicationCard key={index} {...item} />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {newsletters.map((item, index) => (
            <PublicationCard key={index} {...item} />
          ))}
        </div>
      </TabSwitcher>
    </div>
  );
};

export default Publications;
