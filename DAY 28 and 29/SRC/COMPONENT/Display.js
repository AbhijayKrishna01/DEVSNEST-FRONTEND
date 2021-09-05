import React from "react";
import "./displayweather.css";
function DisplayWeather(props) {
  const { data } = props;
  const iconurl =
    "http://openweathermap.org/img/wn/" +
    `${data.cod != 404 ? data.weather[0].icon : null}` +
    ".png";
  return (
    <div className="displayweather">
      {data.cod != 404 ? (
        <React.Fragment>
          <div className="maincard">
            <span className="cardtitle">
              {data.name} , {data.sys.country}. Weather
            </span>
            

            <h1>
              {" "}
              {Math.floor(data.main.temp - 273.15)}
              <sup>o</sup>
            </h1>
            <span className="weather-main">{data.weather[0].main}</span>
            <img className="weather-icon" src={iconurl} alt="" srcset="" />
            <span className="weather-description">
              {" "}
              {data.weather[0].description}
            </span>
          </div>
          
        </React.Fragment>
      ) : (
        <div className="maincard">
          <h2>{data.message}</h2>
        </div>
      )}
    </div>
  );
}

export default DisplayWeather;