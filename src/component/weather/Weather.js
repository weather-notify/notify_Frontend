import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { useHistory, useLocation } from "react-router";

import WeatherTemperature from './weatherTemp/WeatherTemperature';
import WeatherList from './weatherList/WeatherList';

import * as S from './style';

const Weather = () => {
    const [arr, setArr] = useState([]);
    const [weatherTime, setWeatherTime] = useState([
        {id:1, time: "0000"},
        {id:2, time: "0300"},
        {id:3, time: "0600"},
        {id:4, time: "0900"},
        {id:5, time: "1200"},
        {id:6, time: "1500"},
        {id:7, time: "1800"},
        {id:8, time: "2100"},
    ])
    const history = useHistory();
    const location = useLocation();
    const point = location.state.point;

    const token = localStorage.getItem("accessToken");
    const tokenType = localStorage.getItem("tokenType");

    useEffect(() => {
        axios.get(`http://localhost:8000/weather?nx=${point.x}&ny=${point.y}`, {
            headers: {
                'Authorization': `${tokenType} ${token}`
            }
        })
        .then(res => {
            setArr(res.data);
        }).catch(err => {
            alert("로그인을 다시 해주세요.");
            localStorage.clear();
            window.location.reload();
            history.push('/');
        })
    }, []);

    const date = arr[0]?.fcstDate;
    const dateText = date && date.substr(0, 4) + "년 " + date.substr(4, 2) + "월 " + date.substr(6, 2) + "일"

    return (
        <S.Container>
            <S.Date>{dateText && dateText}</S.Date>
            <WeatherTemperature arr={arr} weatherTime={weatherTime} />
            <S.WeatherLine>
                <WeatherList arr={arr} weatherTime={weatherTime} />
            </S.WeatherLine>
        </S.Container>
    )
}

export default Weather;