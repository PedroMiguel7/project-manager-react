import styled from "styled-components";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

//Spinner
export const SpinnerBox = styled(Box)`
    height: ${props => props.height || "100%"};
    background-color: hsla(234, 17%, 12%, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
`;

export const Spinner = styled(CircularProgress)`
    .MuiCircularProgress-circle {
        color: #F46E27;
    }
`;

export const LoadingMessage = styled.p`
    color: #40404F;
`;