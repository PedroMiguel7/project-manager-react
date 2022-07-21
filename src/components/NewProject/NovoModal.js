import * as React from 'react';

import { useForm } from 'react-hook-form';
import NewProject from '../../assets/icons/new.svg';
import './Novomodal.css'


export default function PostProjeto() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const { register, handleSubmit, FormState: { erros } } = useForm()
    return (
        <div>
            <button onClick={handleOpen} className="new-project "><img src={NewProject} alt="" /></button>
            <form>
                <div className='fields'>
                    <label> Nome</label>
                    <input type="text"/>
                </div>

                <div className='fields'>
                    <label> Descrição</label>
                    <input type="text"/>
                </div>

                <div className='fields'>
                    <label> Equipe</label>
                    <input type="text"/>
                </div>

                <div className='btn-post'>
                    <button type='submit'> Cadastrar </button>

                </div>

            </form>

        </div>
    )

}
