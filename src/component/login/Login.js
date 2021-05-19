import React from 'react';

import * as S from './style';

const Login = () => {
    return (
        <S.Container>
            <S.WhiteSpace></S.WhiteSpace>
            <S.InputLine>
                <S.InfoDiv>
                    <S.Info>이메일: </S.Info>
                </S.InfoDiv>
                <S.InputEmail></S.InputEmail>
            </S.InputLine>
            <S.InputLine>
                <S.InfoDiv>
                    <S.Info>비밀번호: </S.Info>
                </S.InfoDiv>
                <S.InputPassword></S.InputPassword>
            </S.InputLine>
        </S.Container>
    )
}

export default Login;