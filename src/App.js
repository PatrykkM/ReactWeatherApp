import React, { useState } from "react";
import axios from "axios";
function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=895284fb2d2c50a520ea537456963d9c`;
  const searchLoc = (e) => {
    if (e.key === `Enter`) {
      axios.get(url).then((response) => {
        setData(response.data);
      });
      setLocation("");
    }
  };

  
  return (
    <div className="App" >
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          placeholder="Enter Location"
          type="text"
          onKeyPress={searchLoc}
        />
      </div>
      <div className="container">
        <div className="topMenu" >
          <div className="location">
            <p className="City">{data.name}</p>
          </div>
          <div className="celcius">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className="desc">
            {data.weather ? <p className="wheater">{data.weather[0].main}</p> : null}
          </div>
        </div>
        {data.name !== undefined && (
          <div className="boottomMenu">
            <div className="FellsLike">
              {data.main ? (
                <p className="bold">{data.main.feels_like.toFixed()}°c</p>
              ) : null}
              <p>Fells Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
              <p>humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p className="bold">{data.wind.speed}MP/h</p> : null}
              <p>Wind speed</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
