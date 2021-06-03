import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    min-height: 80px;
    font-size: 2vw;
    display: flex;
    align-items: center;
    background-color: rgba(0, 0, 200);
    justify-content: space-between;
`

export const Notify = styled.div`
    color: white;
    min-width: 80px;
    margin-left: 2%;
`

export const SignButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 20px;
    > div {
        margin: 0px 20px;
    }
`

export const Menu = styled.div`
    color: white;
`

export const Bell = styled.img`
    width: 70px;
    height: 70px;
`