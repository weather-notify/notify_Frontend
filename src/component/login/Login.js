import React, { useState } from 'react';
import axios from 'axios';

import { useHistory } from 'react-router-dom';

import * as S from './style';

const Login = () => {
    const history = useHistory();
    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    });

    const { email, password } = inputs;

    const onChange = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    }

    const Login = () => {
        axios.post('http://localhost:8000/auth', {
            email: email,
            password: password
        }).then(res => {
            localStorage.setItem('accessToken', res.data.accessToken);
            localStorage.setItem('refreshToken', res.data.refreshToken);
            localStorage.setItem('tokenType', res.data.tokenType);

            history.push('/');
            window.location.reload();
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <S.Container>
            <S.WhiteSpace></S.WhiteSpace>
            <S.InputLine>
                <S.InfoDiv>
                    <S.Info>이메일: </S.Info>
                </S.InfoDiv>
                <S.InputEmail
                    name='email'
                    placeholder='email'
                    onChange={onChange}
                    value={email}></S.InputEmail>
            </S.InputLine>
            <S.InputLine>
                <S.InfoDiv>
                    <S.Info>비밀번호: </S.Info>
                </S.InfoDiv>
                <S.InputPassword
                    name='password'
                    placeholder='password'
                    onChange={onChange}
                    value={password}></S.InputPassword>
            </S.InputLine>
            <S.SubmitButton onClick={Login}>Submit</S.SubmitButton>
        </S.Container>
    )
}

export default Login;