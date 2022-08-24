import React from "react"
import { useNavigate } from "react-router-dom"
import useAuth from "./hooks/useAuth"
import Button from "@mui/material/Button";

export default function Logout (){
    const { signout } = useAuth();
    const navigate = useNavigate();

    return(
        <Button Text="sair" onClick={() => [signout(), navigate('/')]}>
            Sair
        </Button>   
    )
}