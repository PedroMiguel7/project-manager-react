import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        --laranja: ${(props) => props.theme.Botao};
        --azul: #093D93;
        --branco: #F4F5FA;
        --preto: ${(props) => props.theme.Fundo};
        --preto-medio: ${(props) => props.theme.Componente};
        --preto-claro: ${(props) => props.theme.Componente};
        --cinza: #87888C;
        --azul-claro: #28AEF3;
        --divider: #2C2E3B;
        --sideBar: ${(props) => props.theme.SideBar};


        --corFundo:  ${(props) => props.theme.Fundo};
        --componentes: ${(props) => props.theme.Componente};
        --textComponentes: {(props) => props.theme.Componente.textColor};
        --corBotao: ${(props) => props.theme.Botao};

        --inter: 'Inter', sans-serif;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    ::-webkit-scrollbar{
        width: 10px;
        background-color: #2B2B36;
        border-radius: 6px;
        border-bottom-right-radius: 5px;
    } 
    ::-webkit-scrollbar-hover{
        background-color: var(--laranja);
    }

    ::-webkit-scrollbar-thumb{
        background-color: #40404F;
        border-radius: 6px;
        border: 1px solid #2B2B36;
    }

    body {
        font-family: var(--inter);
        background-color: var(--preto);
        color: var(--branco);
    }

    header {
        position: fixed;
        top: 0;
        background-color: #191A23;
        height: 100vh;
        box-shadow: 0 30px 60px rgb(0, 0, 0, 0.3);
        min-width: 60px;
        z-index: 5;
    }

    main h1 {
        color: var(--laranja);
    }
`;