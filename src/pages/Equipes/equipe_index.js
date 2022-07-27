import Header from "../../components/Header"
import filter from '../../assets/icons/filter.svg'
//import BasicModal from '../../components/NewProject'
import ExibirEquipes from "../../components/CardEquipe/OneEquipe"
import BasicModalEquipe from "./NewEquipe"

function Equipes() {
    return (
        <>
            <main className='col-11 offset-1 px-5'>
                <Header titulo="Equipes"/>
                <div className="Options row d-flex flex-wrap my-lg-3 my-3">
                    <div className="LeftOptions col mt-sm-2">
                        <span className="me-2">Show:</span>
                        <input type="" name="txt-show" id="txt-show" size="1" />
                    </div>
                    <div className="RightOptions d-flex justify-content-end align-items-center flex-wrap gap-3 col-lg-4 offset-lg-6 col-md-9 mt-sm-2 mt-2">
                        <BasicModalEquipe />

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
                    <ExibirEquipes/>
                </div>
                
            </main>
        </>
    )
}

export default Equipes