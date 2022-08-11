import React from "react";
import { Link } from "react-router-dom";
import aim from '../../../assets/icons/aim.svg';

export default function CardPessoas(props){

        function MudarBackground(funcao) {
            if (funcao === "Front-End" || "Front End") {
                return (
                    <span className="TagFrontEnd">Front-End</span>
                )
            } else if (funcao === "Back-End" || "Back End") {
                return (
                    <span className="TagBackEnd">Back-End</span>
                )
            }
        }
        if(props.Pessoas !== null){
            return (
                <>
                    {props.Pessoas.map(p => (
                        <Link reloadDocument to={'/pessoas/' + p.id_pessoa} className="Link CardPessoas text-reset text-decoration-none col-lg-6 col-md-12 p-4">
                            <div className="CardPessoaTag">
                                {MudarBackground(p.funcao_pessoa)}
                            </div>
                            <div key={props.Pessoas.id_pessoa} className=" ">
                                <div className="CardPessoas1 mb-3">
                                    <h2 class="NomePessoa">{p.nome_pessoa}</h2>
                                    
                                    <div className="mb-3">
                                        <img src={aim} alt="" /> <span>{p.nome_equipe}</span>
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
        } else {
            return (
                <>
                <div className="Link CardPessoas text-reset text-decoration-none col-lg-6 col-md-12 p-4">
                            <div className="CardPessoaTag">
                                sem função
                            </div>
                            <div className=" ">
                                <div className="CardPessoas1 mb-3">
                                    <h2 class="NomePessoa">sem nome</h2>
                                    
                                    <div className="mb-3">
                                        <img src={aim} alt="" /> <span>sem equipe</span>
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
                </div>
                </>
            )
        }
    }