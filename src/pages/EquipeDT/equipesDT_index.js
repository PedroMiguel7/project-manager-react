import React, { Component, useEffect, useState } from "react";
import api from '../../api';
import HeaderDt from "../../components/HeaderDt"
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import TaskIcon from '../../assets/icons/task.svg';

class equipeDT_index extends Component {
    state = {
        projetos: [],
        equipe: [],
        PessoasEquipe: [],
    }
    async componentDidMount() {
        var equipePath = window.location.pathname;
        
        var url = equipePath;
        const response = await api.get('/projetos/');
        const response2 = await api.get(url+'/pessoas');
        const response3 = await api.get(equipePath);

        
        this.setState({ projetos: response.data });
        this.setState({ PessoasEquipe: response2.data });
        this.setState({ equipe: response3.data });
        
    }

    BuscarMembros = (props) => {
        const [pessoas, setPessoas] = useState([]);
        const url = '/equipes/' + props.equipe_id + '/pessoas';
        useEffect(() => {
            const fetchEquipe = async () => {
                const response2 = await api.get(url)
                setPessoas(response2.data)
            }
            fetchEquipe()
        });
        let totalMembros = 0;
        if(pessoas === null){
            totalMembros = pessoas.length;
        }
        return (
            totalMembros
        );
    }
    
    ImprimeMembros = (props) => {
        var teste = props.PessoasEquipe;
        if( teste === null){
            return(
                <tr>
                    <th></th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            );
        } else{
            return(
            props.PessoasEquipe.map(p => (
                <tr key={teste.id_pessoa}>
                    <th scope="row">{p.id_pessoa}</th>
                    <td className="">{p.nome_pessoa}</td>
                    <td>{p.funcao_pessoa}</td>
                    <td></td>
                    <td><Link to={'/pessoas/' + p.id_pessoa} className="text-reset text-decoration-none"><Button style={{
                        color: "#F4F5FA",
                        background: "#F46E27"
                    }}
                        variant="contained" >DETALHAR</Button></Link></td>
                </tr>
            ))
            );
        }
    }

    DeletaEquipe(id_equipe) {
        api.delete("/equipes/"+id_equipe)
    }

    render() {
        const { projetos } = this.state;
        const { equipe } = this.state;
        const { PessoasEquipe } = this.state;

        return (
            <>
                <main className='col-11 offset-1 col-lg-11 offset-lg-1 px-5'>
                    <div className="TesteGrid row">
                        <HeaderDt pagina="Equipe" titulo={equipe.nome_equipe} Status='' />
                    </div>
                    <div className="TesteGrid row">
                        <div className="TesteGrid col-4">
                            <div>
                                <h3>Membros</h3>
                                <ul className="ps-0">
                                    <li className="MembroLi d-flex ">
                                        <Avatar sx={{ bgcolor: "#c4c" }}>N</Avatar>
                                        <div className="d-flex flex-column">
                                            <span>Fulano de Tal</span>
                                            <span>Front-End</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="TesteGrid col-4">
                            <h3>Tarefas</h3>
                                <ul className="ps-0">
                                    <li className="TarefasLi d-flex ">
                                        <div className="TaskIcon d-flex align-items-center justify-content-center">
                                            <img src={TaskIcon} />
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex flex-column">
                                                <span>Em Andamento</span>
                                                <span>Fazer algo</span>
                                                <span>2 dias restantes</span>
                                            </div>
                                        
                                            <div>
                                                <Button variant="contained">Ver</Button>
                                            </div>
                                            
                                        </div>
                                        
                                        
                                    </li>
                                </ul>
                        </div>
                        <div className="TesteGrid col-4">
                            <h2>Estatísticas</h2>
                        </div>
                    </div>
                </main>
            </>
        )
    }
}

export default equipeDT_index;