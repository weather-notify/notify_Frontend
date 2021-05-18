import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const TitleContainer = styled.div`
    height: 20%;
    margin: 3%;
`

export const Title = styled.p`
    font-size: 3rem;
    color: rgba(0, 0, 200);
`

export const MenuContainer = styled.div`
    width: 50%;
    height: 20%;
    display:flex;
    justify-content: space-between;
`

export const SelectBox = styled.select`
    width: 30%;
    height: 10%;
    background-color: rgba(187, 215, 240);
    font-size: 1.5rem;
    padding: 1.3rem;
    border: none;
    border-radius: 50px;
    text-align: center;
    text-align-last: center;
    appearance: none;
    outline: none;
`

export const SelectOption = styled.option`
    color: rgba(0, 0, 200);
`

export const SubmitButton = styled.button`
    width: 23%;
    padding: 1%;
    font-size: 1.3rem;
    color: white;
    background-color: rgba(0, 0, 200);
    border: none;
    border-radius: 50px;
    margin: 6%;
`