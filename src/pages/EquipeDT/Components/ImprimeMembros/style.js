import styled from "styled-components";

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

export const EmptyStateMessage = styled.h5``;


export const MembroLi = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.3rem 0rem 0.3rem 0.5rem;
    background-color: var(--preto-medio);
    list-style: none;
    /*padding: 8px;*/
    border-radius: 10px;
    margin-bottom: 0.5rem;
`;

export const MainDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const PersonInformations = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Nome = styled.span``;

export const Funcao = styled.span``;