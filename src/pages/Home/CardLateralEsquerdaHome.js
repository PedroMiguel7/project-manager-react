import React, { Component } from "react";
//import { Link } from "react-router-dom";
//import PropTypes from 'prop-types';
import api from '../../api';
//import Button from '@mui/material/Button';

class CardLateralEsquerdoHome extends Component {
    state = {
        projetosHomeLateralEsq: [],
        equipes : [],
    }
    async componentDidMount() {
        const response = await api.get('/projetos/');
        const response2 = await api.get('/equipes/');
        
        console.log(response.data);
        this.setState({ projetosHomeLateralEsq: response.data });
        this.setState({ equipesEsq: response2.data });
    }

    render() {
        const { projetosHomeLateralEsq } = this.state;
        const { equipesEsq } = this.state;

        return (
            <>
               

            </>
        )
    }
}


export default CardLateralEsquerdoHome;