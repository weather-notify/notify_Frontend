import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
`

export const Date = styled.div`
    width: 100%;
    margin-top: 1%;
    padding: 2%;
    text-align: center;
    font-size: 3rem;
    color: rgba(0, 0, 200);
`

export const TemperatureLine = styled.div`
    width: 100%;
    padding: 1%;
    display: flex;
    justify-content: center;
`

export const Temperature = styled.div`
    width: 20%;
    text-align: center;
    font-size: 2.5rem;
    color: rgba(0, 0, 200);
    float: left;
    margin-bottom: 1%;
`

export const WeatherLine = styled.div`
    width: 100%;
    height: 20%;
`

export const WeatherDiv = styled.div`
    width: 24.8%;
    height: 100%;
    float: left;
    border: 1px solid;
    margin-bottom: 3%;
    overflow-y: hidden;
`

export const WeatherTime = styled.p`
    font-size: 1rem;
    margin: 0%;
    text-align: center;
    font-size: 1.5rem;
    color: rgba(0, 0, 200);
    margin-bottom: 2%;
`

export const Image = styled.img`
    width: auto;
    height: 5.5rem;
    margin-left: 2%;
    margin-bottom: 2%;
    float: left;
`

export const WeatherInfoDiv = styled.div`
    width: 60%;
    height: 100%;
    float: right;
`

export const WeatherInfo = styled.p`
    color: rgba(0, 0, 200);
    font-size: 1rem;
    margin: 0;
`