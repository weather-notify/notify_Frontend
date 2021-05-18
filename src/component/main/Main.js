import React from 'react';

import * as S from './style';

const Main = () => {
    return (
        <S.Container>
            <S.TitleContainer>
                <S.Title>지역을 설정해 주세요</S.Title>
            </S.TitleContainer>
            <S.MenuContainer>
                <S.SelectBox>
                    <S.SelectOption value="">-</S.SelectOption>
                </S.SelectBox>
                <S.SelectBox>
                    <S.SelectOption value="">-</S.SelectOption>
                    </S.SelectBox>
                <S.SelectBox>
                    <S.SelectOption value="">-</S.SelectOption>
                </S.SelectBox>
            </S.MenuContainer>
        </S.Container>
    )
}

export default Main;