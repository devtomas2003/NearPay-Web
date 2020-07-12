import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
`;

export const Header = styled.div`
padding: 20px;
margin-left: 40px;
margin-bottom:10px;
> h1{
    color: var(--primary);
    font-size: 50px;
}
> p{
    font-size: 15px;
    text-align: end;
    color: var(--secundary);
    font-weight: bold;
}
@media (max-width: 885px){
    margin: 0 auto;
    justify-self: center;
}
`;

export const Actions = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    margin-right: 80px;
    >a {
        color: var(--primary);
        padding: 10px;
        text-decoration: none;
        font-weight: bold;
    }
    >button{
        padding: 15px 20px;
        background: var(--primary);
        font-weight: bold;
        cursor: pointer;
        border-radius: 7px;
        font-size: 15px;
        margin-left: 25px;
    }
    >a:hover{
        text-decoration: underline;
    }
    >button:hover{
        background: var(--hoverLight);
    }
    @media (max-width: 885px){
        display: none;
    }
`;