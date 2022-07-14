export default function DeletaPessoa (props){
    fetch("https://golang-posgre-brisanet.herokuapp.com/pessoas/"+props.id, {method: "DELETE"})
    .then(resposta => {
        if(resposta.ok){
            fetch("https://golang-posgre-brisanet.herokuapp.com/pessoas/")
            .then(novareposta => novareposta.json())
            .then(dados =>{
                this.setState({pessoas: dados})
            })
        }
    })
}