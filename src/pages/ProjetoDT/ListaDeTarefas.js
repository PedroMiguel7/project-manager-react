import { useDrop } from 'react-dnd';
import api from '../../api';
import MostrarTarefasCard from './cardTarefas';

export default function MostrarLIstaTarefas(props) {
    const [, dropRef] = useDrop({
        accept: 'CARD',
        hover(item) {
            if (item.status !== props.status) {
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
    return (
        <>
            <h4 className="text-center mt-2">{props.status}</h4>
            <div ref={dropRef} className="scrollar d-flex flex-column align-items-center" style={{ height: "745px" }}>
                {
                    props.tarefas.map(p =>(
                        <MostrarTarefasCard  status={props.status} key={p.id_task} equipe_id={props.equipe_id} prioridade={p.prioridade} id_task={p.id_task} descricao_task={p.descricao_task} nome_pessoa={p.nome_pessoa}/>
                    ))
                }
            </div>
        </>
    )
}