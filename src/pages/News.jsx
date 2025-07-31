// src/pages/News.jsx
import TabSwitcher from "../components/ui/TabSwitcher";
import NewsCard from "../components/ui/NewsCard";
import newsData from "../../public/data/news.json";

const News = () => {
  const categories = ["Institutional News", "Infrastructure News", "Blog", "Chapters News"];

  return (
    <div className="px-4 py-10 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">News & Blogs</h1>
      <TabSwitcher tabs={categories}>
        {categories.map((category) => (
          <div
            key={category}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            {newsData
              .filter((item) => item.category === category)
              .map((item, index) => (
                <NewsCard key={index} {...item} />
              ))}
          </div>
        ))}
      </TabSwitcher>
    </div>
  );
};

export default News;
