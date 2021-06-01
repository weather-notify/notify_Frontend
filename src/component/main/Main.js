import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { useHistory } from 'react-router-dom';

import * as S from './style';

const Main = () => {
    const history = useHistory();
    
    const token = localStorage.getItem("accessToken");
    const tokenType = localStorage.getItem("tokenType");

    const [deep1, setDeep1] = useState([]);
    const [deep2, setDeep2] = useState([]);
    const [deep3, setDeep3] = useState([]);
    const [city, setCity] = useState('');
    const [county, setCounty] = useState('');
    const [district, setDistrict] = useState('');

    useEffect(() => {
        getDeep1()
        deep2.unshift("-");
        deep3.unshift("-");
    }, []);

    const getDeep1 = () => {
        axios.get('http://localhost:8000/excel/deep1')
        .then(res => {
            const tempArr = res.data;
            tempArr.unshift("-");
            setDeep1(tempArr);
        }).catch(err => {
            console.log(err);
        })
    }

    const getDeep2 = (e) => {
        const targetValue = e?.target?.value;
        setCity(targetValue);
        axios.get(`http://localhost:8000/excel/deep2?deep1=${targetValue}`)
        .then(res => {
            const tempArr = res.data;
            tempArr.unshift("-");
            setDeep2(res.data);
        }).catch(err => {
            console.log(err);
        })
    }

    const getDeep3 = (e) => {
        const targetValue = e?.target?.value;
        setCounty(targetValue);
        axios.get(`http://localhost:8000/excel/deep3?deep1=${city}&deep2=${targetValue}`)
        .then(res => {
            const tempArr = res.data;
            tempArr.unshift("-");
            setDeep3(res.data);
        }).catch(err => {
            console.log(err);
        })
    }

    const setDeep = (e) => {
        setDistrict(e.target.value);
    }

    const getPoint = () => {
        city !== '' && county !== '' && district !== '' ?
            axios.get(`http://localhost:8000/excel/coordinate?deep1=${city}&deep2=${county}&deep3=${district}`, {
                headers: {
                    'Authorization': `${tokenType} ${token}`
                }
            }) 
            .then(res => {
                history.push({
                    pathname: '/weather',
                    state: {point: res.data}
                });
            }).catch(err => {
                alert("로그인이 필요한 서비스입니다.");
                localStorage.clear();
            })
        :
            alert("지역을 모두 선택해주세요");
    }

    return (
        <S.Container>
            <S.TitleContainer>
                <S.Title>지역을 설정해 주세요</S.Title>
            </S.TitleContainer>
            <S.MenuContainer>
                <S.SelectBox onChange={getDeep2}>
                    {
                        deep1.map((now) =>
                                <S.SelectOption key={now} value={now}>{now}</S.SelectOption>
                            )
                    }
                </S.SelectBox>
                <S.SelectBox onChange={getDeep3}>
                    {
                        deep2.map((now) =>
                                <S.SelectOption key={now} value={now}>{now}</S.SelectOption>
                            )
                    }
                </S.SelectBox>
                <S.SelectBox onChange={setDeep}>
                    {
                        deep3.map((now) =>
                                <S.SelectOption key={now} value={now}>{now}</S.SelectOption>
                            )
                    }
                </S.SelectBox>
            </S.MenuContainer>
            <S.SubmitButton onClick={getPoint}>Submit</S.SubmitButton>
        </S.Container>
    )
}

export default Main;