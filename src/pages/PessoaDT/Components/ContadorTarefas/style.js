import styled, { keyframes } from "styled-components";

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
    color: var(--corTexto);
    text-align: center;
    width: max-content;
`;

export const Progress = styled.div`
    width: 100%;
    height: 0.245rem;
    border-radius: 100px;
    background-color: #2B2B36;  
`;

const ProgressAnimation = (w) => keyframes`
    from { width: 0}
    to { width: ${w}}
`;

export const ProgressBar = styled.div`
    border-radius: 100px;
    background-color: var(--azul-claro);
    width: ${props => props.width || 0};
    animation-name: ${props => ProgressAnimation(props.width)};
    animation-delay: 0.3s;
    animation-duration: 1.2s;
    animation-iteration-count: 1;
`;