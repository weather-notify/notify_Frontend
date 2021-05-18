import React from 'react';

import * as S from './style';

import HeaderContainer from 'container/headerContainer/HeaderContainer';
import MainContainer from 'container/mainContainer/MainContainer';
import SubmitContainer from 'container/commonContainer/SubmitContainer';

const MainPage = () => {
    return (
        <S.Container>
            <HeaderContainer />
            <MainContainer />
            <SubmitContainer />
        </S.Container>
    )
}

export default MainPage;