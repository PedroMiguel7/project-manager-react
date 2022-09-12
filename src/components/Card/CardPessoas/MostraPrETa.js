import { useEffect, useState } from "react";
import api from "../../../services/api";

export default function MostraProjetosOuTarefas(props){
    const [projetos, setProjetos] = useState([]);
    const [tarefas, setTarefas] = useState([]);
    
    useEffect(() => {
        const fetchProjetos = async () => {
            try {
                if (props.equipe_id) {
                    const response = await api.get('/equipes/'+props.equipe_id+'/projetos');
                    setProjetos(response.data);
                } 
                if(props.id_pessoa){
                    const response = await api.get('/pessoas/'+props.id_pessoa+'/tasks');
                    setTarefas(response.data);
                }
            } catch (error) { console.log(error); }
        };
        fetchProjetos();
    }, []);

    if(props.PRouTA === 1 && projetos !== null) return projetos.length
    else if (tarefas !== null && props.PRouTA !== 1) return tarefas.length
    else return 0
}