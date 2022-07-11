import { PropaneSharp } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
//import Rout from "./routes";
import api from '../../api';
//import ExibirEquipes from "./OneEquipe";


function BuscarMembros(props) {
    const [pessoas, setPessoas] = useState([]);
    const url = '/equipes/' + props.id_equipe + '/pessoas';
    useEffect(() => {
        const fetchEquipe = async () => {
            const response = await api.get(url)
            setPessoas(response.data)
        }
        fetchEquipe()
    });

    console.log(pessoas)

    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">NOME</th>
                    </tr>
                </thead>
                <tbody>
                    {pessoas && 
                    pessoas.map((r) => (
                        <tr key={r.id_pessoa}>
                        <th scope="row">
                        {r.id_pessoa}
                            </th>
                            <td style={{color:"#fff"}}>
                                {r.nome_pessoa}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    )

}

export default BuscarMembros