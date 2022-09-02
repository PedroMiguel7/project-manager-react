import PropTypes from 'prop-types';
import BackIcon from '../../assets/icons/back.svg';
import { Container, PreviousPage, PreviousPageIcon, Title, Name, Status } from "./style";

function HeaderDt({ link, pagina, titulo, status, FUNC1, FUNC2 }) {
    function setTag(sts) {
        switch (sts) {
            case "Em Andamento":
                return '#28aef3b3';
                break;
            case "Concluido":
                return '#28f33cb3';
                break;
            case "Cancelado":
                return '#898989b3';
                break;
        }
    }

    return (
        <>
            <Container>
                <PreviousPage to={link}>
                    <PreviousPageIcon src={BackIcon} />
                </PreviousPage>
                <Title>{pagina}
                    <Name> {titulo}</Name>
                </Title>
                <Status color={setTag(status)}>
                    {status}
                </Status>
                {/* <div>
                    {FUNC1}
                    {FUNC2}
                </div> */}
            </Container>
        </>

    )
}

HeaderDt.protoTypes = {
    pagina: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    status: PropTypes.string,
}

// HeaderDt.defaultProps = {
//     pagina: "Página",
//     titulo: "Título"
// }

export default HeaderDt