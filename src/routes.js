import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import SideBar from './components/SideBar/SideBar';
import Home from "./pages/Home/home";
import ProjetoIndex from ".//pages/Projetos/projeto_index";
import ProjetoDT from ".//pages/ProjetoDT/projetoDT_index";
import Equipes from ".//pages/Equipes/equipe_index"
import EquipeDT from ".//pages/EquipeDT/equipesDT_index"
import Pessoas from ".//pages/Pessoas/pessoa_index"
import PessoaDT from ".//pages/PessoaDT/pessoaDT_index"
import Signin from ".//pages/Login/signin";
import useAuth from "./pages/Login/hooks/useAuth"

const Private = ({Item}) =>{
    const { signed } = useAuth();
    return signed > 0 ? <Item /> : <Signin/>;
}

const Rout = () =>{
    return(
        <BrowserRouter>
            <SideBar />
            <Routes>
                <Route exect path="/" element={<Signin />}/>
                <Route exect path="/home" element={<Private Item={Home} />}/>
                <Route exect path="/projetos" element={<Private Item={ProjetoIndex} />}/>
                <Route exect path="/projetos/:id" element={<Private Item={ProjetoDT} />}/>

                <Route exect path="/equipes" element={<Private Item={Equipes} />}/>
                <Route exect path="/equipes/:id" element={<Private Item={EquipeDT} />}/>

                <Route exect path="/pessoas" element={<Private Item={Pessoas} />}/>
                <Route exect path="/pessoas/:id" element={<Private Item={PessoaDT} />}/>

            </Routes>
        </BrowserRouter>
    );
}

export default Rout;