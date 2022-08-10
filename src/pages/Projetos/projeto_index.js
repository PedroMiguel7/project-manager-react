import Header from "../../components/Header"
//import Card from "../../components/Card"
//import NewProject from '../../assets/icons/new.svg'
import BasicModal from '../../components/NewProject'
//import FilterMenu from "../../components/FilterMenu"
import Cards from "../../components/Card/CardProjetos/ExibirProjetos"
import FilterPopper from "../../components/FilterPopper"
import Search from '../../components/Search';
import Divider from '@mui/material/Divider';
import { useState, useEffect } from "react";
import api from "../../api";


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

    if(filter){
        const exp = eval(`/${filter.replace(/[^\d\w]+/,'.*')}/i`)
        projetos = projetos.filter(projetos => exp.test(projetos.nome_projeto.toUpperCase()))
    }

    
    const [order, setOrder] = useState(1)
    const [columnorder, setColumnorder] = useState('nome')
    const handleOrder = (fieldName, Ordem) => {
        projetos = projetos.sort((a, b) => {
            return a[columnorder].toUpperCase() > b[columnorder].toUpperCase() ? -order : order;
        })
        setOrder(-order)
        setColumnorder(fieldName)
    }

    return (
        <>
            <main className='col-11 offset-1 px-5'>
                <div className='row mt-5 pb-3 main-header'>
                    <h1 className="Titulo col-lg-3 fs-2">projetos</h1>
                    <input onChange={handleChange} className="col-lg-3 offset-lg-6" type="search" name="main-search" id="main-search" placeholder="Search here..."/>
                </div>
                <Divider />
                <div className="Options row d-flex flex-wrap my-lg-3 my-3">
                    <div className="LeftOptions col mt-sm-2">
                        {/*<span className="me-2">Show:</span>
                        <input type="" name="txt-show" id="txt-show" size="1" />*/}
                    </div>
                    <div className="RightOptions d-flex justify-content-end align-items-center flex-wrap gap-3 col-lg-4 offset-lg-6 col-md-9 mt-sm-2 mt-2">
                        <BasicModal />
                        <button onClick={e => handleOrder('nome')} className="ps-1" name="order-select" id="order-select" >
                            A - Z
                        </button>

                        {/*<select className="ps-1" name="order-select" id="order-select">
                            <option onClick={e => handleOrder('nome_projeto')} value="crescente">A - Z</option>
                            <option onClick={e => handleOrder('nome_projeto')} value="decrescente">Z - A</option>
                        </select>*/}

                        <FilterPopper />
                    </div>
                </div>

                <div className="row CardsContainer my-4">
                    <Cards Projetos={projetos} atualiza={Atualiza} />
                </div>

            </main>
        </>
    )
}