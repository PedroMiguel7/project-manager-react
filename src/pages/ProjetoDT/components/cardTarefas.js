import { useDrag } from 'react-dnd';
import TarefasMenu from "../../../components/TarefasMenu";

export default function MostrarTarefasCard(props) {
    const [{ isDragging }, dragRef] = useDrag({
        type: 'CARD',
        item: { 'id': props.id_task, "status": props.status },
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    })
    if (props.statusPROJETO !== 'Concluido') {
        return (
            <div className="card mt-3"
                ref={dragRef} isDragging={isDragging}
                style={{
                    cursor: "grab",
                    width: "14rem",
                    backgroundColor: "var(--preto-medio)",
                    borderTop: "13px solid",
                    borderColor: props.prioridade === 0 ? "#49b675" : props.prioridade === 1 ? "#ffbf40" : props.prioridade === 2 ? "#ed5269" : "gray",
                    opacity: props.status === "Concluido" ? 0.6 : 1
                }}>
                <div className="card-body" style={{}}>
                    <div className="d-flex justify-content-between" style={{}}>
                        <h5 className="card-title" style={{ color: "" }}>{props.descricao_task}</h5>
                        <TarefasMenu atualiza={props.atualiza} id_task={props.id_task} equipe_id={props.equipe_id} />
                    </div>
                    <p className="card-text" style={{ color: "" }}>{props.nome_pessoa}</p>
                </div>
            </div>
        )
    } else {
        return (
            <div className="card mt-3"
                ref={dragRef} isDragging={isDragging}
                style={{
                    cursor: "grab",
                    width: "14rem",
                    backgroundColor: "var(--preto-medio)",
                    borderTop: "13px solid",
                    borderColor: props.prioridade === 0 ? "#49b675" : props.prioridade === 1 ? "#ffbf40" : props.prioridade === 2 ? "#ed5269" : "gray",
                    opacity: props.status === "Concluido" ? 0.6 : 1
                }}>
                <div className="card-body" style={{}}>
                    <div className="d-flex justify-content-between" style={{}}>
                        <h5 className="card-title" style={{ color: "" }}>{props.descricao_task}</h5>
                        <div></div>
                    </div>
                    <p className="card-text" style={{ color: "" }}>{props.nome_pessoa}</p>
                </div>
            </div>
        )

    }


}