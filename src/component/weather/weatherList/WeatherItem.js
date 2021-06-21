import React from 'react';

import * as S from './style';
import * as I from 'asset/index';

const WeatherItem = ({arr}) => {
    console.log(arr);
    const probability = "강수 확률 : " + arr[0]?.fcstValue + "%";
    const precipitation = arr[arr.findIndex(i => i.category === "R06")]?.fcstValue;
    const humidity = "습도 : " + arr[arr.findIndex(i => i.category === "REH")]?.fcstValue + "%";
    const windSpeed = "풍속 : " + arr[arr.findIndex(i => i.category === "WSD")]?.fcstValue + "m/s";

    const precipitationType = arr[arr.findIndex(i => i.category === "PTY")]?.fcstValue;
    const sky = arr[arr.findIndex(i => i.category === "SKY")]?.fcstValue;

    const precipitationText = precipitation === undefined ? "강수량 : 0mm" : "강수량 : " + precipitation + "mm";
    let weatherIcon = "";

    if(sky == 1) weatherIcon = I.sunny;
    else if(sky == 2) weatherIcon = I.cloudy;
    else weatherIcon = I.cloud;

    switch(precipitationType) {
        case '1':
        case '4':
            weatherIcon = I.rain;
            break;
        case '3':
        case '7':
            weatherIcon = I.snow;
            break;
        case '5':
            weatherIcon = I.water;
            break;
    }

    return (
        <S.Container>
            <S.WeatherInfoDiv>
                <S.WeatherTime>{arr[0]?.fcstTime.substr(0, 2) + "시"}</S.WeatherTime>
                <S.Image src={weatherIcon} />
                <S.WeatherInfo>{probability && probability}</S.WeatherInfo>
                <S.WeatherInfo>{precipitationText && precipitationText}</S.WeatherInfo>
                <S.WeatherInfo>{humidity && humidity}</S.WeatherInfo>
                <S.WeatherInfo>{windSpeed && windSpeed}</S.WeatherInfo>
            </S.WeatherInfoDiv>
        </S.Container>
    )
}

export default WeatherItem;