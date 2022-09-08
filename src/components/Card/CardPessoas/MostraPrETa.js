import { useEffect, useState } from "react";
import api from "../../../services/api";


export default function MostraProjetosOuTarefas(props){
    const [projetos, setProjetos] = useState([]);
    useEffect(() => {
        const fetchProjetos = async () => {
            try {
                const response = await api.get('/equipes/'+props.equipe_id+'/projetos');
                setProjetos(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchProjetos();
    }, []);

    const [tarefas, setTarefas] = useState([]);
        useEffect(() => {
            const fetchTarefas = async () => {
                try {
                    const response = await api.get('/pessoas/'+props.id_pessoa+'/tasks');
                    setTarefas(response.data);
                } catch (error) {
                    console.log(error);
                }
            };
            fetchTarefas();
        }, []);

    if(props.PRouTA === 1) {
    
        if(projetos !== null){
            var qtdP = projetos.length
            return(
                qtdP
            )
        } else{
            return(
                0
            )
        }
    } else {
        if(tarefas !== null){
            var qtd = tarefas.length
            return(
                qtd
            )
        } else{
            return(
                0
            )
        }
    }


}