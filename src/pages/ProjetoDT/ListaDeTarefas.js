import { useDrop } from 'react-dnd';
import api from '../../api';
import MostrarTarefasCard from './cardTarefas';

export default function MostrarLIstaTarefas(props){
    const [, dropRef] = useDrop({
        accept: 'CARD',
        hover(item) {
            if (item.status !== props.status) {
                item.status = props.status

                const updateStatus = async () => {
                    const response = await api.put(`/tasks/` + props.id_task, {
                        status: item.status,
                    })
                    console.log(response.data)
                    //props.func()
                }
                updateStatus()
            }
        }
    })
    return (
        <div className="col-9 d-flex justify-content-between">
            <div className="col-2 TPtrello">
                <h4 className="text-center mt-2">A fazer</h4>
                <div ref={dropRef} className="scrollar d-flex flex-column align-items-center" style={{ height: "745px" }}>
                    <MostrarTarefasCard tarefasPJ={props.tarefasPJ} status={'A Fazer'} equipe_id={props.equipe_id} />
                </div>
            </div>
            <div className="col-2 TPtrello">
                <h4 className="text-center mt-2">Em Andamento</h4>
                <div ref={dropRef} className="scrollar d-flex flex-column align-items-center" style={{ height: "745px" }}>
                    <MostrarTarefasCard tarefasPJ={props.tarefasPJ} status={'Em Andamento'} equipe_id={props.equipe_id} />
                </div>
            </div>
            <div className="col-2 TPtrello">
                <h4 className="text-center mt-2">Em Teste</h4>
                <div ref={dropRef} className="scrollar d-flex flex-column align-items-center" style={{ height: "745px" }}>
                    <MostrarTarefasCard tarefasPJ={props.tarefasPJ} status={'Em Teste'} equipe_id={props.equipe_id} />
                </div>
            </div>
            <div className="col-2 TPtrello">
                <h4 className="text-center mt-2">Concluida</h4>
                <div ref={dropRef} className="scrollar d-flex flex-column align-items-center" style={{ height: "745px" }}>
                    <MostrarTarefasCard tarefasPJ={props.tarefasPJ} status={'Concluido'} equipe_id={props.equipe_id} />
                </div>
            </div>
        </div>
    )
}