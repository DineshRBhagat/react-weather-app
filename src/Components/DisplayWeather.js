import React from "react";

function DisplayWeather(props) {
  const { data } = props;

  return (
    <div>
      <div className="card">
        <span>
          {data.name}, {data.sys.country} Weather
        </span>
        <br />
        <span>As of {new Date().toLocaleTimeString()}</span>
        <h1>
          {Math.floor(data.main.temp - 273.15)} <sup>o</sup>{" "}
          {data.weather[0].main}{" "}
        </h1>

        <span>{data.weather[0].description}</span>
      </div>

      <div className="flex-container">
        <table className="first">
          <tr>
            <td>High/Low</td>
            <td>
              {Math.floor(data.main.temp_max - 273.15)} /{" "}
              {Math.floor(data.main.temp_min - 273.15)} <sup>o</sup>c
            </td>
          </tr>
          <tr>
            <td>Humidity</td>
            <td>{data.main.humidity} %</td>
          </tr>
          <tr>
            <td>Pressure</td>
            <td>{data.main.pressure} hPa</td>
          </tr>
          <tr>
            <td>Visibility</td>
            <td>{data.visibility / 1000} Km</td>
          </tr>
        </table>

        <table className="second">
          <tr>
            <td>Wind</td>
            <td>{Math.floor((data.wind.speed * 18) / 5)} Km/hr</td>
          </tr>
          <tr>
            <td>Wind Direction</td>
            <td>
              {data.wind.deg}
              <sup>o</sup>
            </td>
          </tr>
          <tr>
            <td>Sunrise</td>
            <td>{new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</td>
          </tr>
          <tr>
            <td>Sunset</td>
            <td>{new Date(data.sys.sunset * 1000).toLocaleTimeString()}</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default DisplayWeather;
