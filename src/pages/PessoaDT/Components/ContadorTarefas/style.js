import styled from "styled-components";

export const ContadorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 992px) {
        display: none;
    }

`;

export const ContadorTarefas = styled.span`
    font-size: 15px;
    color: var(--branco);
    text-align: center;
    width: max-content;
`;

export const Progress = styled.div`
    width: 100%;
    height: 0.24rem;
    border-radius: 100px;
    background-color: #2B2B36;  
`;

export const ProgressBar = styled.div`
    border-radius: 100px;
    background-color: var(--azul-claro);
`;