import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import useAuth from "./hooks/useAuth";
//import api from "../../services/api";
import axios from "axios";
import { AirplanemodeActive } from "@mui/icons-material";

const CssTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    color: "#F4F5FA",
    svg: { color: "#F4F5FA" },
    "&.Mui-focused": {
      borderColor: "#F4F5FA",
      svg: { color: "var(--corBotao)" },
    },
    "& fieldset": {
      borderColor: "#F4F5FA",
      borderRadius: 5,
    },
    "&:hover fieldset": {
      borderColor: "#C2C3C6",
    },
    "&.Mui-focused fieldset": {
      borderColor: "var(--corBotao)",
    },
  },
  ".MuiInputLabel-outlined": {
    color: "#F4F5FA",
    "&.Mui-focused": {
      color: "var(--corBotao)",
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
  document.title = "Gerenciador de Projetos";
  //const { signin } = useAuth();
  const navigate = useNavigate();

  const [Email, setEmail] = useState("");
  const [Senha, setSenha] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // const handleLogin = (e) =>{
  //   e.preventDefault()
  //   //if(!Email | !Senha){
  //   //    setError('Preencha todos os campos')
  //   //}

  //   const res = signin(Email, Senha);
  //   if(res){
  //     setError(res);
  //     return;
  //   }
  //   navigate("/home")
  // };


  const Logar = (e) => {
    e.preventDefault();
    axios
      .post("https://golang-posgre-brisanet.herokuapp.com/login", {
        email: Email,
        password: Senha,
      })
      .then((res) => {
        //localStorage.setItem('end', navigator.geolocation.getCurrentPosition(true))
        const fetchProjetos = async () => { 
          try {
            localStorage.setItem("token", JSON.stringify(res.data.token))
          } catch (error) {
            console.log(error);
          }
          window.location.href = "/home";
        };
        fetchProjetos();
      })
      .catch((err) => alert(err));
  };

  return (
    <Box sx={style}>
      <div className="d-flex align-items-center justify-content-between mb-4">
        <div className="OcuparEspaco"></div>
        <div className="ClearRoundedIcon order-2" />
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          className="text-center order-1"
        >
          LOG<span style={{ color: "var(--corBotao)" }}>IN</span>
        </Typography>
      </div>

      <form>
        <CssTextField
          required
          id="email"
          name="email"
          label="Email"
          value={Email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
          variant="outlined"
          margin="dense"
          fullWidth
          className="textField"
          type="text"
        />
        <CssTextField
          required
          id="senha"
          name="senha"
          label="Senha"
          value={Senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
          variant="outlined"
          margin="dense"
          fullWidth
          className="textField"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <div className="d-flex justify-content-end mt-5">
          <Button
            style={{
              color: "#F4F5FA",
              background: "var(--corBotao)",
              textTransform: "capitalize",
              boxShadow: "none",
            }}
            id='button'
            variant="contained"
            type="submit"
            onClick={(e) => Logar(e)}
          >
            LOGIN
          </Button>
        </div>
      </form>
    </Box>
  );
}
