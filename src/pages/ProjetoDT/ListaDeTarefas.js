import { useDrop } from 'react-dnd';
import api from '../../api';
import MostrarTarefasCard from './cardTarefas';
import BasicModalTarefa from "../Tarefas/NewTarefa/AddTarefa";

export default function MostrarLIstaTarefas(props) {
    const [, dropRef] = useDrop({
        accept: 'CARD',
        hover(item) {
            if ((item.status !== props.status) && (props.statusPROJETO !== 'Concluido')) {
                item.status = props.status
                const updateStatus = async () => {
                    const response = await api.put(`/tasks/` + item.id + '/status', {
                        status: props.status,
                    })
                    props.atualiza()
                }
                updateStatus()
            }
        }
    })

    if ((props.status === "A Fazer") && (props.statusṔrojeto !== 'Concluido')) {
        return (
            <>
                <div className='d-flex text-center mt-2 justify-content-center'>
                    <h4 className="text-center">{props.status}</h4>
                    <div className='ms-2'>
                        <BasicModalTarefa ProjetoStatus={props.statusṔrojeto} id_projeto={props.id_projeto} equipe_id={props.equipe_id} atualiza={props.atualiza} />
                    </div>
                </div>
                <div ref={dropRef} className="scrollar d-flex flex-column align-items-center" style={{ height: "745px" }}>
                    {
                        props.tarefas.map(p => (
                            <MostrarTarefasCard atualiza={props.atualiza} status={props.status} key={p.id_task} equipe_id={props.equipe_id} prioridade={p.prioridade} id_task={p.id_task} descricao_task={p.descricao_task} nome_pessoa={p.nome_pessoa} />
                        ))
                    }
                </div>
            </>
        )
    }
    else{
        return (
            <>
                <h4 className="text-center mt-2">{props.status}</h4>
                <div ref={dropRef} className="scrollar d-flex flex-column align-items-center" style={{ height: "745px" }}>
                    {
                        props.tarefas.map(p => (
                            <MostrarTarefasCard status={props.status} key={p.id_task} equipe_id={props.equipe_id} prioridade={p.prioridade} id_task={p.id_task} descricao_task={p.descricao_task} nome_pessoa={p.nome_pessoa} />
                        ))
                    }
                </div>
            </>
        )
    }

}