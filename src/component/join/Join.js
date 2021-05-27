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
                    <S.Info>이메일: </S.Info>
                </S.InfoDiv>
                <S.InputEmail
                    placeholder='이메일'
                    onChange={onChangeEmail}></S.InputEmail>
                <S.CheckButton onClick={isEmailCheck}>check</S.CheckButton>
                { 
                    email !== "" && checkEmail === false ? 
                        <S.InputError>
                            이메일 형식이 올바르지 않습니다.
                        </S.InputError> : null
                }
                {
                    isCheck ?
                        !isEmail && checkEmail ? 
                            <S.InputEmailInfo>
                                사용할 수 있는 이메일입니다.
                            </S.InputEmailInfo> 
                        :
                            <S.InputError>
                                사용할 수 없는 이메일입니다.
                            </S.InputError>
                    : null
                }
            </S.InputLine>
            <S.InputLine>
                <S.InfoDiv>
                    <S.Info>이름: </S.Info>
                </S.InfoDiv>
                <S.InputBox
                    placeholder='이름'
                    onChange={onChangeName}></S.InputBox>
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
            <S.SubmitButton onClick={onSubmit}>Submit</S.SubmitButton>    
        </S.Container>
    )
}

export default Join;