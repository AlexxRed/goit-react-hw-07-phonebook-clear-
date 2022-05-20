import styled from '@emotion/styled';

export const List = styled.ul`
    display: block;
    align-items: center;
    justify-content: center;
    width: 300px;
    margin-left: auto;
    margin-right: auto;
`;


export const ItemList = styled.label`
    display: flex;
    align-items: center;
    &::before {
        content: '';
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: #446b85;
        margin-right: 15px;
        margin-left: 30px;
    }
`;

export const ButtonDelete = styled.button`
    cursor: pointer;
    margin-left: 15px;
    border-radius: 5px;
    padding: 5px 10px;
    background-color: black;
    color: white;
    font-weight: 500;
    &:hover,
    &:focus {
        background-color: #25834f;
    }
`;