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
    @media (max-width: 1108px){
        flex-direction: column-reverse;
        >img{
            align-self: center;
            width: 90%;
        }
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
@media (max-width: 1108px){
    margin-left: 20px;
    >h1{
        align-self: center;
        color: var(--primary);
        font-size: 35px;
        text-align: center;
    }
    >p{
        margin-top: 10px;
        text-align: justify;
        font-size: 20px;
        width: 100%;
    }
}
`;