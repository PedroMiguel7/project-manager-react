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
            {if (t.status === "Concluido")
            Concluidas++;
            console.log(Concluidas);
            return Concluidas;
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

        const TotalTarefas = tarefas.length;
        console.log(TotalTarefas);


        return(
            <>
                <div>
                    <span>{this.ContConcluidas} /{TotalTarefas} Completas</span>
                    <div className="progress Progress" >
                        <div className="ProgressBar progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </>
        )
    }
}

export default TarefasConcluidas;