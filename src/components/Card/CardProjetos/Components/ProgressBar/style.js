import styled, { keyframes } from "styled-components";

export const Progress = styled.div`
    //width: 160px;
    height: 0.9rem;
    border-radius: 100px;
    background-color: #2B2B36;
`;

const ProgressAnimation = (w) => keyframes`
    from { width: 0}
    to { width: ${w}}
`;

export const ProgressBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 0.9rem;
    border-radius: 100px;
    background-color: var(--corBotaoInverso);
    width: ${props => props.width || 0};
    animation-name: ${props => ProgressAnimation(props.width)};
    animation-delay: 0.3s;
    animation-duration: 1.2s;
    animation-iteration-count: 1;

    font-size: 0.8rem;
`;