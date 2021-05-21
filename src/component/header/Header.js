import React from 'react';
import { useHistory } from 'react-router';

import * as S from './style';

import * as I from 'asset/index';

const token = localStorage.getItem("token");


const Header = () => {
    let history = useHistory();
    
    const handleMain = () => {
        history.push({
            pathname: '/'
        })
    }

    const handleSignIn = () => {
        history.push({
            pathname: '/login'
        })
    }
    
    const handleSignUp = () => {
        history.push({
            pathname: '/join'
        })
    }
    
    return (
        <S.Container>
            <S.Notify onClick={() => handleMain()}>Notify</S.Notify>
            <S.SignButtonWrapper>
            {
                token && token.length >= 0 ?
                    <>
                        <S.Bell src={I.bell} alt="bell" />
                        <S.Menu>배현호님</S.Menu>
                    </> : 
                    <>
                        <S.Menu onClick={() => handleSignIn()}>SignIn</S.Menu>
                        <S.Menu onClick={() => handleSignUp()}>SignUp</S.Menu>
                    </>
            }
            </S.SignButtonWrapper> 
        </S.Container>
    )
};

export default Header;