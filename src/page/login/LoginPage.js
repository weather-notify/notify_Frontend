import React from 'react';

import * as S from './style';

import HeaderContainer from 'container/headerContainer/HeaderContainer';
import LoginContainer from 'container/loginContainer/LoginContainer';

const LoginPage = () => {
    return (
        <S.Container>
            <HeaderContainer />
            <LoginContainer />
        </S.Container>
    )
}

export default LoginPage;