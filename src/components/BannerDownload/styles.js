import styled from "styled-components";
import { GetApp } from '../../styles/Icons';

export const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    background: var(--primary);
    padding: 10px;
    >img{
        width: 37%;
        margin-top: 15px;
        margin-bottom: 15px;
    }
`;

export const ActionsBox = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    margin-left: 60px;
    margin-right: 60px;
    >h1{
        font-size: 50px;
    }
    >button{
        margin-top: 50px;
        display: flex;
        align-self: flex-start;
        align-items: center;
        background: var(--secundary);
        padding: 10px 30px;
        font-size: 15px;
        outline: none;
        cursor: pointer;
        font-weight: bold;
        border-radius: 100px;
    }
    >button p{
        font-weight: 700;
    }
    >button:hover{
        background: var(--hoverDark);
    }
`;

export const DownloadIcon = styled(GetApp)`
fill: var(--white);
width: 50px;
height: 50px;
`;