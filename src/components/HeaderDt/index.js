import PropTypes from 'prop-types';
import {useState, useEffect} from 'react';

function HeaderDt({pagina, titulo, status}) {
    const [statusBg, mudarStatus] = useState(0);
    
    useEffect(() => {
        const statusBg = window.document.getElementsByClassName('Status');

        if (status === "Em andamento" || "Em Andamento") {
            statusBg[0].style.background = '#28aef3b3';
        } 
        if (status === "Concluído" || "Concluido") {
            statusBg[0].style.background = '#28f33cb3';
        } if (status === "Cancelado") {
            statusBg[0].style.background = '#898989b3'
        }
    })

    return (
        <>
            <div className='row mt-5 pb-3 main-header'>
                <div className="d-flex align-items-center col-lg-4">
                    <h1 className="TituloDt fs-2">{pagina} <span className="nomeProjeto">{titulo}</span></h1>
                    <div className="Status ms-4 mb-2 px-2" onLoad={() => mudarStatus(statusBg)}>{status}</div>
                </div>
                <input className="col-lg-3 offset-lg-5" type="search" name="main-search" id="main-search" placeholder="Search here..."/>
            </div>
        </>
    
    )
}

HeaderDt.protoTypes = {
    pagina: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    status: PropTypes.string,
}

HeaderDt.defaultProps = {
    pagina: "Página",
    titulo: "Título"
}

export default HeaderDt