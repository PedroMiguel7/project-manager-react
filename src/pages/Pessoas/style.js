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
    grid-template-columns: 1fr 11fr;
    grid-template-areas: ". header"
                        ". options"
                        ". cards";

    @media (max-width: 992px) {
        padding: 0 5%;
        grid-template-columns: 11fr;
        grid-template-areas: "header"
                            "options"
                            "cards";
    }

    @media (max-width: 768px) {
        grid-template-columns: 11fr;
        grid-template-areas: "header"
                            "options"
                            "cards";
    }
`;

export const Header = styled.div`
    display: grid;
    border-bottom: 0.15px solid #2C2E3B;
    margin-top: 2%;
    padding-bottom: 2%;
    //border:  1px solid red;
    grid-area: header;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 3rem;
    grid-template-areas: "title search";
    
    @media (max-width: 768px) {
        padding-bottom: 3.5%;
        grid-template-columns: 1fr;
        grid-template-areas: "title" 
                            "search";
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

export const Search = styled.input`
    background-color: var(--corPesquisa);
    color: var(--corTextPesquisa);
    border: none;
    //border:  1px solid red;
    height: 3rem;
    border-radius: 8px;
    padding: 1.5rem 1.5rem 1.5rem 2.7rem;
    background-image: url('../../assets/icons/search.svg');
    background-repeat: no-repeat;
    background-position: 1rem center;
    background-size: 1rem;
    grid-area: search;

    &:focus {
        background-color: #2b2c3b;
        transition: 0.2s;
    }

    &::-webkit-search-cancel-button {
        -webkit-appearance: none;
        margin-right: -10px;
        height: 15px;
        width: 15px;
        background-image: url('../../assets/icons/clear.svg');
        background-repeat: no-repeat;
        background-position: center;
        transition: all 0.2s ease;
    }
`;

export const OptionsContainer = styled.div`
    display: grid;
    margin: 1% 0;
    //border:  1px solid red;
    grid-area: options;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "leftOp rightOp";

    @media (max-width: 992px) {
        margin: 2% 0;
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-template-areas: "rightOp";
    }
`;

export const Options = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    align-items: center;
    gap: 3%;
    //border:  1px solid red;
    grid-area: rightOp;
`;

export const OrderSelect = styled.button`
    height: 32px;
    border: 1px solid var(--cinza);
    border-radius: 10px;
    background-color: transparent;
    color: var(--cinza);
    width: 5rem;
`;

export const CardsContainer = styled.div`
    display: grid;
    gap: 1.8rem;
    margin: 2% 0;
    //border:  1px solid red;
    grid-area: cards;
    grid-template-columns: ${props => props.notFound ? "1fr" : "1fr 1fr 1fr 1fr"};
    grid-template-areas: ${props => props.notFound ? "card" : "card card card card"} ;

    @media (max-width: 1200px) {
        grid-template-columns: ${props => props.notFound ? "1fr" : "1fr 1fr 1fr"};
        grid-template-areas: ${props => props.notFound ? "card" : "card card card"} ;
    }

    @media (max-width: 992px) {
        grid-template-columns: ${props => props.notFound ? "1fr" : "1fr 1fr"};
        grid-template-areas: ${props => props.notFound ? "card" : "card card"} ;
    }

    @media (max-width: 768px) {
        grid-template-columns: ${props => props.notFound ? "1fr" : "1fr 1fr"};
        grid-template-areas: ${props => props.notFound ? "card" : "card card"} ;
    }

    @media (max-width: 576px) {
        grid-template-columns: 1fr;
        grid-template-areas: "card";
    }
`;