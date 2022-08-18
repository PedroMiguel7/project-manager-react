import React from "react";
import { Link } from "react-router-dom";
import TeamNotFound from "../../../assets/empty-states/team-not-found.svg";
import EditaEquipe from "../CardEquipe/EdiçãoEquipe/EditaEquipe";
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { CardContainer, Header, NomeEquipe, Resumo, EmptyStateContainer } from "./style";

export default function CardEquipe(props) {
    if (props.equipes !== null) {
        function stringAvatar(nome) {
            if (nome.indexOf(' ') >= 0) {
                return (
                    `${nome.split(' ')[0][0]}${nome.split(' ')[1][0]}`
                )
            } else {
                return (
                    `${nome.split(' ')[0][0]}`
                )
            }
        }

        return (
            <>
                {props.equipes.map(p => (
                    <Link to={'/equipes/' + p.id_equipe} className="Link">
                        <CardContainer key={p.id_equipe}>
                            <Header>
                                <NomeEquipe>{p.nome_equipe}</NomeEquipe>
                                <Link to="/equipes">
                                    <EditaEquipe id_equipe={p.id_equipe} atualiza={props.atualiza} />
                                </Link>
                            </Header>
                            <Resumo>
                                5 membros, 2 projetos ativos
                            </Resumo>
                            <AvatarGroup max={4}>
                                {p.pessoas.map(pe => (
                                    <Avatar>{stringAvatar(pe.nome_pessoa)}</Avatar>
                                ))}
                            </AvatarGroup>
                        </CardContainer>
                    </Link>
                ))}
            </>
        )
    } else {
        return (
            <>
                <EmptyStateContainer>
                    <img src={TeamNotFound} />
                    <h5>
                        Ainda não foi criada nenhuma equipe.
                    </h5>    
                </EmptyStateContainer>
            </>
        )
    }
}