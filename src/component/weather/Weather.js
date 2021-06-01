import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { useHistory, useLocation } from "react-router";

import * as S from './style';
import * as I from 'asset/index';

const Weather = () => {
    const [arr, setArr] = useState([]);
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
            // localStorage.clear();
            history.goBack();
            window.location.reload();
        })
    }, []);

    console.log(arr);

    const date = arr[0]?.fcstDate;
    const dateText = date && date.substr(0, 4) + "년 " + date.substr(4, 2) + "월 " + date.substr(6, 2) + "일"

    return (
        <S.Container>
            <S.Date>{dateText && dateText}</S.Date>
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