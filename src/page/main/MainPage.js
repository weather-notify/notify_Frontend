import React from 'react';

import * as S from './styled';

import HeaderContainer from 'container/headerContainer/HeaderContainer';
import MainContainer from 'container/mainContainer/MainContainer';

const MainPage = () => {
    return (
        <S.Container>
            <HeaderContainer />
            <MainContainer />
        </S.Container>
    )
}

export default MainPage;