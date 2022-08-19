import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

export default function Alerta(props) {
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpenSnackbar(false);
        setTimeout(() => {window.location.pathname = "/pessoas"}, 500)
      };
  
    const handleCheck = (id) => {
    console.log(id);

    this.setState({tarefasId: id})
    this.setState({openAlert: true});
    }

    const handleCloseAlert = () => {
    this.setState({openAlert: false});
    }

    const [openSnackbar, setOpenSnackbar] = React.useState(false);

    const handleClickSim = (id) => {
    //Deleta(id);
    setOpenSnackbar(true);
    this.setState({openAlert: false});
    };

    function Edita(props) {
    const updateStatus = async () => {
        const response = await api.put('/pessoas/' + props.id_pessoa, {
        equipe_id: props.equipe_id,
        funcao_pessoa: props.funcao,
        id_pessoa: props.id_pessoa,
        nome_pessoa: props.nome
        },[])
        props.atualiza();
        //handleCloseEdit();
    }
    updateStatus()
    }
    
    function Deleta(props){
    api.delete('/pessoas/'+ props.id_pessoa);
    handleCloseAlert();
    props.atualiza();
    }

    return(
    <>
        <Dialog
        open={this.state.openAlert}
        //key={t.id_task}
        onClose={handleCloseAlert}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
            style: {
                backgroundColor: '#494A58',
                color: '#fff'
            },
            }}
        >
            <DialogTitle id="alert-dialog-title">
                <WarningIcon />
                {"Tem certeza que deseja excluir essa pessoa?"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description" sx={{ color: '#C2C3C6' }}>
                Essa ação é permanente.
                </DialogContentText>
            </DialogContent>
            
            <DialogActions>
                <Button onClick={handleCloseAlert}
                sx={{
                    color: "#C2C3C6",
                    opacity: 0.7
                }}>Cancelar</Button>
                <Button autoFocus onClick={() => {handleClickSim();}} variant="contained"
                sx={{
                    color: "#FFF",
                    backgroundColor: "#F66E6E",
                    '&:hover': {
                    backgroundColor: "#ED5F5F",
                    }
                }}>
                Deletar
                </Button>
            </DialogActions>
            
        </Dialog>
        <Snackbar open={openSnackbar} autoHideDuration={2000} onClose={handleClose} anchorOrigin={{vertical: 'top', horizontal: 'center',}}>
            <MuiAlert onClose={handleClose} severity="success" elevation={6} variant="filled" sx={{ minWidth: '20vw' }}>
            Pessoa deletada com sucesso!
            </MuiAlert>
        </Snackbar>
    </>
    )
}