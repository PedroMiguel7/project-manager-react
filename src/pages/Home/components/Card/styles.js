import styled, { keyframes } from "styled-components";
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { AssignmentTurnedInRounded } from '@mui/icons-material';

export const CardContainer = styled.div`
    background-color: var(--componentes);
    color: var(--corTextComponente);
    padding: 1.5%;
    max-width: 340px;
    border-radius: 10px;
    text-decoration: none;
    box-shadow: 0px 2px 6px rgb(0, 0, 0, 0.15);
    transition: 0.5s;

    &:hover {
        text-decoration: none;
        transform: scale(1.015);
        transition: 0.3s;
    }
`;

export const CardTitle = styled.h5`
    font-size: 1.3rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
`;

export const CardDescription = styled.p`
    line-height: 1.6rem;
    font-weight: 300;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    min-height: 100px;
    //border: 1px solid red;
`;

export const TeamContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4% 0;
    gap: 0.4rem;
    //border: 1px solid red;
    border-bottom: 1px solid #2C2E3B;
    //align-self: flex-end;
`;

export const TeamName = styled.span`
    color: var(--cinza);
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
`;

export const TeamGroup = styled(AvatarGroup)`
    &.MuiAvatar-root { 
        width: 30px;
        height: 30px;
        font-size: 15px;
    };

    &.MuiAvatarGroup-avatar {
        border: 1px solid #21222D;
        color: #1E1F28;
        background: #87888C,
    };

`;

export const TasksContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.8rem;
    align-self: flex-end;
    margin-top: 4%;
    //border: 1px solid red;
`;

export const TaskIcon = styled(AssignmentTurnedInRounded)`
    color: var(--corTextComponente);
`;

export const TasksCount = styled.span`

`;

export const TotalTasksCount = styled.span``;

export const DoneTasksCount = styled.span``;

export const ProgressContainer = styled.div`
    width: 100%;
    height: 6px;
    border-radius: 100px;
    background-color: #2B2B36;
`;

const ProgressAnimation = (w) => keyframes`
    from { width: 0}
    to { width: ${w}}
`;

export const ProgressBar = styled.div`
    width: ${props => `${props.width}%` || 0};
    animation-name: ${props => ProgressAnimation(props.width)};
    animation-delay: 0.3s;
    animation-duration: 1.2s;
    animation-iteration-count: 1;
    border-radius: 100px;
    background-color: var(--corBotao);
`;

export const ProgressPercent = styled.span`
    color: ${props => props.percent === 0 ? 'var(--corTextComponente)' : '#F48E57'};
`;