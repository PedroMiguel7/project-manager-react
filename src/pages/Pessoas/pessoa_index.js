import filter from '../../assets/icons/filter.svg';
import BasicModalPessoa from '../Pessoas/NewPessoa/NewPessoa';
import CardPessoas from "../../components/Card/CardPessoas";
import { useState, useEffect} from "react";
import api from "../../api";
import SearchNotFound from "../../assets/empty-states/search-not-found.svg";
import { NotFoundContainer, } from "./style.js"

export default function Pessoas() {
    var [pessoas, setPessoas] = useState([]);
    useEffect(() => {
        const fetchProjetos = async () => {
            try {
                const response = await api.get('/pessoas/');
                setPessoas(response.data);
            } catch (error) {
                console.log(error);
                if(error.response.status === 401){
                    window.location.href = '/'
                  }
            }
        };
        fetchProjetos();
    }, []);

    const Atualiza = async () => {
        try {
            const response = await api.get('/pessoas/');
            setPessoas(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const [filtro, setFiltro] = useState('')
    const handleChange = (event) =>{
        setFiltro(event.target.value);
    }

    var emptyState = false;

    if(filtro){
        const exp = eval(`/${filtro.replace(/[^\d\w]+/,'.*')}/i`)
        pessoas = pessoas?.filter(pessoas => exp.test(pessoas.nome_pessoa.toUpperCase()))
        if (pessoas.length === 0) {
            emptyState = true;
        }
    }

    const [order, setOrder] = useState(1)
    const [columnorder, setColumnorder] = useState('nome_pessoa')
    const handleOrder = (fieldName) => {
        pessoas = pessoas.sort((a, b) => {
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
            <main className='col-lg-11 col-sm-12 offset-lg-1 px-5'>
            <div className='row mt-5 pb-3 main-header'>
                    <h1 className="Titulo col-lg-3 fs-2">Pessoas</h1>
                    <input onChange={handleChange} className="col-lg-3 offset-lg-6" type="search" name="main-search" id="main-search" placeholder="Pesquise aqui..."/>
                </div>
                <div className="Options row d-flex flex-wrap mt-lg-3 mt-3 mb-5">
                    <div className="LeftOptions col mt-sm-2">
                        {/*<span className="me-2">Show:</span>
                        <input type="" name="txt-show" id="txt-show" size="1" />*/}
                    </div>
                    <div className="RightOptions d-flex justify-content-end align-items-center flex-wrap gap-3 col-lg-4 offset-lg-6 col-md-9 mt-sm-2 mt-2">
                        <BasicModalPessoa atualiza={Atualiza}/>

                        <button onClick={e => handleOrder('nome_pessoa')} className="ps-1" name="order-select" id="order-select" >
                            A - Z
                        </button>

                        {/*<select className="ps-1" name="order-select" id="order-select">
                            <option value="crescente">A - Z</option>
                            <option value="decrescente">Z - A</option>
                        </select>
                        <button className="filter px-2 py-1">
                            <span>Filtro</span> <img src={filter} alt="" />
                        </button>*/}
                    </div>
                </div>

                <div className="row CardsContainer my-4">
                    {emptyState === true ? NotFound() : <CardPessoas Pessoas={pessoas}/> }
                </div>
            </main>
        </>
    )
}