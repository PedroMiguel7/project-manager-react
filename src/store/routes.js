import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Home from "../pages/Home/home";
import ProjetoIndex from "../pages/Projetos/projeto_index";
import ProjetoDT from "../pages/ProjetoDT/projetoDT_index";
import Equipes from "../pages/Equipes/equipe_index"
import EquipeDT from "../pages/EquipeDT/equipesDT_index"
import Pessoas from "../pages/Pessoas/pessoa_index"
import PessoaDT from "../pages/PessoaDT/pessoaDT_index"
import Signin from "../pages/Login/signin";
//import useAuth from "./pages/Login/hooks/useAuth"

import { useJwt } from "react-jwt";

const Private = ({ Item }) => {
    const token = localStorage.getItem('token');
    const { decodedToken, isExpired, reEvaluateToken } = useJwt(token);
    const userId = decodedToken?.sum
    const userName = decodedToken?.name
    const userType = decodedToken?.tipo

    //console.log(decodedToken)
    //console.log(userType)

    const updateToken = () => {
        const newToken = "A new JWT";
        reEvaluateToken(newToken); // decodedToken and isExpired will be updated
    }
    
    if (token !== null) {
        return <Item />
    } else {
        return <Signin />
    }
}

const Rout = (props) => {
    return (
        <BrowserRouter>
            <div className='GeneralContainer d-flex row'>
                {props.SideBar}
                <Routes>
                    <Route exect path="/" element={<Signin />} />
                    <Route exect path="/home" element={<Private Item={Home} />} />
                    <Route exect path="/projetos" element={<Private Item={ProjetoIndex} />} />
                    <Route exect path="/projetos/:id" element={<Private Item={ProjetoDT} />} />
                    <Route exect path="/equipes" element={<Private Item={Equipes} />} />
                    <Route exect path="/equipes/:id" element={<Private Item={EquipeDT} />} />
                    <Route exect path="/pessoas" element={<Private Item={Pessoas} />} />
                    <Route exect path="/pessoas/:id" element={<Private Item={PessoaDT} />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default Rout;