import React from 'react';

import * as S from './style';

import HeaderContainer from 'container/headerContainer/HeaderContainer';
import LoginContainer from 'container/loginContainer/LoginContainer';
import SubmitContainer from 'container/commonContainer/SubmitContainer';

const LoginPage = () => {
    return (
        <S.Container>
            <HeaderContainer />
            <LoginContainer />
            <SubmitContainer />
        </S.Container>
    )
}

export default LoginPage;