import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import SwapHorizRoundedIcon from '@mui/icons-material/SwapHorizRounded';
import ExternalLink from '../../assets/icons/external-link.svg';
import Tooltip from '@mui/material/Tooltip';
import { useEffect, useState } from 'react';
import api from '../../services/api';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderTop: `1px solid #87888C`,
  borderBottom: `1px solid #87888C`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', color: '#fff' }} />}
    {...props}
  />
))(({ theme }) => ({
  color: "#fff",
  backgroundColor: '#21222D',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  backgroundColor: '#21222D',
  color: '#fff',
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions(props) {
  const [expanded, setExpanded] = React.useState();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const pessoaPath = window.location.pathname;

  const [pessoa, setPessoa] = useState([]);
  useEffect(() => {
    const fetchtask = async () => {
      try {
        const response = await api.get(pessoaPath);
        setPessoa(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchtask();
  }, []);



  return (
    <div className='w-100'>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <h6>Projetos</h6>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            {pessoa?.map(p => {
              <li className='d-flex align-items-center justify-content-between mb-3'>
                <p>{p.projeto_id}</p>
                <Stack spacing={1} direction="row">
                  <Tooltip title="Trocar projeto">
                    <IconButton>
                      <SwapHorizRoundedIcon sx={{color: '#494A58'}} />
                    </IconButton>
                  </Tooltip>
                  
                  <Tooltip title="Ir para página do projeto">
                    <IconButton>
                      <img src={ExternalLink} />
                    </IconButton>
                  </Tooltip>
                </Stack>
              </li>
            })}
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}