import Search from '../Search';
import Divider from '@mui/material/Divider';

function Header({titulo}) {

    return (
        <>
            <div className='row mt-5 pb-3 main-header'>
                <h1 className="Titulo col-lg-3 fs-2">{titulo}</h1>
                <Search />
            </div>
            <Divider />
        </>
    )
}

export default Header