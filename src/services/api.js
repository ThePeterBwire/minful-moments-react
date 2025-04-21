export const fetchRandomQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      return { text: data.content, author: data.author || "Unknown" };
    } catch {
      return { text: "Today is a great day!", author: "System" };
    }
  };