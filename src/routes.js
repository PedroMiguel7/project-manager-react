import { BrowserRouter, Route, Routes, } from 'react-router-dom';

import SideBar from './components/SideBar/SideBar';
import Home from "./pages/Home/home";
import ProjetoIndex from ".//pages/Projetos/projeto_index";
import ProjetoDT from ".//pages/ProjetoDT/projetoDT_index";
import Equipes from ".//pages/Equipes/equipe_index"
import EquipeDT from ".//pages/EquipeDT/equipesDT_index"
import Pessoas from ".//pages/Pessoas/pessoa_index"
import PessoaDT from ".//pages/PessoaDT/pessoaDT_index"
import Tarefas from ".//pages/Tarefas/tarefa_index"
import TarefaDT from ".//pages/TarefaDT/tarefaDT_index"


const Rout = () =>{
    return(
        <BrowserRouter>
            <SideBar />
            <Routes>
                <Route exect path="/" element={<Home />}/>
                <Route exect path="/projetos" element={<ProjetoIndex />}/>
                <Route exect path="/projetos/:id" element={<ProjetoDT />}/>

                <Route exect path="/equipes" element={<Equipes />}/>
                <Route exect path="/equipes/:id" element={<EquipeDT />}/>

                <Route exect path="/pessoas" element={<Pessoas />}/>
                <Route exect path="/pessoas/:id" element={<PessoaDT />}/>

                <Route exect path="/tarefas" element={<Tarefas />}/>
                <Route exect path="/tarefas/:id" element={<TarefaDT />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Rout;