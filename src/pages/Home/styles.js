import styled from "styled-components";

export const NotFoundContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 65vh;

    img {
        margin-bottom: 1%;
    }

    h3 {
        color: #454756; 
        text-align: center;
        font-size: 1.55rem;
    }
`;

export const Main = styled.main`
    //border:  1px solid red;
    padding: 0 2.5%;
    display: grid;
    gap: 2%;
    grid-template-columns: 1fr 6fr 5fr;
    grid-template-rows: 25%;
    grid-template-areas: ". header         header"
                         ". projectSummary projectSummary"
                         ". projectCards   teamSummary";

    @media (max-width: 992px) {
        padding: 0 5%;
        grid-template-columns: 6fr 5fr;
        grid-template-areas: "header         header"
                             "projectSummary projectSummary"
                             "projectCards   teamSummary";
    }

    @media (max-width: 768px) {
        grid-template-columns: 11fr;
        grid-template-areas: "header"
                             "projectSummary"
                             "projectCards"   
                             "teamSummary";
    }
`;

export const Header = styled.div`
    display: grid;
    border-bottom: 0.15px solid #2C2E3B;
    margin-top: 2%;
    padding-bottom: 2%;
    //border:  1px solid red;
    grid-area: header;
    grid-template-columns: 12fr;
    grid-template-rows: 3rem;
    grid-template-areas: "title";
    
    @media (max-width: 768px) {
        padding-bottom: 3.5%;
        grid-template-columns: 12fr;
        grid-template-areas: "title"
    }

    @media (min-width: 576px) {

    }
`;

export const Title = styled.h1`
    color: var(--laranja);
    font-size: 2rem;
    //border:  1px solid red;
    grid-area: title;
`;

export const ProjectSummaryHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    //border: 1px solid red;
    grid-area: summaryHeader;
`;

export const ProjectSummaryTitle = styled.h3`
    font-size: 1.5rem;
    margin: 0;
`;

export const ProjectSummaryContainer = styled.div`
    grid-area: projectSummary;
    width: 100%;
    background-color: var(--componentes);
    color: var(--corTextComponente);
    padding: 1.5%;
    border-radius: 10px;
    box-shadow: 0px 2px 6px rgb(0, 0, 0, 0.15);
    display: grid;
    gap: 1%;
    grid-template-columns: 6fr 6fr;
    grid-template-areas:    "summaryHeader summaryHeader"
                            "countersContainer chartContainer";

    @media (max-width: 992px) {
        padding: 0 5%;
        grid-template-columns: 12fr;
        grid-template-rows: 3rem;
        grid-template-areas: "summaryHeader"
                            "countersContainer" "chartContainer";
    }
`;

export const ProjectCountersContainer = styled.div`
    grid-area: countersContainer;
    //border: 1px solid red;
    display: grid;
    grid-template-columns: 6fr 6fr;
    grid-template-rows: 50%;
    grid-template-areas:  "counterContainer counterContainer"
                          "counterContainer counterContainer";
`

export const ProjectCounterContainer = styled.div`
    //border: 1px solid red;
    border-right: 0.5px solid #2C2E3B;
    border-bottom: 0.5px solid #2C2E3B;
    padding: 10%;

    &:nth-last-child(-n+2) {
        border-bottom: none;
    }

    @media (max-width: 992px) {
        &:nth-last-child(n) {
            border-bottom: 0.5px solid #2C2E3B;
        }

        &:nth-last-child(2n-1) {
            border-right: none;
        }
    }
`

export const ProjectCounterTitle = styled.h6`
    font-size: 1.1rem;
`;

export const CounterNumContainer = styled.div`
    display: flex;
    gap: 5%;
`;

export const ProjectCounterNum = styled.h5`
    color: var(--corBotao);
    margin: 0;
    font-size: 1.4rem;
`;

export const TagContainer = styled.div`
    color: #00DC7D;
    background-color: rgba(0, 220, 125, 0.05);
    border-radius: 50px;
    width: fit-content;
    padding: 0.9% 2.5%;
    display: flex;
    gap: 4px;
`;

export const TagTitle = styled.span`
    font-weight: 500;
    font-size: 0.85rem;
`;

export const ProjectCounterSubtitle = styled.span`
    font-size: 0.9rem;
    color: var(--cinza);
`;

export const LinearChartContainer = styled.div`
    height: 350px;
    //border: 1px solid red;
    grid-area: chartContainer;
`;

export const LinearChartHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const LinearChartTitle = styled.h5`

`;