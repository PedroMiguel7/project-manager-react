import Sidebar from "../../components/SideBar/SideBar";
//import Card from "../../components/Card";
import AdicionarProjeto from '../../components/NewProject/index'
import CardBaixoHome from "./CardBaixoHome";
import CardLateralDireitoHome from "./CardLateralDireitoHome";
import CardLateralEsquerdoHome from "./CardLateralEsquerdaHome";

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
            <AdicionarProjeto />
          </div>
        </div>
        <div
          className="d-flex justify-content-between flex-wrap"
          style={{ width: "100%" }}
        >
          <div className="CardlateralesquerdoHome col-9 col-md-12 mt-2 ms-3 ">
            <CardLateralEsquerdoHome/>
          </div>
          <div className="col-md-12 col-sm-12 mt-2 me-2">
            <CardLateralDireitoHome />
          </div>
        </div>
        <div className="mt-3">
          <CardBaixoHome />
        </div>
      </main>
    </div>
  );
}

export default Menu_index;
