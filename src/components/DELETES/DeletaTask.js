export default function DeletaTask (props){
    fetch("https://golang-posgre-brisanet.herokuapp.com/tasks/"+props.id, {method: "DELETE"})
    .then(resposta => {
        if(resposta.ok){
            fetch("https://golang-posgre-brisanet.herokuapp.com/tasks/")
            .then(novareposta => novareposta.json())
            .then(dados =>{
                this.setState({tarefas: dados})
            })
        }
    })
}