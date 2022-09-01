import * as React from 'react';
import { Component } from "react";
import api from '../../../../api';
import Tooltip from '@mui/material/Tooltip';
import { ContadorContainer, ContadorTarefas, Progress, ProgressBar } from './style';

class TarefasConcluidas extends Component {
    state = {
        tarefas: [],
      }
      async componentDidMount() {
          const pessoaPath = window.location.pathname;
          const response = await api.get(pessoaPath+'/tasks');
          this.setState({ tarefas: response.data });
      }


    render() {
        const { tarefas } = this.state;

        let TotalTarefas;
        if (tarefas === null) {
            TotalTarefas = 0;
        } else {
            TotalTarefas = tarefas.length;
        }
        
        let Concluidas = 0;
        for (var prop in tarefas) {
            if (tarefas[prop].status === "Concluido" || tarefas[prop].status === "Concluído") {
                Concluidas++;
            }
        }

        const progressValue = Math.round((Concluidas/TotalTarefas) * 100);

        return(
            <>
                <Tooltip title={(progressValue !== NaN) ? `${progressValue}%` : "0%" } arrow>
                    <ContadorContainer>
                        <ContadorTarefas>
                            {Concluidas}/{TotalTarefas} completas
                        </ContadorTarefas>
                        <Progress className="progress">
                            <ProgressBar className="progress-bar" 
                            style={{width: `${progressValue}%`}}
                            role="progressbar" aria-valuenow="" aria-valuemin="0" aria-valuemax="100"></ProgressBar>
                        </Progress>
                    </ContadorContainer>
                </Tooltip>
            </>
        )
    }
}

export default TarefasConcluidas;