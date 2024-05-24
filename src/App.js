import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Pune");

  // useEffect(() => {
  //   fetch(
  //     `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=e114695862036dc3dbf3a28633955d60`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setInput(data);
  //       setSearch(response);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data using fetch API:", error);
  //     });
  // }, []);

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=e114695862036dc3dbf3a28633955d60`;
      const res = await fetch(url);
      const resJson = res.json();
      console.log(resJson);
      setCity(resJson);
    };

    fetchApi();
  }, [search]);

  return (
    <div className="full_page">
      <div className="main">
        <input
          type="search"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
        <h2>
          <i className="fa-solid fa-street-view"></i> {search}
        </h2>
        <b>34</b>
        <p>Min: 33.24°C | Max: 29.24°C</p>
        <section className="section">
          <div className="wave wave1"></div>
          <div className="wave wave2"></div>
          <div className="wave wave3"></div>
        </section>
      </div>
    </div>
  );
};

export default App;
