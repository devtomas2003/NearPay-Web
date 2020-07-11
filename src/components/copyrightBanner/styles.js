import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    background: var(--dark);
    >p{
        color: var(--primary);
        font-size: 20px;
        width: 100%;
        margin-left: 5px;
        font-weight: bold;
    }
    >a{
        justify-self: flex-end;
        color: var(--primary);
        margin-right: 5px;
        font-size: 18px;
    }
    >label{
        color: var(--white);
    }
`;