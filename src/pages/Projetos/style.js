import styled from "styled-components";

export const NotFoundContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 60vh;

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
    padding: 0 2.5%;
`;

export const Header = styled.div`
    border-bottom: 0.15px solid #2C2E3B;
    margin-top: 2%;
    padding-bottom: 2%;
`;

export const Title = styled.h1`
    color: var(--laranja);
    font-size: 2rem;
`;

export const Search = styled.input`
    background-color: var(--preto-medio);
    color: var(--branco);
    border: none;
    height: 3rem;
    border-radius: 8px;
    padding: 1.5rem 1.5rem 1.5rem 2.7rem;
    background-image: url('../../assets/icons/search.svg');
    background-repeat: no-repeat;
    background-position: 1rem center;
    background-size: 1rem;

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
    display: flex;
    flex-wrap: wrap;
    margin: 1% 0;
`;

export const Options = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    align-items: center;
    gap: 3%;
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
    gap: 2rem;
    margin: 2% 0;
`;