import React from 'react';

import * as S from './style';

const WeatherTemperature = ({arr, weatherTime}) => {
    const lowTemp = arr?.filter(item => (
        weatherTime[2]?.time === item?.fcstTime
    ));
    
    const highTemp = arr?.filter(item => (
        weatherTime[5]?.time === item?.fcstTime
    ));

    const lowTempText = lowTemp && "최저기온 : " + lowTemp[7]?.fcstValue;

    const highTempText = highTemp && "최고기온 : " + highTemp[5]?.fcstValue;

    return (
        <S.Container>
            <S.TemperatureLine>
                <S.Temperature>{lowTempText && lowTempText}</S.Temperature>
                <S.Temperature>{highTempText && highTempText}</S.Temperature>
            </S.TemperatureLine>
        </S.Container>
    )
}

export default WeatherTemperature;