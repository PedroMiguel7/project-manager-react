import styled from "styled-components";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export const AddButton = styled(Button)`
	&.MuiButton-root {
        background-color: var(--corBotao);
        width: 70px;
        transition: 0.5s;
        color: #F4F5FA;

        &:hover {
            background-color: var(--corBotao);
            width: 120px;
            transition: width 0.5s ease-in-out;
        }
    }
`;

export const ButtonContent = styled.span`
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.2s linear;
    text-transform: capitalize;
    font-size: 0.9rem;
    width: 0px;
    
    ${AddButton}:hover & {
        visibility: visible;
        opacity: 1;
        width: max-content;
        transition: width 0.5s ease-in-out;
    }
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

// export const Textfield = styled(TextField)`
//     &.MuiOutlinedInput-root {
//         color: #F4F5FA;
//         svg { 
//             color: #F4F5FA
//         };

//         &.Mui-focused {
//         border-color: #F4F5FA;
//         svg { 
//             color: var(--corBotao);
//         }
//         };

//         & fieldset {
//         border-color: #F4F5FA;
//         border-radius: 5;
//         };

//         &:hover fieldset {
//         border-color: #C2C3C6;
//         };

//         &.Mui-focused fieldset {
//         border-color: var(--corBotao);
//         };
//     };
//     .MuiInputLabel-outlined {
//         color: #F4F5FA;
//         &.Mui-focused {
//         color: var(--corBotao);
//         };
//     };
// `;