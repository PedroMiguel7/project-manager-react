import * as React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import api from '../../api'
import { useEffect, useState} from "react";

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component="div" color="palette.primary.light">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};

export default function CircularStatic(props) {

  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const fetchTask = async () => {
      const response = await api.get('/projetos/' + props.id_projeto + '/tasks')
      setTasks(response.data)
    }
    fetchTask()
  }, [setTasks]);

  var QtdTasksConcluidas = 0
  var BarrinhaProgresso = 0
  if ((tasks != null)) {
    let QtdTasks = tasks.length
    const tasksConcluidas = tasks.filter((tasks) => tasks.status === "Concluido")
    if ((tasksConcluidas != null)) {
      QtdTasksConcluidas = tasksConcluidas.length
    }
    BarrinhaProgresso = (QtdTasksConcluidas * 100) / QtdTasks
  }

  return <CircularProgressWithLabel value={BarrinhaProgresso} />;
}
