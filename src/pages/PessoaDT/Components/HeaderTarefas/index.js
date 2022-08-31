import * as React from "react";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TarefasFazer from "../TabelaTarefas/TarefasFazer";
import TarefasAndamento from "../TabelaTarefas/TarefasAndamento";
import TarefasTeste from "../TabelaTarefas/TarefasTeste";
import TarefasConcluidas from "../TabelaTarefas/TarefasConcluidas";
import ContadorTarefas from "../ContadorTarefas";
import useMediaQuery from '@mui/material/useMediaQuery';
import { HeaderContainer, Header, Title, TableContainer, Table } from "./style";
import { set } from "react-hook-form";

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
      {value === index && <Box>{children}</Box>}
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
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "&":{
    border: "1px solid red"
  },
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: "70%",
    width: "100%",
    backgroundColor: "#F46E27",
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    fontFamily: "Inter, sans-serif",
    textTransform: "none",
    fontWeight: 400,
    fontSize: 14,
    color: "#87888C",
    "&.Mui-selected": {
      color: "#C2C3C6",
      fontWeight: 500,
    },
    "&.Mui-focusVisible": {
      backgroundColor: "rgba(100, 95, 228, 0.32)",
    },
  })
);

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <HeaderContainer>
        <Header>
          <Title>Tarefas</Title>
          <StyledTabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs"
            //centered={matches}
            //variant="scrollable"
            //variant={scrollable}
            scrollButtons
            allowScrollButtonsMobile
          >
            <StyledTab
              className="StyledTab"
              label="A Fazer"
              {...a11yProps(0)}
            />
            <StyledTab
              className="StyledTab"
              label="Em Andamento"
              {...a11yProps(1)}
            />
            <StyledTab
              className="StyledTab"
              label="Em Teste"
              {...a11yProps(2)}
            />
            <StyledTab
              className="StyledTab"
              label="Concluídas"
              {...a11yProps(3)}
            />
          </StyledTabs>
        </Header>
        <ContadorTarefas />
      </HeaderContainer>

      <TabPanel value={value} index={0}>
        <TarefasFazer index={0} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TarefasAndamento index={1} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TarefasTeste index={2} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <TarefasConcluidas index={3} />
      </TabPanel>
    </>
  );
}
