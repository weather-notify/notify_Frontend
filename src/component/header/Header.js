import React from 'react';

import * as S from './style';

import * as I from 'asset/index';

const token = localStorage.getItem("token");

const Header = () => (
    <S.Container>
        <S.Notify>Notify</S.Notify>
        <S.SignButtonWrapper>
        {
            token && token.length >= 0 ?
                <>
                    <S.Bell src={I.bell} alt="bell" />
                    <S.Menu>배현호님</S.Menu>
                </> : 
                <>
                    <S.Menu>SignIn</S.Menu>
                    <S.Menu>SignUp</S.Menu>
                </>
        }
        </S.SignButtonWrapper> 
    </S.Container>
);

export default Header;