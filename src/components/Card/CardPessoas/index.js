import React from "react";
import { Link } from "react-router-dom";
import aim from '../../../assets/icons/aim.svg';
import PeopleNotFound from '../../../assets/empty-states/people-not-found.svg';
import MostraProjetosOuTarefas from "./MostraPrETa";
import { CardContainer, CardInformations, CardTitle, TeamContainer, Aim, TeamName, CardExtraInformations } from "./style";

export default function CardPessoas(props) {

    function MudarBackground(funcao) {
        if (funcao === "Front-End") {
            return (
                <div className="CardPessoaTag" style={{ backgroundColor: '#B9B8D3', color: '' }}>
                    <span className="">Front-End</span>
                </div>
            )
        } else if (funcao === "Back-End") {
            return (
                <div className="CardPessoaTag" style={{ backgroundColor: '#E56B70', color: 'white' }}>
                    <span className="">Back-End</span>
                </div>
            )
        } else if (funcao === "Gerente de Projeto") {
            return (
                <div className="CardPessoaTag" style={{ backgroundColor: '#F4FDD9', color: '' }}>
                    <span className="">Gerente de Projeto</span>
                </div>
            )
        } else if (funcao === "Tester") {
            return (
                <div className="CardPessoaTag" style={{ backgroundColor: '#A9DFD8', color: '' }}>
                    <span className="">Tester</span>
                </div>
            )
        } else {
            return (
                <div className="CardPessoaTag" style={{ backgroundColor: '#8D99AE', color: 'white' }}>
                    <span className="">Sem funcao</span>
                </div>
            )
        }
    }

    if (props.Pessoas !== null) {
        return (
            <>
                {props.Pessoas?.map(p => (
                    <CardContainer to={'/pessoas/' + p.id_pessoa}>
                        {MudarBackground(p.funcao_pessoa)}
                        <CardInformations key={p.id_pessoa}>
                            <CardTitle>{p.nome_pessoa}</CardTitle>

                            <TeamContainer>
                                <Aim src={aim} alt="" /> <TeamName>{p.nome_equipe}</TeamName>
                            </TeamContainer>
                        </CardInformations>
                        <CardExtraInformations>
                            <div>
                                <div><MostraProjetosOuTarefas PRouTA={1} equipe_id={p.equipe_id} /></div>
                                <div>Projetos</div>
                            </div>
                            <div>
                                <div><MostraProjetosOuTarefas PRouTA={2} id_pessoa={p.id_pessoa} /></div>
                                <div>Tarefas</div>
                            </div>
                        </CardExtraInformations>
                    </CardContainer>
                ))}
            </>
        )
    } else {
        return (
            <>
                <div className="EmptyStateContainer">
                    <img src={PeopleNotFound} />
                    <h5>
                        Ainda não foram adicionadas pessoas.
                    </h5>
                </div>
            </>
        )
    }
}