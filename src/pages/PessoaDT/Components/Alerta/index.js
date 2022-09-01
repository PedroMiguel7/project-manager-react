import React from "react";
import { styled } from '@mui/material/styles';
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";
import Slide from '@mui/material/Slide';

export default function Alerta(props) {
  const [openSnackbar, setOpenSnackbar] = React.useState(true);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={2500}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        TransitionComponent={(props) => {
                return <Slide {...props} direction="down" />;
            } 
        }
      >
        <Alert
          onClose={handleClose}
          severity="success"
          color="success"
          elevation={6}
          variant="filled"
          sx={{ minWidth: "20vw", backgroundColor: "#388e3c !important"}}
        >
          {`O status da tarefa foi modificado para ${props.tipoAlerta}!`}
        </Alert>
      </Snackbar>
    </>
  );
}
