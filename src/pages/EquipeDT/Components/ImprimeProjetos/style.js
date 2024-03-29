import styled from "styled-components";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export const EmptyStateContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #454756;
    background-color: var(--preto-medio);
    border-radius: 10px;
    margin-bottom: 0.5rem;
    padding: 0.9rem;
`;

export const EmptyStateImg = styled.img``;

export const EmptyStateTitle = styled.h5``;

export const ProjetosLi = styled.li`
    border-bottom: 0.15px solid #2C2E3B;
    display: flex;
    justify-content: space-between;
    padding: 1.2rem 0.7rem;

    /* &:nth-last-child(1) {
        border-bottom: none;
    } */
`;

export const NomeProjeto = styled.h5`
    font-weight: 400;
    margin: 0;
`;

export const Prazo = styled.span`
    color: #87888C;
    font-size: 0.93rem;
`;

export const Container = styled.div``;

export const ProgressContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
`;

export const LinkProjeto = styled.a`
    display: flex;
    justify-content: end;
    text-decoration: none;
    color: var(--cinza);
    transition: 0.4s;

    &:hover {
        color: var(--branco);
        transition: 0.4s;
    }
`;

//Spinner
export const SpinnerBox = styled(Box)`
    height: 100%;
    background-color: hsla(234, 17%, 12%, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
`;

export const Spinner = styled(CircularProgress)`
    .MuiCircularProgress-circle {
        color: #F46E27;
    }
`;

export const LoadingMessage = styled.p`
    color: #40404F;
`;