import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import logo from '../../assets/logo.svg';
import home from '../../assets/icons/home.svg';
import homeActive from '../../assets/icons/home-active.svg';
import project from '../../assets/icons/project.svg';
import projectActive from '../../assets/icons/project-active.svg';
import team from '../../assets/icons/team.svg';
import teamActive from '../../assets/icons/team-active.svg';
import person from '../../assets/icons/person.svg';
import personActive from '../../assets/icons/person-active.svg';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { createContext } from 'react';
import { Drawer, MenuContainer } from './style';
import { useNavigate, useLocation } from "react-router-dom";
import { TemporaryNavContainer, TemporaryLogo, Nav, NavItem,NavLink } from './style';


export const MenuContext = createContext()

export default function TemporaryDrawer() {
    const [state, setState] = React.useState(false);

    const handleDrawerToggle = () => {
        setState(!state);
    };

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
        <div>
            <React.Fragment key="left">
                <MenuContainer>
                    <IconButton onClick={() => setState(true)}>
                        <MenuRoundedIcon sx={{ color: "#87888C", fontSize: "2rem" }} />
                    </IconButton>
                </MenuContainer>
                <Drawer
                    PaperProps={{
                        sx: {
                            backgroundColor: "#191A23",
                            color: "#87888C",
                        }
                    }}
                    anchor='left'
                    open={state}
                    onClose={() => setState(false)}
                    onOpen={() => setState(true)}
                    sx={{
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 200 },
                    }}
                >
                    <TemporaryNavContainer>
                        <IconButton onClick={() => setState(false)}>
                            <CloseRoundedIcon sx={{color: "#87888C"}} />
                        </IconButton>
                        <TemporaryLogo src={logo} alt="" />
                        <Nav className="nav flex-column gap-5 align-items-center">
                            <NavItem onClick={() => setState(false)}>
                                <NavLink to="/home" >
                                    {location.pathname === "/home"
                                        ? <>
                                            <img src={homeActive} alt="" />
                                            <span style={{ color: "var(--corBotao)" }}>Home</span>
                                        </>
                                        : <>
                                            <img src={home} alt="" />
                                            <span>Home</span>
                                        </>
                                    }
                                </NavLink>
                            </NavItem>
                            <NavItem onClick={() => setState(false)}>
                                <NavLink to="/projetos" >
                                    {location.pathname === "/projetos" || location.pathname === `/projetos/${pathId}`
                                        ? <>
                                            <img src={projectActive} alt="" />
                                            <span style={{ color: "var(--corBotao)" }}>Projetos</span>
                                        </>
                                        : <>
                                            <img src={project} alt="" />
                                            <span>Projetos</span>
                                        </>
                                    }
                                </NavLink>
                            </NavItem>
                            <NavItem onClick={() => setState(false)}>
                                <NavLink to="/equipes">
                                    {location.pathname === "/equipes" || location.pathname === `/equipes/${pathId}`
                                        ? <>
                                            <img src={teamActive} alt="" />
                                            <span style={{ color: "var(--corBotao)" }}>Equipes</span>
                                        </>
                                        : <>
                                            <img src={team} alt="" />
                                            <span>Equipes</span>
                                        </>
                                    }
                                </NavLink>
                            </NavItem>
                            <NavItem onClick={() => setState(false)}>
                                <NavLink to="/pessoas">
                                    {location.pathname === "/pessoas" || location.pathname === `/pessoas/${pathId}`
                                        ? <>
                                            <img src={personActive} alt="" />
                                            <span style={{ color: "var(--corBotao)" }}>Pessoas</span>
                                        </>
                                        : <>
                                            <img src={person} alt="" />
                                            <span>Pessoas</span>
                                        </>
                                    }
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <Nav>
                            <NavItem>
                                <LogoutRoundedIcon sx={{ color: "#87888C" }} onClick={(e) => [signout(e), navigate('/')]}>
                                </LogoutRoundedIcon>
                                <span>Sair</span>
                            </NavItem>
                        </Nav>
                    </TemporaryNavContainer>
                </Drawer>
            </React.Fragment>
        </div>
    );
}
