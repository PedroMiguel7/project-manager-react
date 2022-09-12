import styled, { keyframes } from "styled-components";

export const ProgressoContainer = styled.div`
    width: 160px;
`;

export const HeaderProgresso = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Status = styled.span`
    color: #287CB8;
    font-weight: 500;
    font-size: 0.93rem;
`;

export const Percentual = styled.span`
    color: #494A58;
    font-weight: 500;
    font-size: 0.93rem;
`;

export const Progresso = styled.div`
    width: 160px;
    height: 0.25rem;
    border-radius: 100px;
    background-color: #2B2B36;
`;

const ProgressAnimation = keyframes`
    from { width: 0}
    to { width: ${props => props.width}}
`;

export const ProgressoBar = styled.div`
    border-radius: 100px;
    background-color: #3B97D9;
    width: ${props => props.width || 0};
    animation-name: ${ProgressAnimation};
    animation-delay: 0.5s;
    animation-duration: 1.2s;
    animation-iteration-count: 1;
`;