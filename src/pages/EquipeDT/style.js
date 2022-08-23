import styled from "styled-components";

export const PageContainer = styled.main`
    padding-left: 2%;
`;

export const MembrosContainer = styled.div`
    
`;

export const MembrosUl = styled.div`
    max-height: 350px;
    overflow: auto;
    padding-left: 0;
    margin-bottom: 5%;
`;

export const ProjetosContainer = styled.div`
    background-color: var(--preto-medio);
    border-radius: 10px;
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
    max-height: 350px;
    overflow: auto;
    padding-left: 0;
`;

export const TarefasContainer = styled.div`
    background-color: var(--preto-medio);
    border-radius: 10px;
`;

export const HeaderTarefas = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #1E1F29;
    border-radius: 10px 10px 0 0;
    padding: 0.5rem 0.7rem;
`;

export const TarefasUl = styled.div` 
    max-height: 73vh;
    overflow: auto;
    padding-left: 0;
    margin: 5px 10px;
`;

export const Top3 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--preto-medio);
    list-style: none;
    /*padding: 8px;*/
    border-radius: 10px;
    margin-bottom: 0.5rem;
    width: 100%;
    height: 400px;
`;

export const TarefasCircularProgress = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background-color: var(--preto-medio);
    list-style: none;
    height: 280px;
    width: 100%;
    /*padding: 8px;*/
    border-radius: 10px;
    margin-bottom: 0.5rem;
`;

export const ProjetosCircularProgress = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background-color: var(--preto-medio);
    list-style: none;
    height: 280px;
    width: 100%;
    /*padding: 8px;*/
    border-radius: 10px;
    margin-bottom: 0.5rem;
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