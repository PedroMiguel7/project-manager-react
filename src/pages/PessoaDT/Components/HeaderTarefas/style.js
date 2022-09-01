import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    //border: 1px solid red;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    gap: 3%;
    //border: 1px solid red;
    width: 100%;

    @media (max-width: 992px) {
        flex-wrap: wrap;
    }
`;

export const Title = styled.h5`
    margin: 0;
`;

export const TableContainer = styled.div`
    max-height: 30vh;
`;

export const Table = styled.table`
    color: white;
    height: 2rem;
    border-bottom: 1px solid var(--preto-claro) !important;
`;