import styled from "styled-components";

export const PageContainer = styled.main`
    //padding-left: 2%;
    padding: 0 2.5%;
    display: grid;
    gap: 1%;
    grid-template-rows: 10vh 85vh;
    grid-template-columns: 1fr 11fr;
    grid-template-areas: ". header"
                        ". content";

    @media (max-width: 992px) {
        padding: 0 5%;
        grid-template-rows: 10vh 165vh;
        grid-template-columns: 1fr;
        grid-template-areas: "header"
                            "content";
    }

    /*@media (max-width: 768px) {
        grid-template-columns: 11fr;
        grid-template-areas: "header"
                            "options"
                            "cards";
    }                     */
`;

export const HeaderContainer = styled.div`
    grid-area: header;
    //border: 1px solid red;
`;

export const ContentContainer = styled.div`
    //border: 1px solid red;
    grid-area: content;
    display: grid;
    gap: 1.5%;
    grid-template-rows: 85vh;
    grid-template-columns: 3fr 3fr 2fr;
    grid-template-areas: "firstCol secondCol statsCol";

    @media (max-width: 992px) {
        gap: 3%;
        grid-template-rows: 100vh 60vh;
        grid-template-columns: 2fr 1fr;
        grid-template-areas: "firstCol statsCol"
                            "secondCol statsCol";
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-template-areas: "firstCol"
                            "secondCol"
                            "statsCol";
    }
`;

export const FirstContentCol = styled.div`
    //border: 1px solid red;
    grid-area: firstCol;
    display: grid;
    gap: 3%;
    grid-template-columns: 1fr;
    grid-template-rows: 44% 53%;
    grid-template-areas: "membros"
                        "projetos";

    @media (max-width: 992px) {
        gap: 5%;
        //height: 40vh;
        grid-template-rows: 39% 56%;
    }
`;

export const SecondContentCol = styled.div`
    //border: 1px solid red;
    grid-area: secondCol;
    display: grid;
    gap: 1.5%;
    grid-template-columns: 1fr;
    grid-template-rows: 40% 60%;
    grid-template-areas: "tarefas"
                        "tarefas";

    @media (max-width: 992px) {
        //margin-top: 3%;
        grid-template-columns: 1fr;
        grid-template-rows: 100%;
        grid-template-areas: "tarefas";
    }
`;

export const StatsCol = styled.div`
    //border: 1px solid red;
    gap: 2%;
    grid-area: statsCol;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 40% 28% 28%;
    grid-template-areas: "grafBar"
                        "grafProjetos"
                        "grafTarefas";

    @media (max-width: 992px) {
        grid-template-rows: 30% 33% 33%;
    }
`;

export const MembrosContainer = styled.div`
    grid-area: membros;
    //border: 1px solid red;
    height: 100%;
`;

export const MembrosUl = styled.div`
    height: 90%;
    overflow: auto;
    padding-left: 0;
    margin-bottom: 5%;
`;

export const ProjetosContainer = styled.div`
    background-color: var(--preto-medio);
    border-radius: 10px;
    grid-area: projetos;
    height: 100%;
    //border: 1px solid red;

    @media (max-width: 992px){
        //height: 70%;
    }
`;

export const HeaderProjetos = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #1E1F29;
    border-radius: 10px 10px 0 0;
    padding: 0.5rem 0.7rem;
`;

export const ProjetosUl = styled.div`
    //max-height: 350px;
    overflow: auto;
    height: 85%;
    padding-left: 0;
    //border: 1px solid red;
    margin: 0 1%;
`;

export const TarefasContainer = styled.div`
    background-color: var(--preto-medio);
    border-radius: 10px;
    grid-area: tarefas;
    height: 98.5%;
    //border: 1px solid red;

    @media (max-width: 992px) {
        height: 100%;
    }
`;

export const HeaderTarefas = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #1E1F29;
    border-radius: 10px 10px 0 0;
    padding: 0.5rem 0.7rem;
`;

export const TarefasUl = styled.div` 
    overflow: auto;
    padding-left: 0;
    height: 92%;
    //border: 1px solid red;
    margin: 0 1%;

    @media (max-width: 992px) {
        height: 85%;
    }
`;

export const Top3 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--preto-medio);
    list-style: none;
    padding: 2%;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    grid-area: grafBar;
`;

export const TarefasCircularProgress = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background-color: var(--preto-medio);
    list-style: none;
    height: 100%;
    width: 100%;
    padding: 2%;
    border-radius: 10px;
    grid-area: grafTarefas;
`;

export const ProjetosCircularProgress = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background-color: var(--preto-medio);
    height: 100%;
    width: 100%;
    padding: 2%;
    border-radius: 10px;
    grid-area: grafProjetos;
`;

// Imprime Tarefas
export const TarefasLi = styled.li`
    display: flex;
    flex-direction: column;
    border-bottom: 0.15px solid #2C2E3B;
    padding: 1.2rem 0.7rem;
    list-style: none;

    &:nth-last-child(1) {
        border-bottom: none;
    }
`;

export const StatusTarefa = styled.span`
    color: #287CB8;
    font-weight: 500;
    font-size: 0.93rem;
`;

export const NomeTarefa = styled.h5`
    font-weight: 400;
    margin: 0;
`;

export const PrazoTarefa = styled.span`
    color: #87888C;
    font-size: 0.93rem;
`;

// Empty State
export const EmptyStateContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #454756;
    background-color: var(--preto-medio);
    border-radius: 10px;
    margin-bottom: 0.5rem;
    padding: 0.9rem;
`;