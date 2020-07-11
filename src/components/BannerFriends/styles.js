import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    background: var(--dark);
    padding: 10px;
    >img{
        width: 37%;
        margin-top: 15px;
        justify-self: flex-end;
        margin-right: 30px;
        margin-bottom: 15px;
    }
`;

export const Texts = styled.div`
display: flex;
flex-direction: column;
margin-left: 20px;
justify-content: center;
>h1{
    color: var(--primary);
    font-size: 60px;
}
>p{
    margin-top: 50px;
    font-size: 30px;
    width: 60%;
}
`;