import React from 'react';

import * as S from './style';

const Join = () => {
    return (
        <S.Container>
            <S.InputLine>
                <S.Email>
                    <S.Info>이메일: </S.Info>
                </S.Email>
                <S.InputEmail></S.InputEmail>
                <S.CheckButton>check</S.CheckButton>
            </S.InputLine>
            <S.InputLine>
                <S.InfoDiv>
                    <S.Info>이름: </S.Info>
                </S.InfoDiv>
                <S.InputBox></S.InputBox>
                </S.InputLine>
            <S.InputLine>
                <S.InfoDiv>
                    <S.Info>비밀번호: </S.Info>
                </S.InfoDiv>
                <S.InputPassword></S.InputPassword>
                </S.InputLine>
            <S.InputLine>
                <S.InfoDiv>
                    <S.Info>비밀번호 확인: </S.Info>
                </S.InfoDiv>
                <S.InputPassword></S.InputPassword>
                </S.InputLine>
        </S.Container>
    )
}

export default Join;