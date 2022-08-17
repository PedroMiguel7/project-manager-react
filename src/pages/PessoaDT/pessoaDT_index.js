import React, { Component } from "react";
import { Link } from "react-router-dom";
import api from '../../api';
import aim from '../../assets/icons/aim.svg';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import NovaTarefa from '../../components/NovaTarefa';
import HeaderTarefas from '../../components/HeaderTarefas';
import LinearChart from "../../components/LinearChart";
import RendimentoSelect from "./RendimentoSelect";
import BackIcon from '../../assets/icons/back.svg';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import EditaPessoa from "./EditaPessoa";

const CssTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
      color: '#F4F5FA',
      svg: { color: '#F4F5FA' },
      '&.Mui-focused': {
        borderColor: '#F4F5FA',
        svg: { color: '#F57D3D' }
      },
      '& fieldset': {
        borderColor: '#F4F5FA',
        borderRadius: 5
      },
      '&:hover fieldset': {
        borderColor: '#C2C3C6',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#F46E27',
      },
      '& .MuiInputAdornment-root': {
        color: '#87888C',
      }
    },
    '.MuiInputLabel-outlined': {
      color: '#F4F5FA',
      '&.Mui-focused': {
        color: '#F46E27',
      },
    },
  })
  
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: '#21222D',
    borderRadius: 2,
    boxShadow: 24,
    p: 5,
    minWidth: '400px',
    width: '25vw'
  };

class PessoasDT extends Component {
  
    state = {
        pessoa: [],
        tarefas: [],
        equipes: [],
        rendimentoFilter: 1,
        openEdit: false,
        openAlert: false,
        openSnackbar: false,
    }
    async componentDidMount() {
        const pessoaPath = window.location.pathname;
        
        const response = await api.get(pessoaPath);
        const response2 = await api.get(pessoaPath+'/tasks');
        const response3 = await api.get('/equipes/');
        
        this.setState({ 
          pessoa: response.data, 
          tarefas: response2.data, 
          equipes: response3.data 
        });
    }



    handleCallbackRendimento = (childData) => {
        this.setState({rendimentoFilter: childData})
    }

    SelectRendimento = (props) => {
        return (
            <>
                <RendimentoSelect parentCallback = {this.handleCallbackRendimento} />
            </>
        )
    }

    /*Alerta = () => {
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
      }*/

    render() {
        const { pessoa } = this.state;
        const { tarefas} = this.state;
        const { equipes} = this.state;
        const { rendimentoFilter} = this.state;
        const { openEdit } = this.state;

        let TotalTarefas;
        if (tarefas === null) {
            TotalTarefas = 0;
        } else {
            TotalTarefas = tarefas.length;
        }
        
        let Concluidas = 0;
        for (var prop in tarefas) {
            if (tarefas[prop].status === "Concluido") {
                Concluidas++;
            }
        }

        const handleClickEdit = () => {
            this.setState({openEdit: true});
        };

        const handleCloseEdit = () => {
            this.setState({openEdit: false});
        };

        const handleChangeEquipe = () => {

        };

        const handleDelete = (id) => {
            //this.setState({tarefasId: id})
            this.setState({openAlert: true});
            this.setState({openEdit: false});
        }

        var path = window.location.pathname;
        /*function EditaPessoa() {
            const updateStatus = async () => {
              const response = await api.put(window.location.pathname, {
                descricao_task: nome,
                pessoa_id: parseInt(dadoEquipe),
                prioridade: parseInt(prioridade),
                projeto_id: projetoID
              },[])
              props.atualiza();
              handleCloseEdit();
            }
            updateStatus()
          }*/

        return (
            <>
                <div className='col-11 offset-1 col-lg-11 offset-lg-1 col-sm-12 offset-sm-1 ps-5 d-flex flex-wrap mt-5 gap-5'>
                    <div className="col-lg-3 col-md-12 col-sm-12 ProfilePessoa d-flex flex-column align-items-center p-4">
                        <div className="align-self-start">
                           <Link to={"/pessoas"} className="mb-2 me-1">
                                <img src={BackIcon} style={{width: 28}} />
                            </Link> 
                        </div>
                        
                        <div className="d-flex flex-column align-items-center">
                            <div className="AvatarBorder d-flex align-items-center justify-content-center">
                                <Avatar className="Avatar"sx={{width: 150, height: 150}} />
                                
                            </div>
                            <div className="AvatarTag">
                                {pessoa.funcao_pessoa}
                            </div>
                            
                            <div className="NomePessoa d-flex flex-wrap align-items-center justify-content-center">
                                <h1 className="text-center">{pessoa.nome_pessoa}</h1>
                                <EditaPessoa idPessoa={pessoa.id_pessoa} equipe_id={pessoa.equipe_id}/>
                            </div>
                            
                            <div>
                                <img src={aim} /> <span>{pessoa.nome_equipe}</span>
                            </div>
                            <div>
                                {/*<span>Projeto</span>*/}
                            </div>
                        </div>
                        <Divider light orientation="vertical" variant="middle" flexItem />
                        <div className="ResumoPessoa d-flex align-items-center justify-content-center flex-wrap gap-5">
                            <div className="d-flex flex-column text-center">
                                <h5>{TotalTarefas}</h5>
                                <p>Total de Tarefas</p>
                            </div>
                            <div className="d-flex flex-column text-center">
                                <h5>{Concluidas}</h5>
                                <p>Tarefas Concluídas</p>
                            </div>
                        </div>
                        {/*<CustomizedAccordion />*/}

                    </div>
                    
                    <div className="col-lg-8 col-md-12 col-sm-12">
                        <div className="row Teste h-lg-50 p-3">
                            <div className="col-12 d-flex align-items-center justify-content-between">
                                <h5 className='m-0'>Rendimento</h5>
                                <this.SelectRendimento />    
                            </div>
                            
                            <div className="ChartContainer" >
                              <LinearChart selectValue={rendimentoFilter} />  
                            </div>
                            
                        </div>
                        <div className="Teste row col-12 h-lg-50 p-3 mt-3">
                            
                            <HeaderTarefas />
                            
                            <div className="d-flex justify-content-end">
                                {/*<NovaTarefa />*/}
                            </div>
                        </div>
                    </div>
                 </div>
            </>
        )
    }
}

export default PessoasDT;