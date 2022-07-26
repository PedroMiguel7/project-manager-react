import * as React from 'react';
import { Component } from "react";
import api from '../../../api';

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


    ContConcluidas = (props) => {
        const qtdTarefas = props.tarefas;
        const TotalTarefas = qtdTarefas.length;

        /*if( qtdTarefas === null) {
            qtdTarefas = 0;
        } else {*/
        const Concluidas = 0;
            
        props.tarefas.map(t => 
            {if (t.status === "Concluido") {
            Concluidas++;
            console.log(Concluidas);
            return Concluidas;
            }
            }    
        )
            
        
    }

    /*ProgressoTarefas = (props) => {
        const qtdTarefas = props.tarefas;
        const TotalTarefas = qtdTarefas.lenght;
        console.log(TotalTarefas);

        if( qtdTarefas === null || qtdTarefas === 0){
            return 0;
        } else {
            
        }

        props.tarefas.map( t => (
            {if (t.status === "Concluido") {

            }}
        ));

        
    }*/

    render(props) {
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
        
        const TotalConcluidas = Concluidas;

        const progressValue = Math.round((TotalConcluidas/TotalTarefas) * 100);

        return(
            <>
                <div>
                    <span>{TotalConcluidas}/{TotalTarefas} Completas</span>
                    <div className="progress Progress" >
                        <div className="ProgressBar progress-bar" 
                        style={{width: `${progressValue}%`}}
                        role="progressbar" aria-valuenow="" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </>
        )
    }
}

export default TarefasConcluidas;