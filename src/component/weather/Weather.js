import React from 'react';

import * as S from './style';

import * as I from 'asset/index';

const Weather = () => {
    return (
        <S.Container>
            <S.Date>2021년 05월 20일</S.Date>
            <S.TemperatureLine>
                <S.Temperature>최저기온 : 3</S.Temperature>
                <S.Temperature>최고기온 : 25</S.Temperature>
            </S.TemperatureLine>
            <S.WeatherLine>
                <S.WeatherDiv>
                    <S.WeatherTime>00시</S.WeatherTime>
                    <S.Image src={I.rain} />
                    <S.WeatherInfoDiv>
                        <S.WeatherInfo>강수확률 : </S.WeatherInfo>
                        <S.WeatherInfo>습도 : </S.WeatherInfo>
                        <S.WeatherInfo>풍향 : </S.WeatherInfo>
                        <S.WeatherInfo>풍속 : </S.WeatherInfo>
                    </S.WeatherInfoDiv>
                </S.WeatherDiv>
                <S.WeatherDiv>
                    <S.WeatherTime>03시</S.WeatherTime>
                    <S.Image src={I.snow} />
                    <S.WeatherInfoDiv>
                        <S.WeatherInfo>강수확률 : </S.WeatherInfo>
                        <S.WeatherInfo>습도 : </S.WeatherInfo>
                        <S.WeatherInfo>풍향 : </S.WeatherInfo>
                        <S.WeatherInfo>풍속 : </S.WeatherInfo>
                    </S.WeatherInfoDiv>
                    </S.WeatherDiv>
                <S.WeatherDiv>
                    <S.WeatherTime>06시</S.WeatherTime>
                    <S.Image src={I.sunny} />
                    <S.WeatherInfoDiv>
                        <S.WeatherInfo>강수확률 : </S.WeatherInfo>
                        <S.WeatherInfo>습도 : </S.WeatherInfo>
                        <S.WeatherInfo>풍향 : </S.WeatherInfo>
                        <S.WeatherInfo>풍속 : </S.WeatherInfo>
                    </S.WeatherInfoDiv>
                </S.WeatherDiv>
                <S.WeatherDiv>
                    <S.WeatherTime>09시</S.WeatherTime>
                    <S.Image src={I.windy} />
                    <S.WeatherInfoDiv>
                        <S.WeatherInfo>강수확률 : </S.WeatherInfo>
                        <S.WeatherInfo>습도 : </S.WeatherInfo>
                        <S.WeatherInfo>풍향 : </S.WeatherInfo>
                        <S.WeatherInfo>풍속 : </S.WeatherInfo>
                    </S.WeatherInfoDiv>
                </S.WeatherDiv>
            </S.WeatherLine>
            <S.WeatherLine>
                <S.WeatherDiv>
                    <S.WeatherTime>12시</S.WeatherTime>
                    <S.Image src={I.snow} />
                    <S.WeatherInfoDiv>
                        <S.WeatherInfo>강수확률 : </S.WeatherInfo>
                        <S.WeatherInfo>습도 : </S.WeatherInfo>
                        <S.WeatherInfo>풍향 : </S.WeatherInfo>
                        <S.WeatherInfo>풍속 : </S.WeatherInfo>
                    </S.WeatherInfoDiv>
                </S.WeatherDiv>
                <S.WeatherDiv>
                    <S.WeatherTime>15시</S.WeatherTime>
                    <S.Image src={I.windy} />
                    <S.WeatherInfoDiv>
                        <S.WeatherInfo>강수확률 : </S.WeatherInfo>
                        <S.WeatherInfo>습도 : </S.WeatherInfo>
                        <S.WeatherInfo>풍향 : </S.WeatherInfo>
                        <S.WeatherInfo>풍속 : </S.WeatherInfo>
                    </S.WeatherInfoDiv>
                </S.WeatherDiv>
                <S.WeatherDiv>
                    <S.WeatherTime>18시</S.WeatherTime>
                    <S.Image src={I.cloud} />
                    <S.WeatherInfoDiv>
                        <S.WeatherInfo>강수확률 : </S.WeatherInfo>
                        <S.WeatherInfo>습도 : </S.WeatherInfo>
                        <S.WeatherInfo>풍향 : </S.WeatherInfo>
                        <S.WeatherInfo>풍속 : </S.WeatherInfo>
                    </S.WeatherInfoDiv>
                </S.WeatherDiv>
                <S.WeatherDiv>
                    <S.WeatherTime>21시</S.WeatherTime>
                    <S.Image src={I.cloud} />
                    <S.WeatherInfoDiv>
                        <S.WeatherInfo>강수확률 : </S.WeatherInfo>
                        <S.WeatherInfo>습도 : </S.WeatherInfo>
                        <S.WeatherInfo>풍향 : </S.WeatherInfo>
                        <S.WeatherInfo>풍속 : </S.WeatherInfo>
                    </S.WeatherInfoDiv>
                </S.WeatherDiv>
            </S.WeatherLine>
        </S.Container>
    )
}

export default Weather;