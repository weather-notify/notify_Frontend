import React from 'react';

import * as S from './style';

import HeaderContainer from 'container/headerContainer/HeaderContainer';
import WeatherContainer from 'container/weatherContainer/WeatherContainer';

const WeatherPage = () => {
    return (
        <S.Container>
            <HeaderContainer />
            <WeatherContainer />
        </S.Container>
    )
}

export default WeatherPage;