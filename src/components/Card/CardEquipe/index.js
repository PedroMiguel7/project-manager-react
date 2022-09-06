import React from "react";
import { Link } from "react-router-dom";
import TeamNotFound from "../../../assets/empty-states/team-not-found.svg";
import EditaEquipe from "../CardEquipe/EdiçãoEquipe/EditaEquipe";
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { CardContainer, Header, NomeEquipe, ResumoContainer, Resumo, EmptyStateContainer, StyledLink } from "./style";
import CardSkeleton from "./Skeleton";

export default function CardEquipe(props) {
    console.log(props.equipes);
    console.log(props.equipes.length);
    if (props.equipes.length !== 0) {
        function stringToHslColor(str, s, l) {
            var hash = 0;
            for (var i = 0; i < str.length; i++) {
                hash = str.charCodeAt(i) + ((hash << 5) - hash);
            }

            var h = hash % 360;
            return 'hsl(' + h + ', ' + s + '%, ' + l + '%)';
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

        //console.table(props.equipes);
        const equipes = props.equipes;
        console.log(equipes)
        return (
            <>
                {props.equipes?.map(p => (
                    <StyledLink to={'/equipes/' + p.id_equipe}>
                        <CardContainer key={p.id_equipe}>
                            <Header>
                                <NomeEquipe>{p.nome_equipe}</NomeEquipe>
                                <Link to="/equipes">
                                    <EditaEquipe id_equipe={p.id_equipe} equipinha={p} atualiza={props.atualiza} />
                                </Link>
                            </Header>
                            <ResumoContainer>
                                <Resumo>
                                    {p.pessoas !== null ? p.pessoas.length : 0} membros, {p.pessoas !== null ? p.projetos_ativos : 0} projetos ativos
                                </Resumo>
                                <AvatarGroup max={4}
                                    sx={{
                                        '& .MuiAvatar-root': { width: 30, height: 30, fontSize: 15 },

                                        '& .MuiAvatarGroup-avatar': {
                                            border: "1px solid #21222D",
                                            color: "#1E1F28",
                                            background: "#87888C",
                                        }
                                    }}>
                                    {p.pessoas !== null ?
                                        p.pessoas.map(pe => (
                                            <Avatar sx={{ bgcolor: `${stringToHslColor(pe.nome_pessoa, 50, 70)} !important`, color: "#1E1F28 !important", borderColor: "#21222D !important" }}>{stringAvatar(pe.nome_pessoa)}</Avatar>
                                        ))
                                        : " "}
                                </AvatarGroup>
                            </ResumoContainer>
                        </CardContainer>
                    </StyledLink>
                ))}
            </>
        )
    } else if (props.equipes.length === 0) {
        console.log(`Ta sem nada: ${props.equipes.lenght}`)
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