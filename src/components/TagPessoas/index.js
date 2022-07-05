import {useState, useEffect} from 'react';

function TagPessoas({funcao}) {
    /*const [funcaoBackground, mudarBackground] = useState(0);
    
    useEffect(() => {
        const funcaoBackground = window.document.getElementsByClassName('CardPessoaTag');

        if (funcao === "Front-End" || "Front End") {
            funcaoBackground[0].style.background = '#FFC16A';
        } 
        if (funcao === "Back-End" || "Back End") {
            funcaoBackground[0].style.background = '#A9DFD8';
        } 
        if (funcao === "Dev-Ops" || "Dev Ops") {
            funcaoBackground[0].style.background = '#F2C8ED'
        } 
        if (funcao === "Tester") {
            funcaoBackground[0].style.background = '#A7CAFF'
        } 
        if (funcao === "Mobile") {
            funcaoBackground[0].style.background = '#E7DF9B'
        } 
        if (funcao === "Banco de Dados") {
            funcaoBackground[0].style.background = '#F2A7A7'
        }
    })*/

    return (
        <>
            <div className="CardPessoaTag" /*onLoad={() => mudarBackground(funcaoBackground)}*/>{funcao}</div>
        </>
    )
}

export default TagPessoas