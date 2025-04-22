import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Search from "./components/Search";
import List from "./components/List";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchBeer = async () => {
      try {
        const options = {
          method: "GET",
          url: "https://beer9.p.rapidapi.com/",
          params: { name: "Berkshire Easy Lite" },
          headers: {
            "x-rapidapi-host": "beer9.p.rapidapi.com",
            "x-rapidapi-key": "YOUR_RAPIDAPI_KEY", // <-- Replace this with your actual API key
          },
        };

        const response = await axios.request(options);
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBeer();
  }, []);

  return (
    <>
      <List />
      {data && (
        <pre style={{ textAlign: "left" }}>{JSON.stringify(data, null, 2)}</pre>
      )}
    </>
  );
}

export default App;
