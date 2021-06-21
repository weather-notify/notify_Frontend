import React from 'react';

import WeatherItem from './WeatherItem';

const WeatherList = ({arr, weatherTime}) => {
    const weatherItem = weatherTime.map(weather => (
        <WeatherItem arr={arr.filter(item => item.fcstTime === weather.time)} />
    ))

    return (weatherItem)
}

export default WeatherList;