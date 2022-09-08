import BasicModal from './components/NewProjeto/index'
import Cards from "../../components/Card/CardProjetos/ExibirProjetos"
import FilterPopper from "./components/FilterPopper"
import Divider from '@mui/material/Divider';
import { useState, useEffect } from "react";
import api from "../../services/api";
import SearchNotFound from "../../assets/empty-states/search-not-found.svg";
import { NotFoundContainer, Main, Header, Title, Search, OptionsContainer, Options, OrderSelect, CardsContainer } from './style.js'; 

export default function ProjetoIndex() {
    document.title = "Projetos";
    var [projetos, setProjetos] = useState([]);
    useEffect(() => {
        const fetchProjetos = async () => {
            try {
                const response = await api.get('/projetos/');
                setProjetos(response.data);
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
        projetos = projetos?.filter(projetos => exp.test(projetos.nome_projeto.toUpperCase()))
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
                <NotFoundContainer>
                    <img className="mb-3" src={SearchNotFound} alt="not found"/>
                    <h3 style={{color: "#454756", textAlign: "center"}}>Nenhum resultado encontrado.</h3>
                </NotFoundContainer>
            </>
        )
    }

    return (
        <>
            <Main>
                <Header>
                    <Title>Projetos</Title>
                    <Search id='pesquisa' onChange={handleChange} type="search" name="main-search" placeholder="Pesquise aqui..."/>
                </Header>
                <Divider />
                <OptionsContainer>
                    {/* <div className="LeftOptions col mt-sm-2">
                        <span className="me-2">Show:</span>
                        <input type="" name="txt-show" id="txt-show" size="1" />
                    </div> */}
                    <Options>
                        <BasicModal atualiza={Atualiza}/>
                        <OrderSelect id='OrdenaProjeto' onClick={e => handleOrder('nome_projeto')} name="order-select">
                            A - Z
                        </OrderSelect>

                        {/*<select className="ps-1" name="order-select" id="order-select">
                            <option onClick={e => handleOrder('nome_projeto')} value="crescente">A - Z</option>
                            <option onClick={e => handleOrder('nome_projeto')} value="decrescente">Z - A</option>
                        </select>*/}

                        <FilterPopper id='filtro' PROJETOS={projetos} SET={setProjetos} atualiza={Atualiza}/>
                    </Options>
                </OptionsContainer>
                {
                    emptyState === true ?
                    <CardsContainer notFound>
                        {NotFound()}
                    </CardsContainer>
                    :
                    <CardsContainer>
                        <Cards Projetos={projetos} atualiza={Atualiza} />
                    </CardsContainer>
                }
            </Main>
        </>
    )
}