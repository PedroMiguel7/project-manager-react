import React, { Component } from "react";
//import { Link } from "react-router-dom";
//import PropTypes from 'prop-types';
//import api from '../../api';
import Cards from "../../components/Card/CardProjetos/ExibirProjetos";
//import Button from '@mui/material/Button';

class CardLateralEsquerdoHome extends Component {
    render() {
        return (
            <div className="row CardsContainer my-4 mt-4 d-flex">
                <Cards />
            </div>

        )
    }
}


export default CardLateralEsquerdoHome;