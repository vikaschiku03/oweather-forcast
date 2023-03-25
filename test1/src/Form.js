import React, { useEffect, useState } from "react";
import axios from "axios";
import api from "./api";

const Form1 = () => {
  const [searchField, setSearchField] = useState("");
  const [toggle, setToggle] = useState(false);
  const [apiResponse, setApiResponse] = useState();
  const [error, setError] = useState(false);
  const [errMessage, setErrorMessage] = useState("Something went wrong");

  /**
   * @method getUsersWeather
   * @description to get weather data
   */

  const getUsersWeather = async () => {
    try {
      /**
       * this api url gives error thats why I used my own url
       */

      // this api currently not working because as I know we need billing enable from google account.

      // const response = await api.get("/current" + "&query=" + searchField);

      // this working with simple axios call
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${searchField}&appid=d958001e6a31efdebac4b4104c82843d`
      );

      if (response.data.success != false) {
        setToggle(true);
        setError(false);
        setApiResponse(response.data);
      } else {
        setError(true);
      }
    } catch (err) {
      setErrorMessage(err.response.data.message);
      setToggle(false);
      setError(true);
    }
  };

  useEffect(() => {
    if (searchField != "") {
      const res = setTimeout(() => {
        getUsersWeather();
      }, 3000);
      return () => clearInterval(res);
    }
  }, [searchField]);

  return (
    <div className="taskConatiner">
      {!toggle && !error && (
        <div className="serachBarContainer ">
          <label className="">Find your location</label>
          <input
            type="text"
            className=""
            placeholder="Enter your location"
            onChange={(e) => {
              setSearchField(e.target.value);
            }}
          />
        </div>
      )}
      {toggle && !error && (
        <div className="cardContainer">
          <div className="backContainer">
            <input
              type="button"
              value={"Search"}
              onClick={() => {
                setToggle(false);
              }}
            />
          </div>
          <h3 className="cityName">
            {apiResponse.name ? apiResponse.name : apiResponse.location.name}
          </h3>
          <div className="divider" />
          <div className="imageContainer">
            <img
              src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png"
              alt=""
              className="image"
            />
            <h3 className="data">
              {apiResponse.main.temp_max
                ? (apiResponse.main.temp_max - 273.15).toFixed(2)
                : apiResponse.current.temperature}
              <sup
                style={{
                  top: "-0.9em",
                }}
              >
                o
              </sup>
              <span
                style={{
                  fontSize: "18px",
                  letterSpacing: "1px",
                  fontWeight: "300",
                }}
              >
                Cel
              </span>
            </h3>
          </div>
          <div className="divider" />
          <div className="footerContainer">
            <div className="footerContainerInner">
              <h3 className="data">
                {apiResponse.main.temp_max
                  ? (apiResponse.main.temp_max - 273.15).toFixed(2)
                  : apiResponse.current.temperature}
                <sup
                  style={{
                    top: "-0.9em",
                  }}
                >
                  o
                </sup>
                <span
                  style={{
                    fontSize: "18px",
                    letterSpacing: "1px",
                    fontWeight: "300",
                  }}
                >
                  Cel
                </span>
              </h3>
              <h5>Max Temp</h5>
            </div>
            <div className="footerContainerInner">
              <h3 className="data">
                {apiResponse.main.temp_max
                  ? (apiResponse.main.temp_max - 273.15).toFixed(2)
                  : apiResponse.current.temperature}
                <sup
                  style={{
                    top: "-0.9em",
                  }}
                >
                  o
                </sup>
                <span
                  style={{
                    fontSize: "18px",
                    letterSpacing: "1px",
                    fontWeight: "300",
                  }}
                >
                  Cel
                </span>
              </h3>
              <h5>Max Temp</h5>
            </div>
            <div className="footerContainerInner">
              <h3 className="data">
                {apiResponse.main.humidity
                  ? apiResponse.main.humidity
                  : apiResponse.current.humidity}
                <sup
                  style={{
                    top: "-0.9em",
                  }}
                >
                  o
                </sup>
                <span
                  style={{
                    fontSize: "18px",
                    letterSpacing: "1px",
                    fontWeight: "300",
                  }}
                >
                  Cel
                </span>
              </h3>
              <h5>Humidity</h5>
            </div>
          </div>
        </div>
      )}
      {error && (
        <div className="serachBarContainer errorContainer">
          <h1>{errMessage}.</h1>
          <input
            value="Go Back"
            onClick={() => {
              setError(false);
              setToggle(false);
            }}
            type="button"
          />
        </div>
      )}
    </div>
  );
};

export default Form1;