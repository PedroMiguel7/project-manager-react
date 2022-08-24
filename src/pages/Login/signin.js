import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import {useNavigate} from "react-router-dom";
import useAuth from "./hooks/useAuth"

const CssTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    color: "#F4F5FA",
    svg: { color: "#F4F5FA" },
    "&.Mui-focused": {
      borderColor: "#F4F5FA",
      svg: { color: "#F57D3D" },
    },
    "& fieldset": {
      borderColor: "#F4F5FA",
      borderRadius: 5,
    },
    "&:hover fieldset": {
      borderColor: "#C2C3C6",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#F46E27",
    },
  },
  ".MuiInputLabel-outlined": {
    color: "#F4F5FA",
    "&.Mui-focused": {
      color: "#F46E27",
    },
  },
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#21222D",
  borderRadius: 2,
  boxShadow: 24,
  p: 5,
  minWidth: "400px",
  width: "25vw",
};

export default function Signin() {
    const { signin }  = useAuth();
    const navigate = useNavigate();

  const [ Email, setEmail ] = useState("");
  const [ Senha, setSenha ] = useState("");
  const [ error, setError ] = useState("");

  const handleLogin = (e) =>{
    e.preventDefault()
    //if(!Email | !Senha){
    //    setError('Preencha todos os campos')
    //}
    
    const res = signin(Email, Senha);
    if(res){
      setError(res);
      return;
    }
    navigate("/home")
  };

  return (
    <Box sx={style}>
      <div className="d-flex align-items-center justify-content-between mb-4">
        <div className="OcuparEspaco"></div>
        <ClearRoundedIcon
          className="ClearRoundedIcon order-2"
        />
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          className="text-center order-1"
        >
          Loga ai<span style={{ color: "#F46E27" }}> bb</span>
        </Typography>
      </div>

      <form onSubmit={handleLogin}>
        <CssTextField
          required
          //size="small"
          id="nome"
          name="nome"
          label="Email Andress"
          value={Email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
          variant="outlined"
          margin="dense"
          fullWidth
          className="textField"
          type='text'
        />
        <CssTextField
          required
          //size="small"
          id="nome"
          name="nome"
          label="Password"
          value={Senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
          variant="outlined"
          margin="dense"
          fullWidth
          className="textField"
          type="password"
        />
        <div className='d-flex justify-content-end mt-5'>
        <Button
          style={{
            color: "#F4F5FA",
            background: "#F46E27",
            textTransform: "capitalize",
            boxShadow: "none",
          }}
          variant="contained"
          type="submit"
          onClick={(e) => handleLogin(e)}
        >
          LOGIN
        </Button>
        </div>
      </form>
    </Box>
  );
}
