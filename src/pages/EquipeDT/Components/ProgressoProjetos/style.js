import styled, { keyframes } from "styled-components";

export const ProgressContainer = styled.div`
    width: 160px;
`;

export const ProgressHeader = styled.div`
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

export const Progress = styled.div`
    width: 160px;
    height: 0.25rem;
    border-radius: 100px;
    background-color: #2B2B36;
`;

const ProgressAnimation = (w) => keyframes`
    from { width: 0}
    to { width: ${w}}
`;

export const ProgressBar = styled.div`
    border-radius: 100px;
    background-color: #3B97D9;
    width: ${props => props.width || 0};
    animation-name: ${props => ProgressAnimation(props.width)};
    animation-delay: 0.3s;
    animation-duration: 1.2s;
    animation-iteration-count: 1;
`;