import styled from "styled-components";

export const PageContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2%;
    margin-top: 2%;
    padding-left: 2%;
`;

export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #21222D;
    border-radius: 10px;
    gap: 2rem;
    box-shadow: 0px 2px 12px 5px rgb(0, 0, 0, 0.08);
    transition: 0.5s;
    min-height: 90vh;
    padding: 1%;
`;

export const Back = styled.div`
    align-self: flex-start;
`;

export const ProfileHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const NomePessoa = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    h1 {
        font-size: 2.3rem;
    }
`;

export const NomeEquipe = styled.div`
    display: flex;
    gap: 4px;
`;

export const ResumoPessoa = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    div {
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    p {
        max-width: 7rem;
    }
`;

export const PessoaDashboard = styled.div`

`;

export const Rendimento = styled.div`
    background-color: var(--preto-medio);
    border-radius: 10px;
    padding: 1%;
    gap: 2rem;
    box-shadow: 0px 2px 12px 5px rgb(0, 0, 0, 0.08);
    transition: 0.5s;
`;

export const RendimentoHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    h5 {
        margin: 0;
    }
`;

export const ChartContainer = styled.div`
    height: 350px;
`;

export const TarefasPessoa = styled.div`
    background-color: var(--preto-medio);
    border-radius: 10px;
    gap: 2rem;
    box-shadow: 0px 2px 12px 5px rgb(0, 0, 0, 0.08);
    transition: 0.5s;
`;