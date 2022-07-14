export default function DeletaProjeto (props){
    fetch("https://golang-posgre-brisanet.herokuapp.com/projetos/"+props.id_projeto, {method: "DELETE"})
    .then(resposta => {
        if(resposta.ok){
            fetch("https://golang-posgre-brisanet.herokuapp.com/projetos/")
            .then(novareposta => novareposta.json())
            .then(dados =>{
                this.setState({projetos: dados})
            })
        }
    })
}