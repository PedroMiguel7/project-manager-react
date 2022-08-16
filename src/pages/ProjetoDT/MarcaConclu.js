<IconButton onClick={() => {handleCheck(t.id_task);}}>
    {icon}
</IconButton>

const handleCheck = (id) => {
    console.log(id);
    this.setState({tarefasId: id})
    this.setState({openAlert: true})
  }

Alerta = () => {
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpenSnackbar(false);
    };

    /*const handleCheck = (id) => {
      console.log(id);

      this.setState({tarefasId: id})
      this.setState({openAlert: true});
    }*/

    const handleCloseAlert = () => {
      this.setState({openAlert: false});
    }

    const [openSnackbar, setOpenSnackbar] = React.useState(false);

    const handleClickSim = (id) => {
      //EditaTask(id);
      setOpenSnackbar(true);
      this.setState({openAlert: false});
      console.log(this.state.tarefasId);
    };

    function EditaTask(id) {
      api.put('/tasks/' + id, {
        status: "Concluido",
        data_conclusao: new Date(),
      })
      console.log('/tasks/' + id);
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
              {"Marcar tarefa como concluída?"}
              </DialogTitle>
              
              <DialogActions>
              <Button onClick={handleCloseAlert}
              sx={{
                  color: "#C2C3C6",
                  opacity: 0.7
              }}>Não</Button>
              <Button autoFocus onClick={() => {handleClickSim(this.state.tarefasId);}} variant="contained"
              sx={{
                  color: "#FFF",
                  backgroundColor: "#F57D3D",
                  '&:hover': {
                      backgroundColor: "#F46E27",
                  }
              }}>
                  Sim
              </Button>
              </DialogActions>
          </Dialog>
          <Snackbar open={openSnackbar} autoHideDuration={2500} onClose={handleClose} anchorOrigin={{vertical: 'top', horizontal: 'center',}}>
            <MuiAlert onClose={handleClose} severity="success" elevation={6} variant="filled" sx={{ minWidth: '20vw' }}>
              Tarefa concluída!
            </MuiAlert>
        </Snackbar>
      </>
    )
  }
