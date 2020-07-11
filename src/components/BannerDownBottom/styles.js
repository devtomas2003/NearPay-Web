import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    background: var(--darkLight);
    > img{
        width: 80px;
        margin-top: 23px;
        margin-bottom: 23px;
        align-self: center;
    }
`;

export const LoginBottom = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    > button{
        align-self: center;
        background: var(--primary);
        padding: 10px 20px;
        border-radius: 67px;
        align-content: center;
        font-size: 20px;
        cursor: pointer;
    }
    > button:hover{
        background: var(--hoverLight);
    }
`;

export const DownloadBottom = styled.div`
    display: flex;
    margin-top: 23px;
    margin-bottom: 23px;
    width: 100%;
    flex-direction: column;
    > button{
        align-self: center;
        border: 2px solid var(--secundary);
        padding: 10px 20px;
        border-radius: 67px;
        align-content: center;
        font-size: 20px;
        cursor: pointer;
    }
    > button:hover{
        border: 2px solid var(--hoverDark);
    }
`;