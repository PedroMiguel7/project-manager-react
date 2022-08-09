import Sidebar from "../../components/SideBar/SideBar";
//import Card from "../../components/Card";
import AdicionarProjeto from '../../components/NewProject/index'
import CardBaixoHome from "./CardBaixoHome";
import CardLateralDireitoHome from "./CardLateralDireitoHome";
import Cards from "../../components/Card/CardProjetos/ExibirProjetos";
import { useState, useEffect } from "react";
import api from "../../api"

function Menu_index() {
  const [projetos, setProjetos] = useState([]);

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

  return (
    <div>
      <Sidebar />
      <main className="col-11 offset-1 col-lg-11 offset-lg-1 px-5">
        <div className="row mt-5 pb-3 main-header">
          <h1 className="col-lg-3 fs-2">Home - desafio 2.0</h1>
          <input
            className="col-lg-3 offset-lg-6"
            type="search"
            name="main-search"
            id="main-search"
            placeholder="Search here..."
          />
        </div>

        <div className="Options row align-items-center mt-lg-4">
          <div className="LeftOptions col-lg-2 mt-sm-2">
            <span className="me-2 fs-4">Projetos recentes</span>
          </div>
          <div className="RightOptions d-flex col-lg-2 offset-lg-8 mt-sm-2">
            <AdicionarProjeto />
          </div>
        </div>

        <div
          className="row d-flex justify-content-between flex-wrap"
        >
          <div className="CardlateralesquerdoHome col-lg-8 col-md-12 mt-2 ms-3 ">
            <div className="row CardsContainer my-4 mt-4 d-flex">
              <Cards Projetos={projetos}/>
            </div>
          </div>
          <div className="col-lg-3 col-md-12 col-sm-12 mt-2 me-2">
            <CardLateralDireitoHome />
          </div>
        </div>

        <div className="row mt-3">
          <CardBaixoHome Projetos={projetos}/>
        </div>
      </main>
    </div>
  );
}

export default Menu_index;
