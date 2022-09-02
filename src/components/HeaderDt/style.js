import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    //border: 1px solid red;
    padding: 1% 0;
    border-bottom: 0.15px solid #2C2E3B;
    display: flex;
    align-items: center;
    gap: 0.5rem;
`; 

export const PreviousPage = styled(Link)``;

export const PreviousPageIcon = styled.img`
    width: 28px;
`;

export const Title = styled.h1`
    margin-top: 4px;
    color: var(--branco);   
    font-size: 1.8rem;
`;

export const Name = styled.span`
    color: var(--laranja);
`;

export const Status = styled.div`
    background-color: ${props => props.color || "transparent"};
    border-radius: 5px;
    font-size: 0.9rem;
    font-weight: 500;
    transition: 0.3s;
    padding: 1px 4px;
    margin-left: 1%;
`;