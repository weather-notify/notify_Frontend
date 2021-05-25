import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const InputLine = styled.div`
    width: 60%;
    height: 5%;
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

export const InputBox = styled.input`
    width: 70%;
    height: 100%;
    padding-top: 2%;
    padding-bottom: 2%;
    margin-top: 3.4%;
    margin-left: 1%;
    border: 1px solid;
`

export const InputEmail = styled.input.attrs({
    type: "email",
    checked: true
})`
    width: 53%;
    height: 100%;
    padding-top: 2%;
    padding-bottom: 2%;
    margin-top: 3.4%;
    margin-left: 1%;
    border: 1px solid;
`

export const InputError = styled.p`
    font-size: 1rem;
    color: red;
    margin: 0 27% 0 0;
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

export const CheckButton = styled.button`
    width: 15%;
    height: 100%;
    border: none;
    border-radius: 50px;
    padding: 2%;
    margin: 2%;
    color: rgba(0, 0, 200);
    background-color: rgba(187, 215, 240);
`

export const SubmitButton = styled.button`
    width: 23%;
    padding: 1%;
    font-size: 1.3rem;
    color: white;
    background-color: rgba(0, 0, 200);
    border: none;
    border-radius: 50px;
    margin: 2%;
`