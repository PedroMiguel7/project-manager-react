import styled from "styled-components";

export const CardContainer = styled.div`
    background-color: #21222D;
    border-radius: 10px;
    padding: 8px 12px;
    transition: all 0.3s ease-in-out;

    &:hover {
        transition: all 0.3s ease-in-out;
        transform: scale(1.015);
    }
`;

export const Header = styled.h2`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const NomeEquipe = styled.span`

`;

export const Resumo = styled.span`

`;

export const EmptyStateContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    h5 {
        color: #454756;
    }
`;