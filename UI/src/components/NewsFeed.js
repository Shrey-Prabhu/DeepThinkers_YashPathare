import React, { useEffect, useState } from "react";
import { fetchNews } from "../api/newsData";

const NewsFeed = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNews().then(setNews);
  }, []);

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-3">Latest Financial News</h2>
      <ul>
        {news.map((article, index) => (
          <li key={index} className="mb-2">
            <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsFeed;
