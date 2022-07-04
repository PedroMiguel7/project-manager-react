import React, { Component } from "react";
import Rout from "./routes";
import api from './api';

class App extends Component{

    state = {
        equipes: [],
    }
    async componentDidMount(){
        const response = await api.get('https://golang-posgre-brisanet.herokuapp.com/equipes/');
        console.log(response.data);
        
        this.setState({equipes: response.data});
    }

    render(){
        return(
            <div>
                <Rout />
            </div>
        );
    }
}

export default App;