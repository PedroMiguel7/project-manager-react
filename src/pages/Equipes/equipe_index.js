import Divider from '@mui/material/Divider';
import ExibirEquipes from "../../components/Card/CardEquipe/index.js";
import BasicModalEquipe from "./NewEquipe";
import { useEffect, useState } from "react";
import api from "../../api";
import SearchNotFound from "../../assets/empty-states/search-not-found.svg";
import { NotFoundContainer, Main, Header, Title, Search, OptionsContainer, Options, OrderSelect, CardsContainer } from './style.js';

export default function Equipes() {
    var [Equipes, setEquipes] = useState([]);
    useEffect(() => {
        const fetchEquipes = async () => {
            try {
                const response = await api.get('/equipes/');
                setEquipes(response.data);
            } catch (error) {
                console.log(error);
                if(error.response.status === 401){
                    window.location.href = '/'
                  }
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
                <NotFoundContainer>
                    <img className="mb-3" src={SearchNotFound} />
                    <h3 style={{color: "#454756", textAlign: "center"}}>Nenhum resultado encontrado.</h3>
                </NotFoundContainer>
            </>
        )
    }

    return (
        <>
            <Main className='col-lg-11 col-sm-12 offset-lg-1 px-5'>
                <Header className='row'>
                    <Title className="col-lg-3">Equipes</Title>
                    <Search onChange={handleChange} className="col-lg-3 offset-lg-6" type="search" name="main-search" placeholder="Pesquise aqui..." />
                </Header>
                <Divider />
                <OptionsContainer className="row">
                    <div className="LeftOptions col mt-sm-2">
                        {/*<span className="me-2">Show:</span>
                        <input type="" name="txt-show" id="txt-show" size="1" />*/}
                    </div>
                    <Options className="col-lg-4 offset-lg-6 col-md-9 mt-sm-2 mt-2">
                        <BasicModalEquipe atualiza={Atualiza} />
                        <OrderSelect onClick={e => handleOrder('nome_equipe')} className="ps-1" name="order-select" >
                            A - Z
                        </OrderSelect>
                        {/*<select className="ps-1" name="order-select" id="order-select">
                            <option value="crescente">A - Z</option>
                            <option value="decrescente">Z - A</option>
                        </select>
                        <button className="filter px-2 py-1">
                            <span>Filtro</span> <img src={filter} alt="" />
                        </button>*/}
                    </Options>
                </OptionsContainer>
                <CardsContainer className="row">
                    {emptyState === true ? NotFound() : <ExibirEquipes equipes={Equipes} atualiza={Atualiza}/> }
                </CardsContainer>
            </Main>
        </>
    )
}