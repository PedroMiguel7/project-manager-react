import { useDrag } from 'react-dnd';
import TarefasMenu from "../../components/TarefasMenu";



export default function MostrarTarefasCard(props) {
    var tarefas = props.tarefasPJ
    const [{ isDragging }, dragRef] = useDrag({
        type: 'CARD',
        item: { 'id': props.id_tasks, "status": props.status },
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    })
    return (
        tarefas.filter(tarefas => tarefas.status === `${props.status}`).map(f => (
            <div className="card mt-3" key={f.id_task}
                ref={dragRef} isDragging={isDragging}
                style={{
                    cursor: "grab",
                    width: "14rem",
                    backgroundColor: "var(--preto-medio)",
                    borderTop: "13px solid",
                    borderColor: f.prioridade === 0 ? "#49b675" : f.prioridade === 1 ? "#ffbf40" : f.prioridade === 2 ? "#ed5269" : "gray",
                    opacity: f.status === "Concluido" ? 0.6 : 1
                }}>
                <div className="card-body" style={{}}>
                    <div className="d-flex justify-content-between" style={{}}>
                        <h5 className="card-title" style={{ color: "" }}>{f.descricao_task}</h5>
                        <TarefasMenu id_task={f.id_task} equipe_id={props.equipe_id} />
                    </div>
                    <p className="card-text" style={{ color: "" }}>{f.nome_pessoa}</p>
                </div>
            </div>
        ))
    )
}