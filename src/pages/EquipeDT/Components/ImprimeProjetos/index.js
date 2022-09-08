import React from "react";
import { EmptyStateContainer, ProjetosLi, NomeProjeto, Prazo, Container, ProgressContainer, LinkProjeto, SpinnerBox, Spinner, LoadingMessage } from "./style";
import ProjectNotFound from "../../../../assets/empty-states/project-not-found.svg";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ProgressoProjetos from "../ProgressoProjetos";
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

export default function ImprimeProjetos(props) {
    if (!props.projetos) {
        return (
            <SpinnerBox>
                <Spinner size={50} thickness={1} />
                <LoadingMessage>Carregando os dados...</LoadingMessage>
            </SpinnerBox>
        )
    } else if (props.projetos === null) {
        return (
            <>
                <EmptyStateContainer>
                    <img src={ProjectNotFound} />
                    <h5>
                        Essa equipe ainda não possui projetos.
                    </h5>
                </EmptyStateContainer>
            </>
        );
    } else {
        function TempoRestante(prazo) {
            const dataHojeFormatada = new Date();

            const dataPrazoFormatada = new Date(prazo);

            if ((dataPrazoFormatada - dataHojeFormatada) <= 86400000 && (dataPrazoFormatada - dataHojeFormatada) > 0) {
                return '1 dia restante';
            } else if (dataPrazoFormatada < dataHojeFormatada) {
                return 'Atrasado'
            } else {
                const tempo = (dataPrazoFormatada - dataHojeFormatada) / 86400000;
                return `${tempo.toFixed()} dias restantes`;
            }
        }

        if (props.status === 1) {
            const ToDo = props.projetos?.filter((projetos) => projetos.status === "A Fazer");

            if (ToDo.length === 0) {
                return (
                    <EmptyStateContainer>
                        <img src={ProjectNotFound} />
                        <h5>
                            Sem projetos a fazer.
                        </h5>
                    </EmptyStateContainer>
                )
            } else {
                return (
                    ToDo?.map(p => (
                        <ProjetosLi>
                            <Container>
                                <NomeProjeto>{p.nome_projeto}</NomeProjeto>
                                <Prazo>
                                    <AccessTimeIcon sx={{ fontSize: '1rem', marginRight: '0.2rem' }} />
                                    {TempoRestante(p.prazo_entrega)}
                                </Prazo>
                            </Container>
                            <ProgressContainer>
                                <ProgressoProjetos key={1} id_projeto={p.id_projeto} status={p.status} />
                                <LinkProjeto href={`/projetos/${p.id_projeto}`} target="_blank">
                                    <ArrowForwardRoundedIcon />
                                </LinkProjeto>
                            </ProgressContainer>
                        </ProjetosLi>
                    ))
                )
            }

        } else if (props.status === 2) {
            const OnGoing = props.projetos?.filter((projetos) => projetos.status === "Em Andamento");

            if (OnGoing.length === 0) {
                return (
                    <EmptyStateContainer>
                        <img src={ProjectNotFound} />
                        <h5>
                            Sem projetos em andamento.
                        </h5>
                    </EmptyStateContainer>
                )
            } else {
                return (
                    OnGoing?.map(p => (
                        <ProjetosLi>
                            <Container>
                                <NomeProjeto>{p.nome_projeto}</NomeProjeto>
                                <Prazo>
                                    <AccessTimeIcon sx={{ fontSize: '1rem', marginRight: '0.2rem' }} />
                                    {TempoRestante(p.prazo_entrega)}
                                </Prazo>
                            </Container>
                            <ProgressContainer>
                                <ProgressoProjetos key={2} id_projeto={p.id_projeto} status={p.status} />
                                <LinkProjeto href={`/projetos/${p.id_projeto}`} target="_blank">
                                    <ArrowForwardRoundedIcon />
                                </LinkProjeto>
                            </ProgressContainer>
                        </ProjetosLi>
                    ))
                )
            }
        } else if (props.status === 3) {
            const Done = props.projetos?.filter((projetos) => projetos.status === "Concluido" || projetos.status === "Concluído");

            if (Done.length === 0) {
                return (
                    <EmptyStateContainer>
                        <img src={ProjectNotFound} />
                        <h5>
                            Sem projetos concluidos.
                        </h5>
                    </EmptyStateContainer>
                )
            } else {
                function FormatarData(data) {
                    let Data = new Date(data);
                    return Data.toLocaleDateString("pt-BR");
                }

                return (
                    Done?.map(p => (
                        <ProjetosLi>
                            <Container>
                                <NomeProjeto>{p.nome_projeto}</NomeProjeto>
                                <Prazo>
                                    <CheckCircleRoundedIcon sx={{ fontSize: '1rem', marginRight: '0.2rem' }} />
                                    {FormatarData(p.data_conclusao)}
                                </Prazo>
                            </Container>
                            <ProgressContainer>
                                <ProgressoProjetos key={3} id_projeto={p.id_projeto} status={p.status} />
                                <LinkProjeto href={`/projetos/${p.id_projeto}`} target="_blank">
                                    <ArrowForwardRoundedIcon />
                                </LinkProjeto>
                            </ProgressContainer>
                        </ProjetosLi>
                    ))
                )
            }
        } else {
            function DataConclusão(data) {
                let Data = new Date(data);
                return (
                    <>
                        <CheckCircleRoundedIcon sx={{ fontSize: '1rem', marginRight: '0.2rem' }} />
                        {Data.toLocaleDateString("pt-BR")}
                    </>
                )
            }

            function NaoConcluidos(prazo) {
                return (
                    <>
                        <AccessTimeIcon sx={{ fontSize: '1rem', marginRight: '0.2rem' }} />
                        {TempoRestante(prazo)}
                    </>
                )
            }

            return (
                props.projetos?.map(p => (
                    <ProjetosLi>
                        <Container>
                            <NomeProjeto>{p.nome_projeto}</NomeProjeto>
                            <Prazo>
                                {p.status === "Concluido" ? DataConclusão(p.data_conclusao) : NaoConcluidos(p.prazo_entrega)}
                            </Prazo>
                        </Container>
                        <ProgressContainer>
                            <ProgressoProjetos key={0} id_projeto={p.id_projeto} status={p.status} />
                            <LinkProjeto href={`/projetos/${p.id_projeto}`} target="_blank">
                                <ArrowForwardRoundedIcon />
                            </LinkProjeto>
                        </ProgressContainer>
                    </ProjetosLi>
                ))
            );
        }
    }
}