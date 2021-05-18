import React from 'react';

import * as S from './style';

import HeaderContainer from 'container/headerContainer/HeaderContainer';
import JoinContainer from 'container/joinContainer/JoinContainer';

export const JoinPage = () => {
    return (
        <S.Container>
            <HeaderContainer />
            <JoinContainer />
        </S.Container>
    )
}

export default JoinPage;