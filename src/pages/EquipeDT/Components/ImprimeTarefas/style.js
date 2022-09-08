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

export const TarefasLi = styled.li`
    display: flex;
    flex-direction: column;
    border-bottom: 0.15px solid #2C2E3B;
    padding: 1.2rem 0.7rem;
    list-style: none;

    /* &:nth-last-child(1) {
        border-bottom: none;
    } */
`;

export const StatusTarefa = styled.span`
    color: #287CB8;
    font-weight: 500;
    font-size: 0.93rem;
`;

export const NomeTarefa = styled.h5`
    font-weight: 400;
    margin: 0;
`;

export const PrazoTarefa = styled.span`
    color: #87888C;
    font-size: 0.93rem;
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