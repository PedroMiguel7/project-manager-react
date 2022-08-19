import BasicModal from './NewProjeto/index'
import Cards from "../../components/Card/CardProjetos/ExibirProjetos"
import FilterPopper from "../../components/FilterPopper"
import Divider from '@mui/material/Divider';
import { useState, useEffect } from "react";
import api from "../../api";
import SearchNotFound from "../../assets/empty-states/search-not-found.svg";


export default function ProjetoIndex() {
    var [projetos, setProjetos] = useState([]);
    useEffect(() => {
        const fetchProjetos = async () => {
            try {
                const response = await api.get('/projetos/');
                setProjetos(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchProjetos();
    }, []);

    const Atualiza = async () => {
        try {
            const response = await api.get('/projetos/');
            setProjetos(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const [filter, setFilter] = useState('')
    const handleChange = (event) =>{
        setFilter(event.target.value);
    }

    var emptyState = false;

    if(filter){
        const exp = eval(`/${filter.replace(/[^\d\w]+/,'.*')}/i`)
        projetos = projetos.filter(projetos => exp.test(projetos.nome_projeto.toUpperCase()))
        if (projetos.length === 0) {
            emptyState = true;
        }
    }
    
    const [order, setOrder] = useState(1)
    const [columnorder, setColumnorder] = useState('nome_projeto')
    const handleOrder = (fieldName) => {
        projetos = projetos.sort((a, b) => {
            return a[columnorder].toUpperCase() > b[columnorder].toUpperCase() ? -order : order;
        })
        setOrder(-order)
        setColumnorder(fieldName)
    }

    function NotFound() {
        return (
            <>
                <div className="d-flex flex-column align-items-center mt-5">
                    <img className="mb-3" src={SearchNotFound} alt="not found"/>
                    <h3 style={{color: "#454756", textAlign: "center"}}>Nenhum resultado encontrado.</h3>
                </div>
            </>
        )
    }

    return (
        <>
            <main className='col-11 offset-1 px-5'>
                <div className='row mt-5 pb-3 main-header'>
                    <h1 className="Titulo col-lg-3 fs-2">Projetos</h1>
                    <input onChange={handleChange} className="col-lg-3 offset-lg-6" type="search" name="main-search" id="main-search" placeholder="Pesquise aqui..."/>
                </div>
                <Divider />
                <div className="Options row d-flex flex-wrap my-lg-3 my-3">
                    <div className="LeftOptions col mt-sm-2">
                        {/*<span className="me-2">Show:</span>
                        <input type="" name="txt-show" id="txt-show" size="1" />*/}
                    </div>
                    <div className="RightOptions d-flex justify-content-end align-items-center flex-wrap gap-3 col-lg-4 offset-lg-6 col-md-9 mt-sm-2 mt-2">
                        <BasicModal atualiza={Atualiza}/>
                        <button onClick={e => handleOrder('nome_projeto')} className="ps-1" name="order-select" id="order-select" >
                            A - Z
                        </button>

                        {/*<select className="ps-1" name="order-select" id="order-select">
                            <option onClick={e => handleOrder('nome_projeto')} value="crescente">A - Z</option>
                            <option onClick={e => handleOrder('nome_projeto')} value="decrescente">Z - A</option>
                        </select>*/}

                        <FilterPopper PROJETOS={projetos} SET={setProjetos} atualiza={Atualiza}/>
                    </div>
                </div>

                <div className="row CardsContainer my-4">
                    {emptyState === true ? NotFound() : <Cards Projetos={projetos} atualiza={Atualiza} /> }
                </div>
            </main>
        </>
    )
}