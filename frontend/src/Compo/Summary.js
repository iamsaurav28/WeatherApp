import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./WeatherApp.css";

const Summary = () => {
  const [locations, setLocations] = useState([
    { name: 'Gujarat', api: 'https://api.weatherapi.com/v1/current.json?key=22727d3d08b94d82a38114046231609&q=gujarat&aqi=no' },
    { name: 'Maharashtra', api: 'https://api.weatherapi.com/v1/current.json?key=22727d3d08b94d82a38114046231609&q=maharashtra&aqi=no' },
    { name: 'Kolkata', api: 'https://api.weatherapi.com/v1/current.json?key=22727d3d08b94d82a38114046231609&q=kolkata&aqi=no' }
  ]);

  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await Promise.all(locations.map(async location => {
        const response = await axios.get(location.api);
        return response.data;
      }));
      setWeatherData(data);
    };
    fetchData();
  }, [locations]);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
   
    speed: 3000,
    autoplay: true,

  };

  return (
    <div className="weather-app">
      <h3>Climate Reports</h3>
      <Slider {...settings}>
        {weatherData.map((data, index) => (
          <div className='carousel-box' key={index}>
            <h2><i class="fa-solid fa-location-dot"></i> {locations[index].name}</h2>
            <img className='carousel-img' src={data.current.condition.icon} alt={data.current.condition.text} />
            <p>{data.current.condition.text}</p>
            <p><i class="fa-solid fa-temperature-three-quarters"></i> Temperature: {data.current.temp_c}°C</p>
            <p>Humidity: {data.current.humidity}%</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Summary;
