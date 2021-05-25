import React, { useState } from 'react';

import * as S from './style';

const Join = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");
    const [checkEmail, setCheckEmail] = useState(false);
    const [checkPassword, setCheckPassword] = useState(false);

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
        emailCheck(email);
    };

    const emailCheck = (str) => {
        const re2 = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]*.[a-zA-Z]{2,3}$/i;
        setCheckEmail(re2.test(str));
    };

    const onChange = (e) => {
        setPassword(e.target.value);
    }

    const onChangePassword = (e) => {
        setPasswordCheck(e.target.value);
        setCheckPassword(password === e.target.value ? true : false);
    }

    return (
        <S.Container>
            <S.InputLine>
                <S.InfoDiv>
                    <S.Info>이메일: </S.Info>
                </S.InfoDiv>
                <S.InputEmail
                    placeholder='이메일'
                    onChange={onChangeEmail}></S.InputEmail>
                <S.CheckButton>check</S.CheckButton>
                { 
                    email !== "" && checkEmail === false ? 
                        <S.InputError>
                            이메일 형식이 올바르지 않습니다.
                        </S.InputError> : null
                }
            </S.InputLine>
            <S.InputLine>
                <S.InfoDiv>
                    <S.Info>이름: </S.Info>
                </S.InfoDiv>
                <S.InputBox
                    placeholder='이름'></S.InputBox>
                </S.InputLine>
            <S.InputLine>
                <S.InfoDiv>
                    <S.Info>비밀번호: </S.Info>
                </S.InfoDiv>
                <S.InputPassword
                    placeholder='비밀번호'
                    onChange={onChange}></S.InputPassword>
                </S.InputLine>
            <S.InputLine>
                <S.InfoDiv>
                    <S.Info>비밀번호 확인: </S.Info>
                </S.InfoDiv>
                <S.InputPassword
                    placeholder='비밀번호 확인'
                    onChange={onChangePassword}></S.InputPassword>
                    { 
                        passwordCheck !== "" && checkPassword === false ? 
                            <S.InputError>
                                비밀번호가 일치하지 않습니다.
                            </S.InputError> : null
                    }
                </S.InputLine>
        </S.Container>
    )
}

export default Join;