chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "fetchNews") {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&pageSize=5&apiKey=YOUR_API_KEY"
    )
      .then((response) => response.json())
      .then((data) => {
        sendResponse({ news: data.articles });
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
        sendResponse({ news: [] });
      });
    return true; // Required to use sendResponse asynchronously
  }
});
