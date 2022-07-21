import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TabelaTarefas from '../TabelaTarefas';

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
    textTransform: 'none',
    fontWeight: 400,
    fontSize: 15,
    marginRight: theme.spacing(1),
    color: '#87888C',
    '&.Mui-selected': {
      color: '#C2C3C6',
    },
    '&.Mui-focusVisible': {
      backgroundColor: 'rgba(100, 95, 228, 0.32)',
    },
  }),
);

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h5>Tarefas</h5>
        <StyledTabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
            <StyledTab label="Em Andamento" {...a11yProps(0)} />
            <StyledTab label="Concluídas" {...a11yProps(1)} />
            <StyledTab label="Canceladas" {...a11yProps(2)} />
        </StyledTabs>
      <div>
          <span>4/5 Completas</span>
          <div class="progress Progress" >
              <div class="ProgressBar progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
      </div>
    </div>
        
      <TabPanel value={value} index={0}>
        <TabelaTarefas index={0} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className='TabelaTarefas table-responsive'>
          <table className="table align-middle text-center ">
            <tbody>
              <tr>
                <th scope="col"></th>
                <th scope="col">Nome</th>
                <th scope="col">Prioridade</th>
                <th scope="col">Início</th>
                <th scope="col">Conclusão</th>
                <th scope="col"></th>
              </tr>
            </tbody>
          </table>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className='TabelaTarefas table-responsive'>
            <table className="table align-middle text-center ">
              <tbody>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Nome</th>
                  <th scope="col">Início</th>
                  <th scope="col"></th>
                </tr>
              </tbody>
            </table>
        </div>
      </TabPanel>
    </>
    
  );
}
