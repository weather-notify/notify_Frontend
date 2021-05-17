import React from 'react';
import * as S from './style';

import bell from 'asset/icons8-bell-100.png';

const token = localStorage.getItem("token");

const Header = () => (
    <S.Header>
        <S.Notify>Notify</S.Notify>
        <S.SignButtonWrapper>
        {
            token && token.length >= 0 ?
                <>
                    <S.Bell src={bell} alt="bell" />
                    <S.Menu>배현호님</S.Menu>
                </> : 
                <>
                    <S.Menu>SignIn</S.Menu>
                    <S.Menu>SignUp</S.Menu>
                </>
        }
        </S.SignButtonWrapper> 
    </S.Header>
);

export default Header;