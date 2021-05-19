import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const WhiteSpace = styled.div`
    margin-top: 6%;
`

export const InputLine = styled.div`
    width: 60%;
    margin-top: 1%;
`

export const InfoDiv = styled.div`
    width: 25%;
    height: 100%;
    float: left;
`

export const Info = styled.p`
    text-align: right;
    font-size: 2rem;
`

export const InputEmail = styled.input.attrs({
    type: "email",
    checked: true
})`
    width: 70%;
    height: 100%;
    padding-top: 2%;
    padding-bottom: 2%;
    margin-top: 3.4%;
    margin-left: 1%;
    border: 1px solid;
`

export const InputPassword = styled.input.attrs({
    type: 'password',
    checked: true
})`
    width: 70%;
    height: 100%;
    padding-top: 2%;
    padding-bottom: 2%;
    margin-top: 3.4%;
    margin-left: 1%;
    border: 1px solid;
`