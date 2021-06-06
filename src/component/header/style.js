import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    min-height: 80px;
    padding: 0%;
    font-size: 50%;
    display: flex;
    align-items: center;
    background-color: rgba(0, 0, 200);
    justify-content: space-between;
`

export const Notify = styled.div`
    color: white;
    min-width: 80px;
    margin-left: 2%;
    font-size: 1.8rem;
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
    font-size: 1.6rem;
    color: white;
`

export const Bell = styled.img`
    width: 20%;
    height: 20%;
    margin-left: 33%;
`