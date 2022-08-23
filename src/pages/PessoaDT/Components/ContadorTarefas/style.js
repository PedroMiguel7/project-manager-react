import styled from "styled-components";

export const ContadorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ContadorTarefas = styled.span`
    font-size: 15px;
    color: var(--branco);
`;

export const Progress = styled.div`
    width: 110px;
    height: 0.24rem;
    border-radius: 100px;
    background-color: #2B2B36;  
`;

export const ProgressBar = styled.div`
    border-radius: 100px;
    background-color: var(--azul-claro);
`;