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
    max-height: 80vh;
`;

export const HeaderTarefas = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #1E1F29;
    border-radius: 10px 10px 0 0;
    padding: 0.5rem 0.7rem;
`;

export const TarefasUl = styled.div`
    max-height: 60vh;
    overflow: auto;
    padding-left: 0;
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
`;

export const TarefasCircularProgress = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    background-color: var(--preto-medio);
    list-style: none;
    /*padding: 8px;*/
    border-radius: 10px;
    margin-bottom: 0.5rem;
`;

export const ProjetosCircularProgress = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap-reverse;
    background-color: var(--preto-medio);
    list-style: none;
    /*padding: 8px;*/
    border-radius: 10px;
    margin-bottom: 0.5rem;
`;