import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
    color: var(--corTextComponente);
    text-decoration: none;

    &:hover {
        color: var(--corTextComponente);
        text-decoration: none;
    }
`;

export const CardContainer = styled.div`
    background-color: var(--componentes);
    border-radius: 10px;
    padding: 2.7%;
    transition: all 0.3s ease-in-out;
    max-width: 100%;

    &:hover {
        transition: all 0.3s ease-in-out;
        transform: scale(1.015);
    }
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const NomeEquipe = styled.span`
    color: var(--corTextComponente);
    font-size: 1.5rem;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
`;

export const ResumoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Resumo = styled.span`
    color: var(--corTextComponente);
    font-size: 0.93rem;
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
