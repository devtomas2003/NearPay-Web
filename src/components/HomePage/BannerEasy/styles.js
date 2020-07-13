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
    @media (max-width: 1108px){
        flex-direction: column;
        >img{
            margin-top: 20px;
            width: 80%;
            align-self: center;
        }
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
@media (max-width: 1108px){
    margin-right: 20px;
    >h1{
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