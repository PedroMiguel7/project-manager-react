import { Link } from "react-router-dom";
import aim from '../../assets/icons/aim.svg'
import profile from '../../assets/icons/Profile.svg'

function Card({linkUrl, titulo, descricao, equipe, progresso}) {
    return (
      <>
        <Link to={linkUrl} className="Link text-reset text-decoration-none col-lg-3 col-md-12 Card p-4">
            <div className="card-part1 mb-3">
                <h2 class="fs-4">{titulo}</h2>
                <p className="description overflow-hidden">{descricao}</p>
                <div className="mb-3">
                  <img src={aim} alt=""/> <span>{equipe}</span>
                </div>
              </div>
              <div className="card-part2 d-flex justify-content-between">
                <div className="card-members">
                  <h6>Membros</h6>
                  <div className='d-flex gap-1'>
                    <img src={profile} alt=""/>
                    <img src={profile} alt=""/>
                  </div>
                </div>
                <div className="card-progress">
                  <h6>Progresso</h6>
                  {progresso}
                </div>
            </div>
        </Link>
      </>
    )
}

export default Card