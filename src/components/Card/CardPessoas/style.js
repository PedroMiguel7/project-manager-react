import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardContainer = styled(Link)`
    color: #C2C3C6;
    text-decoration: none;
    background-color: var(--preto-medio);
    padding: 4%;
    border-radius: 10px;
    gap: 2rem;
    box-shadow: 0px 2px 12px 5px rgb(0, 0, 0, 0.08);
    transition: 0.5s;

    &:hover {
        color: #C2C3C6;
        text-decoration: none;
        transform: scale(1.015);
        transition: 0.3s;
    }
`;

export const CardInformations = styled.div`
    margin-top: -5%;
    display: flex;
    flex-direction: column;
    text-align: center;
    border-bottom: 0.15px solid #2C2E3B;
`;

export const CardTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 600;
`;

export const TeamContainer = styled.div`
    margin-bottom: 3%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1%;

    span {
        font-size: 0.93rem;
    }
`;

export const Aim = styled.img``;

export const TeamName = styled.span``;

export const CardExtraInformations = styled.div`
    margin-top: 2%;
    display: flex;
    text-align: center;
    justify-content: space-evenly;
    font-size: 0.9rem;
`;

export const Tag = styled.div`
    background-color: ${props => props.color || "#8D99AE"};
    margin: auto;
    border-radius: 5px;
    padding: 5px 7px;
    width: fit-content;
    position: relative;
    top: -25%;
    font-size: 0.8rem;
    opacity: 0.85;
    transition: 0.5s;
`;

export const TagName = styled.span`
    color: black;
`;