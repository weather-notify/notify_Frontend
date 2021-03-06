import React, { useState } from 'react';
import axios from 'axios';

import {useHistory} from 'react-router-dom'

import * as S from './style';

const Join = () => {
    var history = useHistory();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isEmail, setIsEmail] = useState(false);
    const [isCheck, setIsCheck] = useState(false);
    const [checkEmail, setCheckEmail] = useState(false);
    const [passwordCheck, setPasswordCheck] = useState("");
    const [checkPassword, setCheckPassword] = useState(false);

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
        emailCheck(email);
    };

    const isEmailCheck = () => {
        if(checkEmail === true) {
            axios.get('http://localhost:8000/user/email', {
                params: {
                    email: email
                }
            }).then(res => {
                console.log(res.data);
                setIsCheck(true);
                setIsEmail(res.data);
            }).catch(err => {
                console.log(err);
            })
        }
    }

    const onChangeName = (e) => {
        setName(e.target.value);
    }

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

    const onSubmit = () => {
        axios.post('http://localhost:8000/user', {
            email: email,
            name: name,
            password: password,
        }).then((res) => {
            console.log(res)
            history.push('/')
        }).catch((err) => {
            console.log(err)
        })
    }
    
    return (
        <S.Container>
            <S.InputLine>
                <S.InfoDiv>
                    <S.Info>?????????: </S.Info>
                </S.InfoDiv>
                <S.InputEmail
                    placeholder='?????????'
                    onChange={onChangeEmail}></S.InputEmail>
                <S.CheckButton onClick={isEmailCheck}>check</S.CheckButton>
                { 
                    email !== "" && checkEmail === false ? 
                        <S.InputError>
                            ????????? ????????? ???????????? ????????????.
                        </S.InputError> : null
                }
                {
                    isCheck ?
                        !isEmail && checkEmail ? 
                            <S.InputEmailInfo>
                                ????????? ??? ?????? ??????????????????.
                            </S.InputEmailInfo> 
                        :
                            <S.InputError>
                                ????????? ??? ?????? ??????????????????.
                            </S.InputError>
                    : null
                }
            </S.InputLine>
            <S.InputLine>
                <S.InfoDiv>
                    <S.Info>??????: </S.Info>
                </S.InfoDiv>
                <S.InputBox
                    placeholder='??????'
                    onChange={onChangeName}></S.InputBox>
                </S.InputLine>
            <S.InputLine>
                <S.InfoDiv>
                    <S.Info>????????????: </S.Info>
                </S.InfoDiv>
                <S.InputPassword
                    placeholder='????????????'
                    onChange={onChange}></S.InputPassword>
                </S.InputLine>
            <S.InputLine>
                <S.InfoDiv>
                    <S.Info>???????????? ??????: </S.Info>
                </S.InfoDiv>
                <S.InputPassword
                    placeholder='???????????? ??????'
                    onChange={onChangePassword}></S.InputPassword>
                    { 
                        passwordCheck !== "" && checkPassword === false ? 
                            <S.InputError>
                                ??????????????? ???????????? ????????????.
                            </S.InputError> : null
                    }
            </S.InputLine>
            <S.SubmitButton onClick={onSubmit}>Submit</S.SubmitButton>    
        </S.Container>
    )
}

export default Join;