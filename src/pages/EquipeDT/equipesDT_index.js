import HeaderDt from "../../components/HeaderDt"
import Divider from '@mui/material/Divider';
import CircularProgressWithLabel from '../../components/CircularProgressWithLabel'
import Table from "../../components/Table";

const equipeDT_index = () => {
    return(
        <>
            <main className='col-11 offset-1 col-lg-11 offset-lg-1 px-5'>
            <div>
                <HeaderDt titulo="Equipe" nomeProjeto="Komanda"/>
            </div>
            </main>
        </>
    );
}

export default equipeDT_index;