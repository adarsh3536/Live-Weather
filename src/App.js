import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=e114695862036dc3dbf3a28633955d60`;
      const res = await fetch(url);
      const resJson = await res.json();
      setCity(resJson.main);
    };

    fetchApi();
  }, [search]);

  return (
    <div className="full_page">
      <div className="main">
        <input
          value={search}
          type="search"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />

        {!city ? (
          <>
            <p className="noDataFound">No Data Found</p>
            <section className="section">
              <div className="wave wave1"></div>
              <div className="wave wave2"></div>
              <div className="wave wave3"></div>
            </section>
          </>
        ) : (
          <>
            <h2>
              <i className="fa-solid fa-street-view"></i> {search}
            </h2>
            <b>{city.temp}°C</b>
            <p>
              Min: {city.temp_min}°C | {city.temp_max}°C
            </p>
            <section className="section">
              <div className="wave wave1"></div>
              <div className="wave wave2"></div>
              <div className="wave wave3"></div>
            </section>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
