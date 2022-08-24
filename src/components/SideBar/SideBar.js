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
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom"

function SideBar() {
    const navigate = useNavigate();
    const signout = (e) =>{
        e.preventDefault()
        localStorage.setItem('token', null)
    }
    
    let path = window.location.pathname;
    let pathId = path.substring(path.lastIndexOf('/') + 1);
    const location = useLocation();
    if(path === '/' | localStorage.getItem("token") === null){
        return;
    }
    return(
        <div>
            <header className="col-1 col-lg-1 d-flex flex-column justify-content-around align-items-center">
                <img className="logo" src={logo} alt=""/>
                <ul className="nav flex-column gap-5 align-items-center">
                    <li className="nav-item">
                    <Link to="/home" >
                        {location.pathname === "/home"
                        ? <img src={homeActive} alt=""/>
                        : <img src={home} alt=""/>
                        }
                    </Link>               
                    </li>
                    <li className="nav-item">
                    <Link to="/projetos" >
                        {location.pathname === "/projetos" || location.pathname === `/projetos/${pathId}`
                        ? <img src={projectActive} alt=""/>
                        : <img src={project} alt=""/>
                        }
                    </Link>  
                    </li>
                    <li className="nav-item">
                    <Link to="/equipes">
                        {location.pathname === "/equipes" || location.pathname === `/equipes/${pathId}`
                        ? <img src={teamActive} alt=""/>
                        : <img src={team} alt=""/>
                        }
                    </Link>  
                    </li>
                    <li className="nav-item">
                    <Link to="/pessoas">
                        {location.pathname === "/pessoas" || location.pathname === `/pessoas/${pathId}`
                        ? <img src={personActive} alt=""/>
                        : <img src={person} alt=""/>
                        }
                    </Link>  
                    </li>
                    

                </ul>
                <ul className="nav flex-column gap-5 align-items-center">
                    <li className="nav-item">
                        <LogoutRoundedIcon sx={{color: "#87888C"}} onClick={(e) => [signout(e), navigate('/')]}>
                            logout
                        </LogoutRoundedIcon>
                    </li>
                </ul>
            </header>
        </div>
    );
}

export default SideBar;