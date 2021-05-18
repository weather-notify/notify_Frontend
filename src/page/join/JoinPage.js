import React from 'react';

import * as S from './style';

import HeaderContainer from 'container/headerContainer/HeaderContainer';
import JoinContainer from 'container/joinContainer/JoinContainer';
import SubmitContainer from 'container/commonContainer/SubmitContainer';

export const JoinPage = () => {
    return (
        <S.Container>
            <HeaderContainer />
            <JoinContainer />
            <SubmitContainer />
        </S.Container>
    )
}

export default JoinPage;