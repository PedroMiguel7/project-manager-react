import React, { useEffect, useState } from "react";
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import Modal from '@mui/material/Modal';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import MenuItem from '@mui/material/MenuItem';
import api from "../../../../services/api";
import { AddContainer, AddTitle, ModalHeader, OcuparEspaco, HeaderTitle, HighlightedTitle, ButtonsContainer, CancelButton, SaveButton } from "./style";
import { Textfield, style } from "../../../../styles/muiStyles";


export default function AddMembro() {
    const [openAdd, setOpenAdd] = React.useState(false);
    const [pessoas, setPessoas] = useState([]);

    const handleClickAdd = () => {
        setOpenAdd(true);
    };

    const handleCloseAdd = () => {
        setOpenAdd(false);
        //setOpenAlert(false);
        //setAnchorEl(null);
    };

    // useEffect(() => {
    //     const fetchPessoas = async () => {
    //         try {
    //             const response = await api.get("/pessoas/");
    //             setPessoas(response.data);
    //         } catch(err) {
    //             console.log(err);
    //         }
    //     };
    //     fetchPessoas();
    // }, []);
    // console.log(pessoas);

    return (
        <>
            <AddContainer onClick={handleClickAdd}>
                <AddCircleOutlineRoundedIcon sx={{ color: '#87888C' }} />
                <AddTitle>Adicionar um novo membro</AddTitle>
            </AddContainer>

            <Modal
                open={openAdd}
                onClose={handleCloseAdd}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <ModalHeader>
                        <OcuparEspaco></OcuparEspaco>
                        <ClearRoundedIcon className='ClearRoundedIcon order-2' onClick={handleCloseAdd} />
                        <HeaderTitle>
                            Adicionar<HighlightedTitle> Membro</HighlightedTitle>
                        </HeaderTitle>
                    </ModalHeader>

                    <form /*onSubmit={EditaTask}*/>
                        <Box sx={{ minWidth: 120 }}>
                            <Textfield
                                select
                                label="Pessoa"
                                fullWidth
                                margin="dense"
                                //value={dadoEquipe}
                                //={handleChangeAge}
                                SelectProps={{
                                    MenuProps: {
                                        PaperProps: {
                                            style: {
                                                maxHeight: '23vh',
                                                backgroundColor: '#494A58',
                                                color: '#fff',
                                            }
                                        }
                                    }
                                }}
                            >
                                <MenuItem value={1} key={1}>Fulano</MenuItem>
                                <MenuItem value={2} key={2}>Fulana</MenuItem>
                                <MenuItem value={3} key={3}>Fulanin</MenuItem>
                            </Textfield>
                        </Box>

                        <Divider light className='mt-3' />
                        <ButtonsContainer>
                            <CancelButton
                                variant="text" className='' onClick={handleCloseAdd}>
                                    Cancelar
                            </CancelButton>
                            <SaveButton
                                variant="contained" type="submit" /*onClick={EditaTask}*/>
                                    Salvar
                            </SaveButton>
                        </ButtonsContainer>
                    </form>
                </Box>
            </Modal>
        </>
    )
}