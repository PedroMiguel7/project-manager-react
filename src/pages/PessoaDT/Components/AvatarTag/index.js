import Avatar from '@mui/material/Avatar';

export default function AvatarTag(props) {
    function stringToHslColor(str, s, l) {
        var hash = 0;
        for (var i = 0; i < str.length; i++) {
          hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
      
        var h = hash % 360;
        return 'hsl('+h+', '+s+'%, '+l+'%)';
    }

    function stringAvatar(nome) {
        if (nome.indexOf(' ') >= 0) {
            return (
                `${nome.split(' ')[0][0]}${nome.split(' ')[1][0]}`
            )
        } else {
            return (
                `${nome.split(' ')[0][0]}`
            )
        }
    }

    if (props.funcao === "Front-End") {
        return (
            <>
                <div className="AvatarBorder d-flex align-items-center justify-content-center" style={{border: "2px solid #B9B8D3"}}>
                    <Avatar className="Avatar" sx={{width: 150, height: 150, bgcolor: `${stringToHslColor(props.nome, 50 ,70)}`, color: "#1E1F28", fontSize: "2.5rem"}}>
                        {stringAvatar(props.nome)}
                    </Avatar>
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
                    <Avatar className="Avatar" sx={{width: 150, height: 150, bgcolor: `${stringToHslColor(props.nome, 50 ,70)}`, color: "#1E1F28", fontSize: "2.5rem"}}>
                        {stringAvatar(props.nome)}
                    </Avatar>
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
                    <Avatar className="Avatar" sx={{width: 150, height: 150, bgcolor: `${stringToHslColor(props.nome, 50 ,70)}`, color: "#1E1F28", fontSize: "2.5rem"}}>
                        {stringAvatar(props.nome)}
                    </Avatar>
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
                    <Avatar className="Avatar" sx={{width: 150, height: 150, bgcolor: `${stringToHslColor(props.nome, 50 ,70)}`, color: "#1E1F28", fontSize: "2.5rem"}}>
                        {stringAvatar(props.nome)}
                    </Avatar>
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
                    <Avatar className="Avatar" sx={{width: 150, height: 150, bgcolor: `${stringToHslColor(props.nome, 50 ,70)}`, color: "#1E1F28", fontSize: "2.5rem"}}>
                        {stringAvatar(props.nome)}
                    </Avatar>
                </div>
                <div className="AvatarTag" style={{backgroundColor:'#8D99AE'}}>
                    <span>Sem Função</span>
                </div>
            </>
        )
    }
}