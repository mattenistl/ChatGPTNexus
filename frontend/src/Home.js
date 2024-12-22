import React, { useEffect, useState } from "react";

const Home = () => {
  const [backendMessage, setBackendMessage] = useState("");

  useEffect(() => {
    // Fetch data from the backend
    fetch(import.meta.env.VITE_API_URL)

      .then((response) => response.json())
      .then((data) => {
        console.log("Backend Response:", data);
        setBackendMessage(data.message);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setBackendMessage("Failed to fetch data from the backend.");
      });
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to FounderSmarter</h1>
      <h2>Backend Message:</h2>
      <p>{backendMessage}</p>
    </div>
  );
};

export default Home;
