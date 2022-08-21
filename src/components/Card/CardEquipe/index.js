import React from "react";
import { Link } from "react-router-dom";
import TeamNotFound from "../../../assets/empty-states/team-not-found.svg";
import EditaEquipe from "../CardEquipe/EdiçãoEquipe/EditaEquipe";
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { CardContainer, Header, NomeEquipe, Resumo, EmptyStateContainer } from "./style";

export default function CardEquipe(props) {    
    if (props.equipes !== null) {
        function stringToColor(nome) {
            let hash = 0;
            let i;

            for (i = 0; i < nome.length; i += 1) {
              hash = nome.charCodeAt(i) + ((hash << 5) - hash);
            }
          
            let color = '#';
          
            for (i = 0; i < 3; i += 1) {
              const value = (hash >> (i * 8)) & 0xff;
              color += `00${value.toString(16)}`.slice(-2);
            }
          
            return color;
        }

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

        console.table(props.equipes);
        return (
            <>
                {props.equipes.map(p => (
                    <Link to={'/equipes/' + p.id_equipe} className="Link text-reset col-lg-6 col-md-12">
                        <CardContainer key={p.id_equipe}>
                            <Header>
                                <NomeEquipe>{p.nome_equipe}</NomeEquipe>
                                <Link to="/equipes">
                                    <EditaEquipe id_equipe={p.id_equipe} equipinha={p} atualiza={props.atualiza} />
                                </Link>
                            </Header>
                            <Resumo>
                                {p.pessoas !== null ? p.pessoas.length : 0} membros, 1 projetos ativos
                            </Resumo>
                            <AvatarGroup max={4} 
                            sx={{
                                '& .MuiAvatar-root': { width: 30, height: 30, fontSize: 15 },
                                
                                '& .MuiAvatarGroup-avatar': {
                                    border: "1px solid #1E1F28",
                                    color: "#1E1F28"
                                }
                            }}>
                                {p.pessoas !== null ?
                                p.pessoas.map(pe => (
                                    <Avatar sx={{bgcolor: `${stringToColor(pe.nome_pessoa)}`, color: "#1E1F28"}}>{stringAvatar(pe.nome_pessoa)}</Avatar>
                                ))
                            : " "}
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