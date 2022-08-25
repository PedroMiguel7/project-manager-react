import * as React from 'react';
import { Link, useLocation } from "react-router-dom";
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
import { useNavigate } from "react-router-dom";
import { FixedNavContainer, TemporaryNavContainer, Logo, Nav, NavItem } from './style';

const drawerWidth = 240;

function Fixed(props) {
  const navigate = useNavigate();
  const signout = (e) => {
    e.preventDefault()
    localStorage.setItem('token', null)
  }

  let path = window.location.pathname;
  let pathId = path.substring(path.lastIndexOf('/') + 1);
  const location = useLocation();
  if (path === '/' | localStorage.getItem("token") === null) {
    return;
  }

  console.log(window.matchMedia)
  if (props.op === "fixed") {
    return (
      <FixedNavContainer className="col-1 col-lg-1"
      >
        <Logo src={logo} alt="" />
        <Nav>
          <NavItem>
            <Link to="/home" >
              {location.pathname === "/home"
                ? <img src={homeActive} alt="" />
                : <img src={home} alt="" />
              }
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/projetos" >
              {location.pathname === "/projetos" || location.pathname === `/projetos/${pathId}`
                ? <img src={projectActive} alt="" />
                : <img src={project} alt="" />
              }
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/equipes">
              {location.pathname === "/equipes" || location.pathname === `/equipes/${pathId}`
                ? <img src={teamActive} alt="" />
                : <img src={team} alt="" />
              }
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/pessoas">
              {location.pathname === "/pessoas" || location.pathname === `/pessoas/${pathId}`
                ? <img src={personActive} alt="" />
                : <img src={person} alt="" />
              }
            </Link>
          </NavItem>
  
  
        </Nav>
        <Nav>
          <NavItem>
            <LogoutRoundedIcon sx={{ color: "#87888C" }} onClick={(e) => [signout(e), navigate('/')]}>
              logout
            </LogoutRoundedIcon>
          </NavItem>
        </Nav>
      </FixedNavContainer>
    );
  } 
  else {
    return (
      <TemporaryNavContainer>
        <Logo src={logo} alt="" />
        <Nav className="nav flex-column gap-5 align-items-center">
          <NavItem>
            <Link to="/home" >
              {location.pathname === "/home"
                ? <img src={homeActive} alt="" />
                : <img src={home} alt="" />
              }
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/projetos" >
              {location.pathname === "/projetos" || location.pathname === `/projetos/${pathId}`
                ? <img src={projectActive} alt="" />
                : <img src={project} alt="" />
              }
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/equipes">
              {location.pathname === "/equipes" || location.pathname === `/equipes/${pathId}`
                ? <img src={teamActive} alt="" />
                : <img src={team} alt="" />
              }
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/pessoas">
              {location.pathname === "/pessoas" || location.pathname === `/pessoas/${pathId}`
                ? <img src={personActive} alt="" />
                : <img src={person} alt="" />
              }
            </Link>
          </NavItem>
  
  
        </Nav>
        <Nav>
          <NavItem>
            <LogoutRoundedIcon sx={{ color: "#87888C" }} onClick={(e) => [signout(e), navigate('/')]}>
              logout
            </LogoutRoundedIcon>
          </NavItem>
        </Nav>
      </TemporaryNavContainer>
    );
  }
}

export default Fixed;