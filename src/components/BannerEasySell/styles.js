import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    background: var(--darkLight);
    padding: 10px;
    >img{
        width: 30%;
        margin-top: 20px;
        justify-self: flex-start;
        margin-left: 20px;
        margin-bottom: 15px;
    }
`;

export const Texts = styled.div`
display: flex;
align-items: flex-end;
flex-direction: column;
margin-right: 20px;
justify-content: center;
>h1{
    color: var(--primary);
    font-size: 60px;
}
>p{
    margin-top: 50px;
    font-size: 30px;
    text-align: end;
    width: 60%;
}
`;