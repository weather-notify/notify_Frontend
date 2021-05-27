import React, { useEffect, useState } from 'react';

import axios from 'axios';

import * as S from './style';

const Main = () => {
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
        </S.Container>
    )
}

export default Main;