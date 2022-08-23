import styled from "styled-components";

export const AvatarBorder = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 160px;
    height: 160px;
    border-radius: 100%;
    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.3);
`;

export const AvatarLabel = styled.div`
    color: var(--preto);
    border-radius: 100px;
    padding: 5px 9px;
    width: fit-content;
    position: relative;
    top: -25px;
    font-size: 0.8rem;
    transition: 0.5s;
`;