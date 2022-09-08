import React, { Component } from "react";
import { Link } from "react-router-dom";
import aim from '../../../assets/icons/aim.svg'
import profile from '../../../assets/icons/Profile.svg'
import {useState, useEffect} from 'react';
import api from '../../../services/api';
import TagPessoas from "../../TagPessoas";



class CardPessoas extends Component {
    state = {
        pessoas: [],
    }
    async componentDidMount() {
        const response = await api.get('/pessoas/');

        this.setState({ pessoas: response.data });
    }

    mudarBackground = () => () => {
        const [funcaoBackground, mudarBackground] = useState(0);
    
    useEffect(() => {
        const funcaoBackground = window.document.getElementsByClassName('CardPessoaTag');
        
        let i = 0;

        if (funcaoBackground[i].textContent === "Front-End" || "Front End") {
            funcaoBackground[i].style.background = '#FFC16A';
        } 
        else if (funcaoBackground[i].textContent === "Back-End" || "Back End") {
            funcaoBackground[i].style.background = '#A9DFD8';
        } 
        else if (funcaoBackground[i].textContent === "Dev-Ops" || "Dev Ops") {
            funcaoBackground[i].style.background = '#F2C8ED';
        } 
        else if (funcaoBackground[i].textContent === "Tester") {
            funcaoBackground[i].style.background = '#A7CAFF';
        } 
        else if (funcaoBackground[i].textContent === "Mobile") {
            funcaoBackground[i].style.background = '#E7DF9B';
        } 
        else if (funcaoBackground[i].textContent === "Banco de Dados") {
            funcaoBackground[i].style.background = '#F2A7A7';
        }
        i++;
    })
    }

    render() {
        const { pessoas } = this.state;

        const funcaoBackground = window.document.getElementsByClassName('CardPessoaTag');

        function mudarBackground() {
            const funcaoBackground = window.document.getElementsByClassName('CardPessoaTag');

            for (let i = 0; i < funcaoBackground.length; i++) {
                //funcaoBackground[i].style.background = 'red';
                if (funcaoBackground[i].textContent === "Front-End" || "Front End") {
                    return funcaoBackground[i].style.backgroundColor = 'green';
                }
                else if (funcaoBackground[i].textContent === "Back-End" || "Back End") {
                    return funcaoBackground[i].style.backgroundColor = 'blue';
                }
            }
        }

        return (
            <>
                {pessoas?.map(p => (
                    <Link reloadDocument to={'/pessoas/' + p.id_pessoa} className="Link CardPessoas text-reset text-decoration-none col-lg-6 col-md-12 p-4">
                        <div className="CardPessoaTag" onChange={() => mudarBackground(funcaoBackground)}>
                            {p.funcao_pessoa}
                        </div>
                        <div key={pessoas.id_pessoa} className=" ">
                            <div className="CardPessoas1 mb-3">
                                <h2 className="NomePessoa">{p.nome_pessoa}</h2>
                                
                                <div className="mb-3">
                                    <img src={aim} alt="" /> <span>{p.equipe_id}</span>
                                </div>
                            </div>
                            <div className="CardPessoas2">
                                <div>
                                    <div>15</div>
                                    <div>Projetos</div>
                                </div>
                                <div>
                                    <div>8</div>
                                    <div>Tarefas</div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </>
        )
    }
}


export default CardPessoas;