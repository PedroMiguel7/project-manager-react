import styled from "styled-components";

export const PageContainer = styled.div`
    display: grid;
    gap: 1.5%;
    margin: 2% 0;

    grid-template-columns: 1fr 3fr 7fr;
    grid-template-rows: 92vh;
    grid-template-areas: ". profile dashboard";

    @media (max-width: 992px) {
        padding: 0 2% 0 4%;
        grid-template-columns: 11fr;
        grid-template-areas: "profile dashboard";
    }

    @media (max-width: 768px) {
        grid-template-rows: 70vh 90vh;
        grid-template-columns: 1fr;
        grid-template-areas: "profile"
                            "dashboard";
    }
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
    padding: 2%;
    grid-area: profile;

    @media (max-width: 768px) {
        width: 100%;
    }
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
    grid-area: dashboard;
    display: grid;
    row-gap: 2%;
    grid-template-rows: 45vh 45vh;
    grid-template-columns: 1fr;
    grid-template-areas: "rendimento"
                         "tarefas";
`;

export const Rendimento = styled.div`
    width: 100%;
    background-color: var(--preto-medio);
    border-radius: 10px;
    padding: 1% 1.5%;
    gap: 2rem;
    box-shadow: 0px 2px 12px 5px rgb(0, 0, 0, 0.08);
    transition: 0.5s;
    grid-area: rendimento;
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
    height: 85%;
    max-width: 100%;
`;

export const TarefasPessoa = styled.div`
    padding: 1% 1.5%;
    background-color: var(--preto-medio);
    border-radius: 10px;
    gap: 2rem;
    box-shadow: 0px 2px 12px 5px rgb(0, 0, 0, 0.08);
    transition: 0.5s;
    grid-area: tarefas;
`;