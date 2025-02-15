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
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-sm">{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsExtension;

/* 
<div
      style={{
        width: "100%",
        maxWidth: "400px",
        padding: "10px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f9f9f9",
      }}
      className="text-red-500"
    >
      <h2 style={{ textAlign: "center" }}>اخبار روز</h2>
      {news.length > 0 ? (
        news.map((article, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#fff",
              padding: "10px",
              borderRadius: "10px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              marginBottom: "15px",
              overflow: "hidden",
            }}
          >
            <img
              src={article.urlToImage}
              alt={article.title}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "10px",
              }}
            />

            <h3
              style={{
                fontSize: "1rem",
                margin: "10px 0",
              }}
            >
              {article.title}
            </h3>

            <p
              style={{
                fontSize: "0.9rem",
                color: "#555",
              }}
            >
              {article.description}
            </p>
          </div>
        ))
      ) : (
        <p style={{ textAlign: "center" }}>در حال بارگذاری اخبار...</p>
      )}
    </div>

*/
