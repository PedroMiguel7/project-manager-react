import { Component } from "react";
import { Link } from "react-router-dom";
//import aim from '../../assets/icons/aim.svg'
//import profile from '../../assets/icons/Profile.svg'
import api from '../../../api';
//import OneEquipes from "./OneEquipe";

class CardEquipes extends Component {
  state = {
    equipes: [],
  }
  async componentDidMount() {
    const response = await api.get('/equipes/');

    this.setState({ equipes: response.data });
  }

  render() {
    const { equipes } = this.state;

    return (
      <>
        <Link to={'/equipes/:id'} className="Link text-reset text-decoration-none col-lg-3 col-md-12 Card p-4" >
          <div key={equipes.id_equipe}>
            <div className="card-part1 mb-3">
              <h2 class="fs-4" >
                {equipes.nome_equipe}
              </h2>
            </div>
            <div className="card-part2 d-flex justify-content-between">
              <div className="card-members">
                <h6>Membros</h6>
                <ul className=''>
                  <li>{ }</li>
                </ul>
              </div>
              <div className="card-progress">
                <h6>Total: { }</h6>
              </div>
            </div>
          </div>
        </Link>
      </>

    );
  }
}

export default CardEquipes