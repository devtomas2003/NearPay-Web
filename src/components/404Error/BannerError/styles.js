import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    background: var(--secundary);
    >img{
        align-self: center;
        width: 450px;
    } 
    >h1{
        text-align: center;
        font-size: 90px;
    }
    >p{
        margin-top: 50px;
        text-align: center;
        font-size: 40px;
    }
    >a{
        align-self: center;
        margin-top: 40px;
        padding: 15px 20px;
        background: var(--primary);
        font-weight: bold;
        text-decoration: none;
        text-align: center;
        width: 15%;
        cursor: pointer;
        border-radius: 7px;
        font-size: 18px;
        margin-left: 25px;
    }
    >a:hover{
        background: var(--hoverLight);
    }
`;