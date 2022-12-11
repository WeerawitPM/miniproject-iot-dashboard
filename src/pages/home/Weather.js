import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Weather.css";

const Weather = () => {
    const [latitude, setLatitude] = useState([]);
    const [longitude, setLongitude] = useState([]);
    const [weatherData, setWeatherData] = useState("");

    const savePositionToState = (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
    };
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=4b7014edd438622eb1ab38a5a9c1d738&units=metric`;

    const getWeather = async () => {

        try {
            navigator.geolocation.getCurrentPosition(savePositionToState);
            const res = await axios.get(url);
            console.log(res.data)
            setWeatherData(res.data);
        } catch (error) { }
    };

    useEffect(() => {
        getWeather();
    }, [url]);


    return (
        <div className="container-weather">
            <div className="d-flex weather-center">
                <div className="weather-icon">
                    {weatherData.weather ? (
                        <img
                            src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
                            alt="weather-icon"
                        />
                    ) : null}
                </div>
                <div>
                    {weatherData.main ? (
                        <p className="p-weather1">
                            {weatherData.main.temp + "°C"}
                        </p>
                    ) : null}
                    {weatherData.weather ? (
                        <p className="p-weather">
                            {weatherData.weather[0].main}
                        </p>
                    ) : null}
                </div>
            </div>
            <div className="weather-bottom">
                {weatherData.name ? (
                    <p className="p-weather">{weatherData.name}</p>
                ) : null}
            </div>
        </div>
    );
};

export default Weather;