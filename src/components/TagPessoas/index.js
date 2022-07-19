import {useState, useEffect} from 'react';

function TagPessoas({funcao}) {
    const [funcaoBackground, mudarBackground] = useState(0);
    
    useEffect(() => {
        const funcaoBackground = window.document.getElementsByClassName('CardPessoaTag');
    
        if (funcao === "Front-End" || "Front End") {
            funcaoBackground[4].style.background = '#FFC16A';
        } 
        else if (funcao === "Back-End" || "Back End") {
            funcaoBackground[1].style.background = '#A9DFD8';
        } 
        else if (funcao === "Dev-Ops" || "Dev Ops") {
            funcaoBackground[0].style.background = '#F2C8ED';
        } 
        else if (funcao === "Tester") {
            funcaoBackground[0].style.background = '#A7CAFF';
        } 
        else if (funcao === "Mobile") {
            funcaoBackground[0].style.background = '#E7DF9B';
        } 
        else if (funcao === "Banco de Dados") {
            funcaoBackground[0].style.background = '#F2A7A7';
        }
    })

    return (
        <>
            <div className="CardPessoaTag" onLoad={() => mudarBackground(funcaoBackground)}>
             {funcao}
            </div>
        </>
    )
}

export default TagPessoas