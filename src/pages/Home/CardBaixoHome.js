import React from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import BarraProgresso from "../../components/Card/CardProjetos/BarraDeProgresso";

export default function CardBaixoHome(props) {

    /*function DeletaProjeto(id_projeto) {
        api.delete("/projetos/" + id_projeto, { method: "DELETE" })
            .then(resposta => {
                if (resposta.ok) {
                    api.get("/projetos/")
                        .then(novareposta => novareposta.json())
                        .then(dados => {
                            this.setState({ projetosHome: dados })
                        })
                }
            })
    }*/
    
    if (props.Projetos !== null) {
        return (
            <div className="CardBaixoHome pt-1 ps-2 pe-2 scrollar">
                <div className="LeftOptions col-lg-2 mt-sm-2">
                    <h5 className="me-2 ms-4 mt-3">Projetos</h5>
                </div>
                <table className="table" style={{ color: 'white' }}>
                    <thead style={{ position: "sticky" }}>
                        <tr className="LeftOptions">
                            <th scope="col" style={{ width: '10%', marginBottom: '40px' }}>#</th>
                            <th scope="col" style={{ width: '20%' }}>Titulo</th>
                            <th scope="col" style={{ width: '40%' }}>Progresso</th>
                            <th scope="col" style={{ width: '20%' }}>Status</th>
                            <th scope="col" style={{ width: '5%' }}></th>
                            {/*<th scope="col" style={{ width: '5%' }}></th>*/}
                        </tr>
                    </thead>
                    <tbody className="">
                        {props.Projetos.map(p => (
                            <tr key={p.id_projeto}>
                                <th scope="row">{p.id_projeto}</th>
                                <td className="">{p.nome_projeto}</td>
                                <td>
                                    <BarraProgresso id_projeto={p.id_projeto} />
                                </td>
                                <td>{p.status}</td>
                                <td className="d-flex"><Link to={'/projetos/' + p.id_projeto} className="text-reset text-decoration-none"><Button className=" md-4" style={{
                                    color: "#F4F5FA",
                                    background: "#F46E27"
                                }}
                                    variant="contained" >DETALHAR</Button></Link>
                                </td>
                                {/*<td><Button  style={{color: "#F4F5FA", background: "red"}} variant="danger" onClick={() => this.DeletaProjeto(p.id_projeto)}>EXCLUIR</Button></td>*/}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )

    } else {
        return (
            <div className="CardBaixoHome pt-1 ps-2 pe-2 scrollar fixTableHead">
                <div className="LeftOptions col-lg-2 mt-sm-2">
                    <h5 className="me-2 ms-4 mt-3">Projetos</h5>
                </div>
                <table className="table " style={{ color: 'white' }}>
                    <thead style={{ position: "sticky" }}>
                        <tr className="LeftOptions">
                            <th scope="col" style={{ width: '10%', marginBottom: '40px' }}>#</th>
                            <th scope="col" style={{ width: '20%' }}>Titulo</th>
                            <th scope="col" style={{ width: '40%' }}>Progresso</th>
                            <th scope="col" style={{ width: '20%' }}>Status</th>
                            <th scope="col" style={{ width: '5%' }}></th>
                            {/*<th scope="col" style={{ width: '5%' }}></th>*/}
                        </tr>
                    </thead>
                    <tbody className="">
                        <tr>
                            <th scope="row"></th>
                            <td className=""></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}