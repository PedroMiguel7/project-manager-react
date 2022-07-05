import Sidebar from "../../components/SideBar/SideBar";
import Card from "../../components/Card";
import BasicModal from '../../components/NewProject'
import CardBaixoHome from "./CardBaixoHome";
import CardLateralDireitoHome from "./CardLateralDireitoHome";

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


          <div>
            <CardLateralDireitoHome/>
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
