import React from "react";
import { Link } from "react-router-dom";
import PeopleNotFound from '../../../assets/empty-states/people-not-found.svg';
import { Aaim } from "../../../assets/icons/ICONS lightThema/icones";
import MostraProjetosOuTarefas from "./MostraPrETa";
import { CardContainer, CardInformations, CardTitle, TeamContainer, TeamName, CardExtraInformations, Tag, TagName } from "./style";
import CardSkeleton from "./Skeleton";

export default function CardPessoas(props) {
    function MudarBackground(funcao) {
        if (funcao === "Front-End") {
            return (
                <Tag color="#A9DFD8">
                    <TagName>Front-End</TagName>
                </Tag>
            )
        } else if (funcao === "Back-End") {
            return (
                <Tag color="#F2C8ED">
                    <TagName>Back-End</TagName>
                </Tag>
            )
        } else if (funcao === "Gerente de Projeto") {
            return (
                <Tag color="#A7CAFF">
                    <TagName>Gerente de Projeto</TagName>
                </Tag>
            )
        } else if (funcao === "Tester") {
            return (
                <Tag color="#E7DF9B">
                    <TagName>Tester</TagName>
                </Tag>
            )
        } else {
            return (
                <Tag>
                    <TagName>Sem funcao</TagName>
                </Tag>
            )
        }
    }

    console.log(props.Pessoas.length)
    if (props.Pessoas.length !== 0) {
        return (
            <>
                {props.Pessoas?.map(p => (
                    <CardContainer to={'/pessoas/' + p.id_pessoa}>
                        {MudarBackground(p.funcao_pessoa)}
                        <CardInformations key={p.id_pessoa}>
                            <CardTitle style={{ color: 'var(--corTextComponente)' }}>{p.nome_pessoa}</CardTitle>

                            <TeamContainer>
                                <Aaim/><TeamName style={{ color: 'var(--corTextComponente)' }}>{p.nome_equipe}</TeamName>
                            </TeamContainer>
                        </CardInformations>
                        <CardExtraInformations>
                            <div>
                                <div style={{ color: 'var(--corTextComponente)' }}><MostraProjetosOuTarefas PRouTA={1} equipe_id={p.equipe_id} /></div>
                                <div style={{ color: 'var(--corTextComponente)' }}>Projetos</div>
                            </div>
                            <div>
                                <div style={{ color: 'var(--corTextComponente)' }}><MostraProjetosOuTarefas PRouTA={2} id_pessoa={p.id_pessoa} /></div>
                                <div style={{ color: 'var(--corTextComponente)' }}>Tarefas</div>
                            </div>
                        </CardExtraInformations>
                    </CardContainer>
                ))}
            </>
        )
    } else if (props.Pessoas.length === 0){
        return (
            <>
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
            </>
        )
    }
}