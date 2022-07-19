import React, { Component } from "react";
import { Link } from "react-router-dom";
import aim from '../../../assets/icons/aim.svg'
import profile from '../../../assets/icons/Profile.svg'
import {useState, useEffect} from 'react';
import api from '../../../api';
import TagPessoas from "../../TagPessoas";

class CardPessoas extends Component {
    state = {
        pessoas: [],
    }
    async componentDidMount() {
        const response = await api.get('/pessoas/');

        this.setState({ pessoas: response.data });
    }

    render() {
        const { pessoas } = this.state;
        console.log(pessoas);

        const funcaoBackground = window.document.getElementsByClassName('CardPessoaTag');
        console.log(funcaoBackground);

        /*function mudarBackground(funcao) {
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
        }*/

        return (
            <>
                {pessoas.map(p => (
                    <Link reloadDocument to={'/pessoas/' + p.id_pessoa} className="Link CardPessoas text-reset text-decoration-none col-lg-6 col-md-12 p-4">
                        <div className="CardPessoaTag" /*onLoad={mudarBackground(p.funcao_pessoa)}*/>
                            {p.funcao_pessoa}
                        </div>
                        <div key={pessoas.id_pessoa} className=" ">
                            <div className="CardPessoas1 mb-3">
                                <h2 class="NomePessoa">{p.nome_pessoa}</h2>
                                
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