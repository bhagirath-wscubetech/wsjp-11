import { useEffect, useState } from "react";
import History from "./History";
import Weather from "./Weather";

function App() {
  const [weather, setWeather] = useState(null);
  const [history, setHistory] = useState([]);
  const API_KEY = `21805bff7224936fa25d6cec016a0a4b`;

  const fetchWeather = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.cod == "200") {
      setWeather(data);
      setHistory(
        [
          ...history,
          {
            name: city,
            timestamp: new Date().getTime()
          }
        ]
      )
    } else {
      setWeather(null);
    }
  }

  useEffect(
    () => {
      const lsHistory = localStorage.getItem("history");
      if (lsHistory != null) {
        setHistory(JSON.parse(lsHistory));
      }
    },
    []
  )

  useEffect(
    () => {
      if (history.length != 0) localStorage.setItem("history", JSON.stringify(history));
    }
    , [history]
  )

  return (
    <div className="max-w-[1240px] gap-3 mx-auto grid grid-cols-4">
      <History history={history} />
      <Weather weather={weather} fetchWeather={fetchWeather} />
    </div>
  );
}

export default App;
