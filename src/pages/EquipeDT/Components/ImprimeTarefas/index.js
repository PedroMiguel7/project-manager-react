import React from "react";
import { EmptyStateContainer, TarefasLi, StatusTarefa, NomeTarefa, PrazoTarefa, SpinnerBox, Spinner, LoadingMessage } from "./style";
import TasksNotFound from '../../../../assets/empty-states/tasks-not-found.svg';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import DataLoading from "../../../../components/DataLoading";

export default function ImprimeTarefas(props) {
    const tarefas = props.equipe.tasks;
    if (!tarefas) {
        return (
            <DataLoading />
        )
    } else if (tarefas === null) {
        return (
            <>
                <EmptyStateContainer>
                    <img src={TasksNotFound} />
                    <h5>
                        Essa equipe não possui tarefas.
                    </h5>
                </EmptyStateContainer>
            </>
        );
    } else {
        function TempoRestante(prazo) {
            const dataHojeFormatada = new Date();

            const dataPrazoFormatada = new Date(prazo);

            if ((dataPrazoFormatada - dataHojeFormatada) <= 86400000 && (dataPrazoFormatada - dataHojeFormatada) > 0) {
                return '1 dia';
            } else if (dataPrazoFormatada < dataHojeFormatada) {
                return 'Atraso'
            } else {
                const tempo = (dataPrazoFormatada - dataHojeFormatada) / 86400000;
                return `${tempo.toFixed()} dias`;
            }
        }

        if (props.status === 1) {
            const ToDo = tarefas?.filter((tarefas) => tarefas.status === "A Fazer");

            if (ToDo.length === 0) {
                return (
                    <TarefasLi>
                        <span>
                            Sem Tarefas A Fazer
                        </span>
                    </TarefasLi>
                )
            } else {
                return (
                    ToDo.map(t => (
                        <TarefasLi>
                            <StatusTarefa>
                                {t.status}
                            </StatusTarefa>
                            <NomeTarefa>
                                {t.descricao_task}
                            </NomeTarefa>
                            <PrazoTarefa>
                                <AccessTimeIcon sx={{ fontSize: '1rem', marginRight: '0.2rem' }} />
                                {TempoRestante(t.prazo_entrega)}
                            </PrazoTarefa>
                        </TarefasLi>
                    ))
                )
            }
        } else if (props.status === 2) {
            const OnGoing = tarefas?.filter((tarefas) => tarefas.status === "Em Andamento");

            if (OnGoing.length === 0) {
                return (
                    <TarefasLi>
                        <span>
                            Sem Tarefas Em Andamento
                        </span>
                    </TarefasLi>
                )
            } else {
                return (
                    OnGoing?.map(t => (
                        <TarefasLi>
                            <StatusTarefa>
                                {t.status}
                            </StatusTarefa>
                            <NomeTarefa>
                                {t.descricao_task}
                            </NomeTarefa>
                            <PrazoTarefa>
                                <AccessTimeIcon sx={{ fontSize: '1rem', marginRight: '0.2rem' }} />
                                {TempoRestante(t.prazo_entrega)}
                            </PrazoTarefa>
                        </TarefasLi>
                    ))
                )
            }
        } else if (props.status === 3) {
            const Testing = tarefas?.filter((tarefas) => tarefas.status === "Em Teste");

            if (Testing.length === 0) {
                return (
                    <TarefasLi>
                        <span>
                            Sem Tarefas Em Teste
                        </span>
                    </TarefasLi>
                )
            } else {
                return (
                    Testing?.map(t => (
                        <TarefasLi>
                            <StatusTarefa>
                                {t.status}
                            </StatusTarefa>
                            <NomeTarefa>
                                {t.descricao_task}
                            </NomeTarefa>
                            <PrazoTarefa>
                                <AccessTimeIcon sx={{ fontSize: '1rem', marginRight: '0.2rem' }} />
                                {TempoRestante(t.prazo_entrega)}
                            </PrazoTarefa>
                        </TarefasLi>
                    ))
                )
            }
        } else if (props.status === 4) {
            const Done = tarefas?.filter((tarefas) => tarefas.status === "Concluido");

            function FormatarData(data) {
                let Data = new Date(data);
                return Data.toLocaleDateString("pt-BR");
            }

            if (Done.length === 0) {
                return (
                    <TarefasLi>
                        <span>
                            Sem Tarefas Concluidas
                        </span>
                    </TarefasLi>
                )
            } else {
                return (
                    Done?.map(t => (
                        <TarefasLi>
                            <StatusTarefa>
                                {t.status}
                            </StatusTarefa>
                            <NomeTarefa>
                                {t.descricao_task}
                            </NomeTarefa>
                            <PrazoTarefa>
                                <CheckCircleRoundedIcon sx={{ fontSize: '1rem', marginRight: '0.2rem' }} />
                                {FormatarData(t.data_conclusao)}
                            </PrazoTarefa>
                        </TarefasLi>
                    ))
                )
            }
        } else {
            return (
                tarefas?.map(t => (
                    <TarefasLi>
                        <StatusTarefa>
                            {t.status}
                        </StatusTarefa>
                        <NomeTarefa>
                            {t.descricao_task}
                        </NomeTarefa>
                        <PrazoTarefa>
                            <AccessTimeIcon sx={{ fontSize: '1rem', marginRight: '0.2rem' }} />
                            {TempoRestante(t.prazo_entrega)}
                        </PrazoTarefa>
                    </TarefasLi>
                ))
            );
        }
    }
}