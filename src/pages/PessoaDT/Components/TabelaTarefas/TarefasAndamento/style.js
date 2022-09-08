import styled from "styled-components";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Button } from "bootstrap";

export const Head = styled.tr`
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    background-color: var(--preto-medio);
    z-index: 1;
    box-shadow: 0 -6px 10px 5px rgba(0,0,0,0.25);
    `;

export const HeadCol = styled.th``;

export const EmptyState = styled.tr`
    border-bottom: 1px solid var(--preto-medio) !important;
`;

export const EmptyStateImg = styled.img``;

export const EmptyStateTitle = styled.h5`
    color: #454756;
    text-align: center;
`;

export const TableContainer = styled.div`
    margin-top: 2.5%;
    max-height: 32vh;
    width: 100%;

    &::-webkit-scrollbar {
        width: 0.75rem;
    }

    &::-webkit-scrollbar-track {
        background-color: #2B2B36;
        border-radius: 20px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #40404F;
        border-radius: 20px;
        border: 1px solid #2B2B36;
    }

    @media (max-width: 768px) {
        width: 90vw;
    }
`;

export const Table = styled.table`
    width: 100%;
`;

export const TableBody = styled.tbody``;

export const Row = styled.tr`
    color: white;
    height: 2rem;
    border-bottom: 1px solid var(--preto-claro) !important;
`;

export const Col = styled.td``;

export const PriorityIcons = styled.img`
    width: 18px;
    height: 18px;
`;