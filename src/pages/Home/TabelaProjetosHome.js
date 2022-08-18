import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import BarraProgresso from "../../components/Card/CardProjetos/BarraDeProgresso";
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box >
            {children}
          </Box>
        )}
      </div>
    );
  }
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
  const StyledTabs = styled((props) => (
    <Tabs
      {...props}
      TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
  ))({
    '& .MuiTabs-indicator': {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
      maxWidth: '70%',
      width: '100%',
      backgroundColor: '#F46E27',
    },
  });
  
  const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
      fontFamily: 'Inter, sans-serif',
      textTransform: 'none',
      fontWeight: 400,
      fontSize: 14,
      marginRight: theme.spacing(1),
      color: '#87888C',
      '&.Mui-selected': {
        color: '#C2C3C6',
        fontWeight: 500,
      },
      '&.Mui-focusVisible': {
        backgroundColor: 'rgba(100, 95, 228, 0.32)',
      },
    }),
  );

export default function CardBaixoHome(props) {
    /*function DeletaProjeto(id_projeto) {
        api.delete("/projetos/" + id_projeto, { method: "DELETE" })
            .then(resposta => {
                if (resposta.ok) {
                    api.get("/projetos/")
                        .then(novareposta => novareposta.json())
                        .then(dados => {
                            this.setState({ projetosHome: dados })
                        })
                }
            })
    }*/
    var PROJETOS = props.Projetos

    const [order, setOrder] = useState(1)
    const [columnorder, setColumnorder] = useState('nome_projeto')


    if (PROJETOS !== null) {
        const handleOrder = (fieldName) => {
            setOrder(-order)
            setColumnorder(fieldName)
        }
        PROJETOS = PROJETOS.sort((a, b) => {
            return a[columnorder] > b[columnorder] ? -order : order;
        })

        return (
            <>
                <div className="d-flex justify-content-between align-items-center">
                    <div className='d-flex align-items-center gap-5'>
                        <h5 className='m-0'>Projetos</h5>
                        {/*<StyledTabs className="mx-4" value={value} onChange={handleChange} aria-label="basic tabs" centered>
                                <StyledTab className="StyledTab" label="Em Andamento" {...a11yProps(0)} />
                                <StyledTab className="StyledTab" label="Concluídas" {...a11yProps(1)} />
                            </StyledTabs>
                        */}
                    </div>

                    {/*<ContadorTarefas />*/}
                </div>

                <div className="TabelaTarefas table-responsive">
                    <table className="table align-middle text-center " style={{ color: 'white' }}>
                        <thead style={{ position: "sticky" }}>
                            <tr>
                                {/*<th scope="col" onClick={e => handleOrder('id_projeto')} style={{ width: '10%', marginBottom: '40px' }}>#</th>*/}
                                <th scope="col" onClick={e => handleOrder('nome_projeto')} style={{ width: '20%' }}>Titulo</th>
                                <th scope="col" style={{ width: '40%' }}>Progresso</th>
                                <th scope="col" style={{ width: '20%' }}>Status</th>
                                <th scope="col" style={{ width: '5%' }}></th>
                                {/*<th scope="col" style={{ width: '5%' }}></th>*/}
                            </tr>
                        </thead>
                        <tbody className="">
                            {PROJETOS.map(p => (
                                <tr key={p.id_projeto}>
                                    {/*<th scope="row">{p.id_projeto}</th>*/}
                                    <td className="">{p.nome_projeto}</td>
                                    <td>
                                        <BarraProgresso id_projeto={p.id_projeto} />
                                    </td>
                                    <td>{p.status}</td>
                                    <td className="d-flex"><Link to={'/projetos/' + p.id_projeto} className="text-reset text-decoration-none"><Button className=" md-4" style={{
                                        color: "#F4F5FA",
                                        background: "#F46E27"
                                    }}
                                        variant="contained" >DETALHAR</Button></Link>
                                    </td>
                                    {/*<td><Button  style={{color: "#F4F5FA", background: "red"}} variant="danger" onClick={() => this.DeletaProjeto(p.id_projeto)}>EXCLUIR</Button></td>*/}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </>
        )

    } else {
        return (
            <>
                <div className="CardBaixoHome pt-1 ps-2 pe-2 scroll fixTableHead" style={{overflowY:'auto'}}>
                    <div className="LeftOptions col-lg-2 mt-sm-2">
                        <h5 className="me-2 ms-4 mt-3">Projetos</h5>
                    </div>
                    <table className="table " style={{ color: 'white' }}>
                        <thead style={{ position: "sticky" }}>
                            <tr className="LeftOptions">
                                <th scope="col" style={{ width: '10%', marginBottom: '40px' }}>#</th>
                                <th scope="col" style={{ width: '20%' }}>Titulo</th>
                                <th scope="col" style={{ width: '40%' }}>Progresso</th>
                                <th scope="col" style={{ width: '20%' }}>Status</th>
                                <th scope="col" style={{ width: '5%' }}></th>
                                {/*<th scope="col" style={{ width: '5%' }}></th>*/}
                            </tr>
                        </thead>
                        <tbody className="">
                            <tr>
                                <th scope="row"></th>
                                <td className=""></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}