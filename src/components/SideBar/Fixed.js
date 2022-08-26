import * as React from 'react';
import { useLocation } from "react-router-dom";
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
import { FixedNavContainer, TemporaryNavContainer, Logo, Nav, NavItem, NavLink, FixedNavLink, ItemName } from './style';

export default function Fixed() {
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
  
  return (
    <FixedNavContainer className="col-1 col-lg-1"
    >
      <Logo src={logo} alt="" />
      <Nav>
        <NavItem>
          <FixedNavLink to="/home" >
            {location.pathname === "/home"
              ? <>
                <img src={homeActive} alt="" />
                <ItemName style={{ color: "#F46E27" }}>Home</ItemName>
              </>
              : <>
                <img src={home} alt="" />
                <ItemName>Home</ItemName>
              </>
            }
          </FixedNavLink>
        </NavItem>
        <NavItem>
          <FixedNavLink to="/projetos" >
            {location.pathname === "/projetos" || location.pathname === `/projetos/${pathId}`
              ? <>
                <img src={projectActive} alt="" />
                <ItemName style={{ color: "#F46E27" }}>Projetos</ItemName>
              </>
              : <>
                <img src={project} alt="" />
                <ItemName>Projetos</ItemName>
              </>
            }
          </FixedNavLink>
        </NavItem>
        <NavItem>
          <FixedNavLink to="/equipes">
            {location.pathname === "/equipes" || location.pathname === `/equipes/${pathId}`
              ? <>
                <img src={teamActive} alt="" />
                <ItemName style={{ color: "#F46E27" }}>Equipes</ItemName>
              </>
              : <>
                <img src={team} alt="" />
                <ItemName>Equipes</ItemName>
              </>
            }
          </FixedNavLink>
        </NavItem>
        <NavItem>
          <FixedNavLink to="/pessoas">
            {location.pathname === "/pessoas" || location.pathname === `/pessoas/${pathId}`
              ? <>
                <img src={personActive} alt="" />
                <ItemName style={{ color: "#F46E27" }}>Pessoas</ItemName>
              </>
              : <>
                <img src={person} alt="" />
                <ItemName>Pessoas</ItemName>
              </>
            }
          </FixedNavLink>
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