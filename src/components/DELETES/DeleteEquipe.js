export default function DeletaEquipe (props){
    fetch("https://golang-posgre-brisanet.herokuapp.com/equipes/"+props.id, {method: "DELETE"})
    .then(resposta => {
        if(resposta.ok){
            fetch("https://golang-posgre-brisanet.herokuapp.com/equipes/")
            .then(novareposta => novareposta.json())
            .then(dados =>{
                this.setState({equipes: dados})
            })
        }
    })
}