import Sidebar from "../../components/SideBar/SideBar";
import Card from "../../components/Card";
import BasicModal from '../../components/NewProject'
import CardBaixoHome from "./CardBaixoHome";

function Menu_index() {
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
            <BasicModal />

            <select className="ps-1 me-3 ms-3" name="order-select" id="order-select">
              <option value="crescente">A - Z</option>
              <option value="decrescente">Z - A</option>
            </select>
          </div>
        </div>
        <div
          className="d-flex justify-content-between"
          style={{ width: "100%" }}
        >
          <div className="col-8 mt-2 ms-3">
            <div className="row CardsContainer my-4 mt-4 d-flex">
            <Card linkUrl={"../projeto/:id"} titulo="API Rest" descricao="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." equipe="Komanda" progresso={70} />

            <Card linkUrl={"../projeto/:id"} titulo="Projeto 2" descricao="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." equipe="Devs Cariri" progresso={63}/>

            </div>
          </div>


          <div >
            <div
              className="cardLateralHome d-flex justify-content-center col-lg-12 col-md-12 p-4 mt-4 "
            >
              <div className="d-flex align-items-center justify-content-center">
                <div className="Resumo col-md-12 col-lg-12 justify-content-center ">
                  <div className="TotColaboradores d-flex align-items-center justify-content-center col-12">
                    <h6 >11</h6>
                    <strong>
                      <p className="ms-4 ">Total de <br /> Equipes</p>
                    </strong>
                  </div>
                  <div className="row col-12">
                    <div className="TotTarefas col-6 d-flex flex-column align-items-center justify-content-center">
                      <h6 className="col">60</h6>
                      <strong>
                        <p className="text-center col">Total de <br /> Projetos</p>
                      </strong>
                    </div>
                    <div className="col-6 d-flex flex-column align-items-center justify-content-center">
                      <div className="TarefasAnd d-flex align-items-center justify-content-center">
                        <h6 className="col-4 md-5" style={{ fontFamily: "'Roboto Mono', monospace" }}>13</h6>
                        <strong>
                          <p className="ms-2">Projetos em Andamento</p>
                        </strong>
                      </div>
                      <div className="TarefasConc d-flex align-items-center justify-content-center">
                        <h6 className="col-4 md-5" style={{ fontFamily: "'Roboto Mono', monospace" }}>47</h6>
                        <strong>
                          <p className=" ms-2">Projetos Concluídos</p>
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <CardBaixoHome/>
        </div>
      </main>
    </div>
  );
}

export default Menu_index;
