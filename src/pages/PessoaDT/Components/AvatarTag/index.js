import Avatar from '@mui/material/Avatar';

export default function AvatarTag(props) {
    if (props.funcao === "Front-End") {
        return (
            <>
                <div className="AvatarBorder d-flex align-items-center justify-content-center" style={{border: "2px solid #B9B8D3"}}>
                    <Avatar className="Avatar"sx={{width: 150, height: 150}} />
                </div>
                <div className="AvatarTag" style={{backgroundColor:'#B9B8D3'}}>
                    <span>Front-End</span>
                </div>
            </>
        )
    } else if (props.funcao === "Back-End") {
        return (
            <>  
                <div className="AvatarBorder d-flex align-items-center justify-content-center" style={{border: "2px solid #E56B70"}}>
                    <Avatar className="Avatar"sx={{width: 150, height: 150}} />
                </div>
                <div className="AvatarTag" style={{backgroundColor:'#E56B70'}}>
                    <span>Back-End</span>
                </div>              
            </>
        )
    } else if (props.funcao === "Gerente de Projeto") {
        return (
            <>
                <div className="AvatarBorder d-flex align-items-center justify-content-center" style={{border: "2px solid #F4FDD9"}}>
                    <Avatar className="Avatar"sx={{width: 150, height: 150}} />
                </div>
                <div className="AvatarTag" style={{backgroundColor:'#F4FDD9'}}>
                    <span>Gerente de Projeto</span>
                </div>
            </>
        )
    }else if (props.funcao === "Tester") {
        return (
            <>
                <div className="AvatarBorder d-flex align-items-center justify-content-center" style={{border: "2px solid #A9DFD8"}}>
                    <Avatar className="Avatar"sx={{width: 150, height: 150}} />
                </div>
                <div className="AvatarTag" style={{backgroundColor:'#A9DFD8'}}>
                    <span>Tester</span>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className="AvatarBorder d-flex align-items-center justify-content-center" style={{border: "2px solid #8D99AE"}}>
                    <Avatar className="Avatar"sx={{width: 150, height: 150}} />
                </div>
                <div className="AvatarTag" style={{backgroundColor:'#8D99AE'}}>
                    <span>Sem Função</span>
                </div>
            </>
        )
    }
}