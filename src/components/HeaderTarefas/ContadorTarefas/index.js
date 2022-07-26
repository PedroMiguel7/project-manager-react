import * as React from 'react';
import { Component } from "react";
import api from '../../../api';
import Tooltip from '@mui/material/Tooltip';

class TarefasConcluidas extends Component {
    state = {
        tarefas: [],
      }
      async componentDidMount() {
          const pessoaPath = window.location.pathname;
          console.log(pessoaPath);
          
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
            if (tarefas[prop].status === "Concluido") {
                Concluidas++;
            }
        }

        const progressValue = Math.round((Concluidas/TotalTarefas) * 100);

        return(
            <>
                <Tooltip title={(progressValue !== NaN) ? `${progressValue}%` : "0%" } arrow>
                    <div>
                        <span>{Concluidas}/{TotalTarefas} Completas</span>
                        
                        <div className="progress Progress" >
                            <div className="ProgressBar progress-bar" 
                            style={{width: `${progressValue}%`}}
                            role="progressbar" aria-valuenow="" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        
                    </div>
                </Tooltip>
            </>
        )
    }
}

export default TarefasConcluidas;