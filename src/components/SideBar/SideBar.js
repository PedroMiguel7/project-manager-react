import { Link,useLocation } from "react-router-dom";
import logo from '../../assets/logo.svg';
import home from '../../assets/icons/home.svg';
import homeActive from '../../assets/icons/home-active.svg';
import project from '../../assets/icons/project.svg';
import projectActive from '../../assets/icons/project-active.svg';
import team from '../../assets/icons/team.svg';
import teamActive from '../../assets/icons/team-active.svg';
import person from '../../assets/icons/person.svg';
import personActive from '../../assets/icons/person-active.svg';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
//import { Button } from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import TemporaryDrawer from "./Drawer";
import Fixed from "./Fixed";

function SideBar() {
    const navigate = useNavigate();
    const signout = (e) =>{
        e.preventDefault()
        localStorage.removeItem('token', null)
    }
    
    let path = window.location.pathname;
    let pathId = path.substring(path.lastIndexOf('/') + 1);
    const location = useLocation();
    if(path === '/' | localStorage.getItem("token") === null){
        return;
    }
    
    return(
        <>
            <Fixed op="fixed" />
            <TemporaryDrawer />
        </>
    );
}

export default SideBar;