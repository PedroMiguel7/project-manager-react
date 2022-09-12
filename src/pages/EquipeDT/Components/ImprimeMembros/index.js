import React from "react";
import Avatar from '@mui/material/Avatar';
import PeopleNotFound from '../../../../assets/empty-states/people-not-found.svg';
import MenuMembros from "../MenuMembros";
import { EmptyStateContainer, EmptyStateImg, EmptyStateMessage, MembroLi, MainDiv, PersonInformations, Nome, Funcao } from "./style";
import MembrosSkeleton from "../Skeleton";

export default function ImprimeMembros(props) {
    if (!props.pessoas) {
        return (
            <>
                <MembrosSkeleton />
                <MembrosSkeleton />
                <MembrosSkeleton />
                <MembrosSkeleton />
            </>
        )
    } else if (props.pessoas === null) {
        return (
            <>
                <EmptyStateContainer>
                    <EmptyStateImg src={PeopleNotFound} />
                    <EmptyStateMessage>
                        Essa equipe ainda não possui membros.
                    </EmptyStateMessage>
                </EmptyStateContainer>
            </>
        );
    } else {
        let path = window.location.pathname;

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

        return (
            props.pessoas?.map(p => (
                <MembroLi key={p.id_pessoa}>
                    <MainDiv>
                        <Avatar sx={{ bgcolor: `${stringToHslColor(p.nome_pessoa, 50, 70)}`, color: "#1E1F28" }}>
                            {stringAvatar(p.nome_pessoa)}
                        </Avatar>
                        <PersonInformations>
                            <Nome>{p.nome_pessoa}</Nome>
                            <Funcao>{p.funcao_pessoa}</Funcao>
                        </PersonInformations>
                    </MainDiv>
                    <MenuMembros id={p.id_pessoa} path={path} />

                    {/*<a className="LinkProjeto" href={`/pessoas/${p.id_pessoa}`} target="_blank">Ver Pessoa</a>*/}
                </MembroLi>
            ))
        );
    }
}