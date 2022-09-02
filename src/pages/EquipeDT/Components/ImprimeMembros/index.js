import React from "react";
import Avatar from '@mui/material/Avatar';
import PeopleNotFound from '../../../../assets/empty-states/people-not-found.svg';
import MenuMembros from "../MenuMembros";

export default function ImprimeMembros(props) {
    if (props.pessoas === null) {
        return (
            <>
                <div className="EmptyStateContainer">
                    <img src={PeopleNotFound} />
                    <h5>
                        Essa equipe ainda não possui membros.
                    </h5>
                </div>
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
                <li className="MembroLi d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <Avatar sx={{ bgcolor: `${stringToHslColor(p.nome_pessoa, 50, 70)}`, color: "#1E1F28" }}>
                            {stringAvatar(p.nome_pessoa)}
                        </Avatar>
                        <div className="d-flex flex-column ms-2">
                            <span>{p.nome_pessoa}</span>
                            <span>{p.funcao_pessoa}</span>
                        </div>
                    </div>

                    <div className="d-flex me-2">
                        <MenuMembros id={p.id_pessoa} path={path} />

                        {/*<a className="LinkProjeto" href={`/pessoas/${p.id_pessoa}`} target="_blank">Ver Pessoa</a>*/}
                    </div>
                </li>
            ))
        );
    }
}