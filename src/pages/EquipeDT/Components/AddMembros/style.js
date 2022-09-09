import styled from "styled-components";
import Button from '@mui/material/Button';

export const AddContainer = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: 2px solid var(--preto-medio);
    border-radius: 10px;
    padding: 0.4rem 0rem;
`;

export const AddTitle = styled.span`
    color: #87888C;
`;

export const ModalHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8%;
`;

export const OcuparEspaco = styled.div`
    width: 24px;
    height: 24px;
`;

export const HeaderTitle = styled.h5`
    text-align: center;
    font-weight: 400;
`;

export const HighlightedTitle = styled.span`
    color: var(--corBotao);
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: end;
    margin-top: 8%;
    gap: 5px;
`;

export const CancelButton = styled(Button)`
    &.MuiButton-root {
        color: #F4F5FA;
        opacity: 0.5;
        text-transform: capitalize;
    }
`;

export const SaveButton = styled(Button)`
    &.MuiButton-root {
        color: #F4F5FA;
        background: var(--corBotao);
        text-transform: capitalize;
        box-shadow: none;

        &:hover {
            background-color: var(--corBotao);
        }
    }
`;