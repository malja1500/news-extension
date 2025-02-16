import { useEffect, useState } from "react";

const NewsExtension = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&pageSize=5&apiKey=39926d7968df4d98ab47847779791984"
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.articles) {
          setNews(data.articles);
        } else {
          setError("No articles found.");
        }
      })
      .catch(() => setError("Error fetching news."))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="p-4 w-80 bg-white text-black z-40">
      <h2 className="text-lg font-bold">Latest News</h2>

      {loading && <p>Loading news...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <ul className="mt-2">
        {news.map((item, index) => (
          <li key={index} className="p-2 border-b">
            <img
              className="w-full h-auto rounded-md"
              src={item.urlToImage}
              alt={item.title}
            />
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-sm">{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsExtension;
