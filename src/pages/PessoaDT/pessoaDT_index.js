/*import HeaderDt from "../../components/HeaderDt"
import Divider from '@mui/material/Divider';
import CircularProgressWithLabel from '../../components/CircularProgressWithLabel'
import Table from "../../components/Table";
*/
import Header from "../../components/Header"
import HeaderPessoas from "../../components/HeaderPessoas";
import profile from '../../assets/icons/Profile.svg'
import Avatar from '@mui/material/Avatar';

const pessoaDT_index = () => {
    return(
        <>
            <main className='col-11 offset-1 col-lg-11 offset-lg-1 px-5'>
            <div className="row offset-lg-2">
                <h6>Front-End</h6>
                <h1>Fulana de Tal</h1> 
            </div>
            <div className="row">
                 
                <div className="CardDT InfoProjeto row py-4">
                    <Avatar className="ProfilePessoa col-lg-2" sx={{ width: 250, height: 250 }}>A</Avatar>
                </div>
            </div>
            </main>
        </>
    );
}

export default pessoaDT_index;