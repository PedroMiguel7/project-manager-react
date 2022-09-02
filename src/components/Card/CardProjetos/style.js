import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardContainer = styled(Link)`
    color: var(--corTextComponente);
    text-decoration: none;
    background-color: var(--preto-medio);
    padding: 3%;

    height: 335px;
    border-radius: 10px;
    box-shadow: 0px 2px 12px 5px rgb(0, 0, 0, 0.08);
    transition: 0.5s;

    &:hover {
        color: var(--corTextComponente);
        text-decoration: none;
        transform: scale(1.015);
        transition: 0.3s;
    }
`;

export const CardInformations = styled.div`
    border-bottom: 0.15px solid #2C2E3B;
    margin-bottom: 3%;
`;

export const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const CardTitle = styled.h2`
    font-size: 1.5rem;
`;

export const CardDescription = styled.p`
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    height: 120px;
    font-size: 0.85rem;
`;

export const TeamContainer = styled.div`
    margin-bottom: 3%;
    display: flex;
    align-items: center;
    gap: 1%;
`;

export const Aim = styled.img``;


export const TeamName = styled.span``;


export const CardExtraInformations = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ProgressContainer = styled.div``;

export const ProgressPercentContainer = styled.div``;

export const StatusContainer = styled.div``;

export const Status = styled.span``;
