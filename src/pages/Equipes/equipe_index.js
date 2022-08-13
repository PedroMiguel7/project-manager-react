import filter from '../../assets/icons/filter.svg'
import Divider from '@mui/material/Divider';
import ExibirEquipes from "../../components/Card/CardEquipe/OneEquipe"
import BasicModalEquipe from "./NewEquipe";
import { useEffect, useState } from "react";
import api from "../../api";
import SearchNotFound from "../../assets/empty-states/search-not-found.svg";

export default function Equipes() {
    var [Equipes, setEquipes] = useState([]);
    useEffect(() => {
        const fetchEquipes = async () => {
            try {
                const response = await api.get('/equipes/');
                setEquipes(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchEquipes();
    }, []);

    const Atualiza = async () => {
        try {
            const response = await api.get('/equipes/');
            setEquipes(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const [filtro, setFiltro] = useState('')
    const handleChange = (event) => {
        setFiltro(event.target.value);
    }

    var emptyState = false;

    if(filtro){
        const exp = eval(`/${filtro.replace(/[^\d\w]+/,'.*')}/i`)
        Equipes = Equipes.filter(Equipes => exp.test(Equipes.nome_equipe.toUpperCase()))
        if (Equipes.length === 0) {
            emptyState = true;
        }
    }

    const [order, setOrder] = useState(1)
    const [columnorder, setColumnorder] = useState('nome_equipe')
    const handleOrder = (fieldName) => {
        Equipes = Equipes.sort((a, b) => {
            return a[columnorder].toUpperCase() > b[columnorder].toUpperCase() ? -order : order;
        })
        setOrder(-order)
        setColumnorder(fieldName)
    }

    function NotFound() {
        return (
            <>
                <div className="d-flex flex-column align-items-center mt-5">
                    <img className="mb-3" src={SearchNotFound} />
                    <h3 style={{color: "#454756", textAlign: "center"}}>Nenhum resultado encontrado.</h3>
                </div>
            </>
        )
    }

    return (
        <>
            <main className='col-11 offset-1 px-5'>
                <div className='row mt-5 pb-3 main-header'>
                    <h1 className="Titulo col-lg-3 fs-2">Equipes</h1>
                    <input onChange={handleChange} className="col-lg-3 offset-lg-6" type="search" name="main-search" id="main-search" placeholder="Pesquise aqui..." />
                </div>
                <Divider />
                <div className="Options row d-flex flex-wrap my-lg-3 my-3">
                    <div className="LeftOptions col mt-sm-2">
                        {/*<span className="me-2">Show:</span>
                        <input type="" name="txt-show" id="txt-show" size="1" />*/}
                    </div>
                    <div className="RightOptions d-flex justify-content-end align-items-center flex-wrap gap-3 col-lg-4 offset-lg-6 col-md-9 mt-sm-2 mt-2">
                        <BasicModalEquipe atualiza={Atualiza} />

                        <button onClick={e => handleOrder('nome_equipe')} className="ps-1" name="order-select" id="order-select" >
                            A - Z
                        </button>

                        {/*<select className="ps-1" name="order-select" id="order-select">
                            <option value="crescente">A - Z</option>
                            <option value="decrescente">Z - A</option>
                        </select>*/}

                        <button className="filter px-2 py-1">
                            <span>Filtro</span> <img src={filter} alt="" />
                        </button>
                    </div>
                </div>
                <div className="row CardsContainer my-4">
                    {emptyState === true ? NotFound() : <ExibirEquipes equipes={Equipes} atualiza={Atualiza}/> }
                </div>
            </main>
        </>
    )
}