import Header from "../../components/Header"
import Card from "../../components/Card"
import NewProject from '../../assets/icons/new.svg'
import filter from '../../assets/icons/filter.svg'
import BasicModal from '../../components/NewProject'
import FilterMenu from "../../components/FilterMenu"

function ProjetoIndex() {
    return (
        <>
            <main className='col-11 offset-1 col-lg-11 offset-lg-1 px-5'>
                <Header titulo="Projetos" />

                <div className="Options row d-flex flex-wrap my-lg-4 my-3">
                    <div className="LeftOptions col mt-sm-2">
                        <span className="me-2">Show:</span>
                        <input type="" name="txt-show" id="txt-show" size="1" />
                    </div>
                    <div className="RightOptions d-flex justify-content-end align-items-center flex-wrap gap-3 col-lg-2 offset-lg-8 offset-md-8 mt-sm-2 mt-2">
                        <BasicModal />

                        <select className="ps-1" name="order-select" id="order-select">
                            <option value="crescente">A - Z</option>
                            <option value="decrescente">Z - A</option>
                        </select>

                        <button className="filter px-2 py-1">
                            <span>Filter</span> <img src={filter} alt="" />
                        </button>
                    </div>
                </div>

                <div className="row CardsContainer my-4">
                    <Card linkUrl={"../projeto/:id"} titulo="API Rest" descricao="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." equipe="Komanda" progresso="70%" />

                    <Card linkUrl={"../projeto/:id"} titulo="Projeto 2" descricao="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." equipe="Devs Cariri" progresso="63%"/>

                    <Card linkUrl={"../projeto/:id"} titulo="Projeto 3" descricao="LIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." equipe="Komanda" progresso="48%" />

                    <Card linkUrl={"../projeto/:id"} titulo="Projeto 4" descricao="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English." equipe="Cariri Inovação" progresso="46%" />

                    <Card linkUrl={"../projeto/:id"} titulo="Projeto 5" descricao="Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy." equipe="Cariri Inovação" progresso="21%" />

                    <Card linkUrl={"../projeto/:id"} titulo="Projeto X" descricao="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text." equipe="Komanda" progresso="5%" />
                </div>

            </main>
        </>
    )
}

export default ProjetoIndex